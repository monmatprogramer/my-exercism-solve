import * as winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import { mkdirSync } from "node:fs";
import path from "node:path";
import { getRequestContext } from "./context";

/** Directory where rotated log files are written. */
export const LOG_DIR = path.join(process.cwd(), "logs");

/** Keys whose values should be redacted from log output. */
const SENSITIVE_KEYS = new Set([
  "password",
  "token",
  "accessToken",
  "refreshToken",
  "authorization",
  "secret",
  "apiKey",
  "creditCard",
]);

/** Winston fields that must never be touched by redaction. */
const STANDARD_FIELDS = new Set([
  "level",
  "message",
  "meta",
  "timestamp",
  "service",
  "environment",
  "correlationId",
  "splat",
]);

/** Returns true when a key refers to sensitive data. */
function isSensitiveKey(key: string): boolean {
  return SENSITIVE_KEYS.has(key.toLowerCase());
}

/**
 * Recursively redacts values of sensitive keys inside an object. Primitive
 * values are returned as-is; arrays and plain objects are traversed.
 */
function redactValue(value: unknown): unknown {
  if (value === null || value === undefined) return value;
  if (Array.isArray(value)) return value.map(redactValue);
  if (typeof value === "object") {
    const result: Record<string, unknown> = {};
    for (const [key, val] of Object.entries(value as Record<string, unknown>)) {
      result[key] = isSensitiveKey(key)
        ? "***REDACTED***"
        : redactValue(val);
    }
    return result;
  }
  return value;
}

/**
 * Winston format that masks sensitive fields on the info object (and inside
 * `info.meta`) so secrets never reach the log transports.
 */
const redactSensitive = winston.format(
  (info: winston.Logform.TransformableInfo) => {
    for (const [key, value] of Object.entries(info)) {
      if (STANDARD_FIELDS.has(key)) continue;
      if (isSensitiveKey(key)) {
        (info as Record<string, unknown>)[key] = "***REDACTED***";
      } else if (value !== null && typeof value === "object") {
        (info as Record<string, unknown>)[key] = redactValue(value);
      }
    }
    if (info.meta !== undefined && typeof info.meta === "object") {
      info.meta = redactValue(info.meta) as Record<string, unknown>;
    }
    return info;
  },
);

/** Injects the current request id as `correlationId` on each log entry. */
const addCorrelationId = winston.format(
  (info: winston.Logform.TransformableInfo) => {
    const requestId = getRequestContext()?.requestId;
    if (requestId) {
      info.correlationId = requestId;
    }
    return info;
  },
);

/** Stamps every entry with service and environment metadata. */
const metadataFormat = winston.format(
  (info: winston.Logform.TransformableInfo) => {
    info.service = "test-app";
    info.environment = "development";
    return info;
  },
);

/** Human-friendly format for the console transport. */
const consolePrintf = winston.format.printf(
  ({
    timestamp,
    level,
    message,
    correlationId,
    service,
    environment,
    ...meta
  }) => {
    const metaStr =
      Object.keys(meta).length > 0 ? ` ${JSON.stringify(meta)}` : "";
    const correlation = correlationId
      ? `[correlationId:${correlationId}]`
      : "";
    return `${timestamp} [${level}]:${correlation} ${message}${metaStr}`;
  },
);

/** Format used for the console transport (colored, single-line). */
export const consoleFormat = winston.format.combine(
  metadataFormat(),
  addCorrelationId(),
  winston.format.timestamp(),
  redactSensitive(),
  winston.format.colorize(),
  consolePrintf,
);

/** Format used for file transports (structured JSON). */
export const fileFormat = winston.format.combine(
  addCorrelationId(),
  metadataFormat(),
  redactSensitive(),
  winston.format.timestamp(),
  winston.format.json(),
);

/** Ensures the log directory exists before the logger writes to it. */
export function ensureLogDir(): void {
  mkdirSync(LOG_DIR, { recursive: true });
}

ensureLogDir();

/**
 * Application-wide Winston logger.
 *
 * - Console: colored, human-readable lines with correlation id.
 *   File: daily-rotated JSON with sensitive fields redacted.
 */
export const logger = winston.createLogger({
  level: "info",
  format: consoleFormat,
  transports: [
    new winston.transports.Console(),
    new DailyRotateFile({
      dirname: LOG_DIR,
      filename: "combined-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      maxSize: "20m",
      maxFiles: "14d",
      zippedArchive: true,
      format: fileFormat,
    }),
  ],
});
