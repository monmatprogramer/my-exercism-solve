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
// Test map
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
  parseUserAgent(userAgent, config);
}
// Pase User agent
function parseUserAgent(userAgent: string, config: UserAgentConfig): string {
  return "";
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

const main = () => {
  learnMap();
};
main();
