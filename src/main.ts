import { safeStringifyMeta } from "./recursionFuns/clean-null";
function main() {
  const meta = {
    username: "monmat",
    password: "12345",
    token: "xilld0333",
    secretKey: "0000000",
  };
  safeStringifyMeta(meta);
}

main();
