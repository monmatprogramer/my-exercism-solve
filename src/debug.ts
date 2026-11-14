import * as winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import { mkdirSync } from "node:fs";
import path from "node:path";
import { AsyncLocalStorage } from "node:async_hooks";
import { v4 as uuidv4 } from "uuid";
// it return path of root/logs
const logDir = path.join(process.cwd(), "logs");
const REFRESH_TTL_MS = 7 + 24 * 60 * 60 * 1000;
interface TokenPayLoad {
  userId: string;
  issuedAt: number;
  exp: number;
}
// Interface for tracking user for learning asyncLocalStorage
// We need to define interface of user want to track
//
interface RequestContext {
  requestId: string;
  // Some router can be access from annoymuse user
  userId?: string;
}

// After that the RequestContext will be saved in Local storage
// the storage name is "requestContext"
const requestContext = new AsyncLocalStorage<RequestContext>();

// Create stimulate middleware to perform async function to save request context the same as HTTP request async function
const stimulateMiddleware = () => {
  // Express.js => app.use();
  // Create sample request
  const context = {
    // Generate unique id of request
    requestId: uuidv4(),
    userId: uuidv4(),
  };

  requestContext.run(context, async () => {
    await processOrder();
    await processCheckout();
  });
  testGetStore();
  console.log("=== End of middleware ===");
};

// async function
async function processOrder() {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const store = requestContext.getStore();
  console.log(
    `[Req: ${store?.requestId}] [User: ${store?.userId}] Processing order...`,
  );
}
async function processCheckout() {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const store = requestContext.getStore();
  console.log(
    `[Req: ${store?.requestId}]  [User: ${store?.userId}] Processing checkout...`,
  );
}
function testGetStore() {
  const store = requestContext.getStore();
  console.log(`[Req: ${store?.requestId}] Processing test...`);
}
// Set up sensitive keys redact
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
// -----
export const asyncLocalStorage = new AsyncLocalStorage<string>();
// Stimulate middlare for testing correlation
async function testCorrelationInMiddlare() {
  const correlationId = uuidv4();
  asyncLocalStorage.run(correlationId, async () => {
    logger.info("User created", { userId: 123, role: "admin" });
  });
}
function paymentTest() {
  console.log(asyncLocalStorage.getStore());
  console.log("Payment is finished");
  checkout();
  return true;
}
function checkout() {
  console.log("\nCheck process...");
  console.log("User id: ", asyncLocalStorage.getStore());
  console.log("=== End checkout ===");
}

// Create correlationID

const addCorrelationId = winston.format((info: any) => {
  const correlationId = asyncLocalStorage.getStore();
  if (correlationId) {
    //...meta
    info.correlationId = correlationId;
  }
  return info;
});
const metadataFormat = winston.format((info) => {
  info.service = "test-app";
  info.environment = "development";
  return info;
});
const testFormatPrintF = ({
  message,
  level,
  service,
  environment,
  timestamp,
  ...meta
}: any) => {
  //...meta
  const metrStr = Object.keys(meta).length > 0 ? `${JSON.stringify(meta)}` : "";
  // check  the ccorrect id is type string or not
  const correlId =
    typeof meta.correlationId === "string"
      ? `[correlationId: ${meta.correlationId}]`
      : undefined;
  return `${timestamp} [${level}]:${correlId} : ${message}${metrStr}`;
};
function maskObject() {
  console.log("\n=== maskObject ===");
}
const redactSensitiveDate = winston.format((info) => {
  console.log("\n=== redactSensitiveDate ===");
  console.log(info);
  maskObject();
  return info;
});

// Create file format
const fileFormat = winston.format.combine(
  addCorrelationId(),
  metadataFormat(),
  redactSensitiveDate(),
  winston.format.timestamp(),
  winston.format.json(),
);

//Create logger
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    metadataFormat(),
    addCorrelationId(),
    winston.format.timestamp(),
    winston.format.colorize(),

    // winston.format.json(),
    winston.format.printf((obj) => testFormatPrintF(obj)),
  ),
  transports: [
    new winston.transports.Console(),
    new DailyRotateFile({
      dirname: logDir,
      filename: "combined-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      maxSize: "20m",
      maxFiles: "14d",
      zippedArchive: true,
      format: fileFormat,
    }),
  ],
});

function createAccessToken(userId: string): TokenPayLoad {
  // Convert Unix millisecond to second
  // because it compare seoncon only, not compare with millisecond,
  // ex: 5000(millisecond) -covert-> 5 (second)
  const currentTime = Math.floor(Date.now() / 1000);
  // Convert minute to second
  // for making comparation
  // e.g. 15 (minute) -- convert -> 9000 (second)
  const lifeTime = 15 * 60;
  return {
    userId: userId,
    issuedAt: currentTime,
    //ex. currentTime + 900
    exp: currentTime + lifeTime,
  };
}
function createRefreshToken(userId: string): TokenPayLoad {
  const currentTime = Math.floor(Date.now() / 100);

  const lifeTime = 7 * 24 * 60 * 60;

  return {
    userId: userId,
    issuedAt: currentTime,
    exp: currentTime + lifeTime,
  };
}
function isTokenExpired(tokenExpireTimestamp: number): boolean {
  const currentTime = Math.floor(Date.now() / 1000);
  return currentTime > tokenExpireTimestamp;
}
function timeDate() {
  const dayNow = new Date();
  const now = Date.now();
  const gt = new Date(Date.now() + REFRESH_TTL_MS).getTime();
  console.log("dayNow", dayNow);
  console.log("Now", now);
  console.log("Get Time: ", gt);
}

function setExpiresTime() {
  const nowInMilliseconds = Date.now();
  const currentTimeInSeconds = Math.floor(nowInMilliseconds / 1000);
  const oneHourInSeconds = 60 * 60; //3600 (1hr)
  const expireTiem = currentTimeInSeconds + oneHourInSeconds;
}

//----- Logger--

function normalizeToken(rawRefreshToken: string | null): {
  isValid: boolean;
  value: string;
} {
  if (!rawRefreshToken) {
    return {
      isValid: false,
      value: "null",
    };
  }
  if (rawRefreshToken.trim().length === 0) {
    return {
      isValid: false,
      value: "empty string",
    };
  }
  return {
    isValid: true,
    value: `${rawRefreshToken ? rawRefreshToken : null}`,
  };
}
function learnType(fn: () => string) {
  const r = fn();
  console.log(r);
}
// Test map or learn more about user agent

// It is the constanst value
const DEFAULT_BROWSER = "Unknown Browser";
const DEFAULT_OS = "Unknown OS";
const DEFAULT_DEVICE = "Unknown Device";
const DEFAULT_SEPARATOR = " | ";

// Interface of User agent info
interface UserAgentInfo {
  browser: string;
  os: string;
  device: string;
  isMobile: boolean;
  fullUserAgent: string;
}
interface UserAgentConfig {
  includeDevice?: boolean;
  seperator?: string;
  defaultBrowser?: string;
  defaultOS?: string;
}
function learnMap(config: UserAgentConfig = {}) {
  //User Agent Map
  const userAgentCache = new Map<string, UserAgentInfo>();
  // Set map the value
  userAgentCache.set("Chrome-Windows", {
    browser: "Chrome",
    os: "Windows 11",
    device: "Desktop",
    isMobile: false,
    fullUserAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
  });
  userAgentCache.set("Safari-iPhone", {
    browser: "Safari",
    os: "iOS 18",
    device: "iPhone 15",
    isMobile: true,
    fullUserAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1",
  });
  userAgentCache.set("Edge-Windows", {
    browser: "Edge",
    os: "Windows 11",
    device: "Desktop",
    isMobile: false,
    fullUserAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Edg/130.0.0.0",
  });
  // Call parse user agent
  const userAgent =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36";
  const userAgentUndefined = "";
  // Invoke parse  user agent
  parseUserAgent(userAgent, config);
}
// Pase User agent
function parseUserAgent(
  userAgent: string,
  config: UserAgentConfig,
): UserAgentInfo {
  // If user agent is empty, this will be return default value in object of user agent
  if (!userAgent) {
    // It return object user agent that we want to use in the application
    return {
      browser: config.defaultBrowser ?? DEFAULT_BROWSER,
      os: config.defaultOS ?? DEFAULT_OS,
      device: DEFAULT_DEVICE,
      isMobile: false,
      fullUserAgent: "",
    };
  }
  const parser = getParser();
  // If user agent is not empty
  const userAgentInfo: UserAgentInfo = {
    browser: "",
    os: "",
    device: "",
    isMobile: false,
    fullUserAgent: "",
  };

  console.log(userAgentInfo);

  return userAgentInfo;
}
function learnPassEmptyObj(config: UserAgentConfig = {}) {
  console.log(config);
}

function learnArrayIArray() {
  const arr = ["Chrome-Windows", "Safari-iPhone"];
  const map = new Map();
  // Check type
  console.log(Array.isArray(arr)); //True
  console.log(Array.isArray(map)); //False
}
// Lazy & Eager
class UAParser {
  greet() {
    console.log("Nice to meet you");
  }
}
// Enger
const sharedParser = new UAParser();
// Lazy
let sharedParserLazy: UAParser | null = null;
//Eager function call
function getParser(): UAParser {
  return sharedParser;
}
// Lazy function call
function getParserLazy(): UAParser {
  if (!sharedParserLazy) {
    sharedParserLazy = new UAParser();
  }
  return sharedParserLazy;
}
// Invoke this lession
function learnEagerAndLazy() {
  // Eager Call
  getParser().greet();
}
// Challenge about lazy
class DatabaseConnection {
  public id: string;
  public createdAt: Date;
  constructor() {
    this.id = `db-conn-${Math.random().toString(36).substring(2, 9)}`;
    this.createdAt = new Date();
    console.log(
      `[DB INIT] Expense database connection established: ${this.id}`,
    );
  }

  public query(sql: string): string {
    return `Execute "${sql}" on ${this.id}`;
  }
}
// Call the challenge
let connection: DatabaseConnection | null = null;
function getDatabase(): DatabaseConnection {
  if (!connection) {
    connection = new DatabaseConnection();
  }
  return connection;
}
function resetDatabase(): void {
  connection = null;
}
function verifyTest() {
  console.log("=== Step 1: Server boots up ===");
  console.log(connection);
  console.log("\n=== Step 2: First request arrives (need DB) ===");
  const db1 = getDatabase();
  console.log("Query 1: ", db1.query("SELECT * FROM users"));
  console.log("\nStep 3: Second request arrives ===");
  const db2 = getDatabase();
  console.log("Query 2: ", db2.query("SELECT * FROM profiles"));
  console.log("\n=== Step 4: Third request arrives ===");
  const db3 = getDatabase();
  console.log("Query 3: ", db3.query("SELECT * FROM settings"));
  console.log("\n=== Check Results ===");
  const isSingleInstance = db1 === db2 && db2 === db3;
  console.log(
    "Are all instance identical?",
    isSingleInstance ? "✅ PASS" : "❌ FAIL",
  );
}
// Check device type
function checkOnlyTwoCondition(deviceType: string) {
  // Device type can be 'deskto', 'mobile', 'tablet', '...'
  // Set conddtion here
  const result = Boolean(deviceType === "mobile");
  //Better
  const result2 = deviceType === "mobile";
  console.log(result);
  console.log(result2);
}
function capitalizeDevice(device: string) {
  //mobile => Mobile
  const result = device.charAt(0).toUpperCase() + device.slice(1);
  console.log(result);
}
// Calculate duration

const findDuration = (start: any): any => {
  const durationDate = new Date(Date.now() - start).toISOString().slice(11, 19);
  return durationDate;
};

// Learn how to make directory
function makeDire() {
  mkdirSync(logDir, { recursive: true });
}

function writeLog() {
  const daily = new DailyRotateFile({
    filename: path.join(logDir, "test-%DATE%.log"),
    datePattern: "DD-MM-YYYY",
    maxSize: "1m", // 1 mb
    maxFiles: "7d", // Keep 7 day
    zippedArchive: true, // when it over 7 day, the file is zipped
  });
}

function learnMakeDire() {
  writeLog();
}
function callLoggerforTesting() {
  testCorrelationInMiddlare();
  // Call here
}
function callRecactSen() {
  // Convert Set to array
  // using spread operator
  const SENSITIVE_KEYS_ARR = [...SENSITIVE_KEYS];
  callLoggerforTesting();
  redactSensitiveDate();
}

const main = () => {
  callRecactSen();
};
main();
