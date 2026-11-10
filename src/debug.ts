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
function learnMap() {
  //
}
const main = () => {};
main();
