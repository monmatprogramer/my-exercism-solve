import { randomBytes } from "node:bycrypto";

function createRefreshToken(): string {
  return randomBytes(32).toString("base64Url");
}

const main = () => {};
main();
