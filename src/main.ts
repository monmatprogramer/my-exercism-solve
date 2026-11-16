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
//-------------
//  Check Object
//-------------
function isPlainObject(value: unknown): value is Record<string, unknown> {
  return true;
}

function main() {
  const userArr: string[] = ["user1", "user2"];
  const useObj = {
    name: "Mon Mat",
    sex: "M",
  };
  const r = isPlainObject(userArr);
  qnapServer();
}

main();
