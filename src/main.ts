import { RequestContext, requestContext, runWithContext } from "./debug";
import { v4 as uuidv4 } from "uuid";
import { qnapServer } from "./qnap-server";

async function handleIncomingRequest(userId: string) {
  const store: RequestContext = {
    requestId: uuidv4(),
    userId: userId,
  };

  await requestContext.run(store, async () => {});
}

function main() {}

main();
