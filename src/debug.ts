import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import { mkdirSync } from "node:fs";
import path from "node:path";

// it return path of root/logs
const logDir = path.join(process.cwd(), "logs");
const REFRESH_TTL_MS = 7 + 24 * 60 * 60 * 1000;
interface TokenPayLoad {
  userId: string;
  issuedAt: number;
  exp: number;
}

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
  });
}
function learnMakeDire() {
  writeLog();
}

const main = () => {
  learnMakeDire();
};
main();
