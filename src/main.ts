import { safeStringifyMeta } from "./recursionFuns/clean-null";
function main() {
  const meta = {
    username: "monmat",
    password: "12345",
    token: "xilld0333",
    secretKey: "0000000",
  };
  const meta2 = undefined;
  const result = safeStringifyMeta(meta);
  console.log("result: ", result);
}

main();
