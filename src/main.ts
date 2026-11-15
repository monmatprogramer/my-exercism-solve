import { RequestContext, requestContext } from "./debug";
import { v4 as uuidv4 } from "uuid";

async function handleIncomingRequest(userId: string) {
  const store: RequestContext = {
    requestId: uuidv4(),
    userId: userId,
  };
}
