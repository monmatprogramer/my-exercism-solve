import { RequestContext, requestContext, runWithContext } from "./debug";
import { v4 as uuidv4 } from "uuid";

async function handleIncomingRequest(userId: string) {
  const store: RequestContext = {
    requestId: uuidv4(),
    userId: userId,
  };

  await requestContext.run(store, async () => {});
}

function isPlainObject(value: unknown) {
  return value;
}
function main() {
  const userArr: string[] = ["user1", "user2"];
  const useObj = {
    name: "Mon Mat",
    sex: "M",
  };
  const r = isPlainObject(userArr);
  console.log(r);
}

main();
