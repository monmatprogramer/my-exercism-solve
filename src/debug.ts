const REFRESH_TTL_MS = 7 + 24 * 60 * 60 * 1000;
function timeDate() {
  const dayNow = new Date();
  const now = Date.now();
  const gt = new Date(Date.now() + REFRESH_TTL_MS).getTime();
  console.log("dayNow", dayNow);
  console.log("Now", now);
}
const main = () => {
  timeDate();
};
main();
