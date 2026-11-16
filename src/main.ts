import { RequestContext, requestContext, runWithContext } from "./debug";
import { v4 as uuidv4 } from "uuid";

async function handleIncomingRequest(userId: string) {
  const store: RequestContext = {
    requestId: uuidv4(),
    userId: userId,
  };

  await requestContext.run(store, async () => {});
}

function main() {
  const info = {
    username: "alice\r\n[INFO] User 'admin' logged in successfull",
  };
  const serialized = JSON.stringify(info);
  console.log(serialized);
}

main();
