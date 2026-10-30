const REFRESH_TTL_MS = 7 + 24 * 60 * 60 * 1000;
interface TokenPayLoad {
  userId: string;
  issuedAt: number;
  exp: number;
}

function createAccessToken(userId: string): TokenPayLoad {
  const currentTime = Math.floor(Date.now() / 1000);
  console.log(60 * 60 * 1000);
  console.log((60 * 60 * 1000) / 1000);
  console.log((60 * 60 * 1000) / 1000 / 3600);
  return {
    userId: userId,
    issuedAt: currentTime,
    exp: 1,
  };
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
const main = () => {
  console.log(createAccessToken("user-1"));
};
main();
