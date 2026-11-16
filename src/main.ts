import { RequestContext, requestContext, runWithContext } from "./debug";
import { v4 as uuidv4 } from "uuid";

async function handleIncomingRequest(userId: string) {
  const store: RequestContext = {
    requestId: uuidv4(),
    userId: userId,
  };

  await requestContext.run(store, async () => {});
}
//--------
// Check return type
//-------
type Admin = {
  name: string;
  role: "admin";
  canDeleteFiles: boolean;
};
type StandardUser = {
  name: string;
  role: "user";
};

type AnyUser = Admin | StandardUser;

// Checck is admin
function isAdmin(user: AnyUser): user is Admin {
  //return
  return user.role === "admin";
}
// Mange server
function manageServer(user: AnyUser) {
  if (isAdmin(user)) {
    console.log("Admin: ", user.canDeleteFiles);
  } else {
    console.log("Standard user: ", user.name);
  }
}
function learnType() {
  const user: StandardUser = {
    name: "monmat",
    role: "user",
  };
  manageServer(user);
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
  learnType();
}

main();
