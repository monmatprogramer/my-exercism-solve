const REFRESH_TTL_MS = 7 + 24 * 60 * 60 * 1000;
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

  console.log("now in milliseconds: ", nowInMilliseconds);
  console.log("currentTimeInSeconds: ", currentTimeInSeconds);
}
const main = () => {
  setExpiresTime();
};
main();
