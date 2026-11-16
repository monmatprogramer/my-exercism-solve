import { RequestContext, requestContext, runWithContext } from "./debug";
import { v4 as uuidv4 } from "uuid";

async function handleIncomingRequest(userId: string) {
  const store: RequestContext = {
    requestId: uuidv4(),
    userId: userId,
  };

  await requestContext.run(store, async () => {});
}

function isPlainObject(value: unknown) {}
function main() {
  const userArr = ["user1", "user2"];
  console.log(typeof userArr);
  // isPlainObject()
}

main();
