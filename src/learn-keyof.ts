// ## Case 1
interface User {
  id: number;
  name: string;
  email: string;
}
//UserKyes as "id" | "name" | "email"
type UserKeys = keyof User;

let field: UserKeys;
field = "name"; // pass because it is key of User
//field = "age"; //error

// ## Case 2
type Server = {
  model: string;
  memory: string;
  isOnline: boolean;
};
//AllowedKeys = 'model' | 'memory' | 'isOnline'
type AllowedKeys = keyof Server;
// 1. we create our data
const myNAS = {
  model: "QNAP TS-433",
  memory: "4G",
  isOnline: true,
};
// -- Common Use Case ---
// 1. Type-Safe Dynamic Property Access
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {}
