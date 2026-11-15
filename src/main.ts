import { RequestContext, requestContext, runWithContext } from "./debug";
import { v4 as uuidv4 } from "uuid";

async function handleIncomingRequest(userId: string) {
  const store: RequestContext = {
    requestId: uuidv4(),
    userId: userId,
  };
  await runWithContext<RequestContext>(store, async () => {
    await processOrder();
  });
}

async function processOrder() {}
