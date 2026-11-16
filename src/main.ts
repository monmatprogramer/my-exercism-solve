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
  const info = { username: "alice", status: "failed" };
  console.log("info: ", info);
  //fake log
  const infoInject = {
    username:
      'alice", "status":"failed"}\r\n{"username":"admin", "status":"sucess',
  };
  console.log("infoInject: ", infoInject);
}

main();
