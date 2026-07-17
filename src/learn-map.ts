//learn map
const userRoles = new Map<string, string>();

userRoles.set("Alice", "Admin");
userRoles.set("Bob", "Viewer");

//complex object
interface ServerData {
  model: string;
  memoryGB: number;
  ipAddress: string;
  isActive: boolean;
}

const serverNetwork = new Map<string, ServerData>();

console.log(serverNetwork);
