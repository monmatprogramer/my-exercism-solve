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
  isOnline: false,
};
// -- Common Use Case ---
// 1. Type-Safe Dynamic Property Access
const currentOnline = getProperty(myNAS, "isOnline", true);
const currentRam = getProperty(myNAS, "memory", "6G");

function getProperty<T, K extends keyof T>(
  obj: T,
  key: K,
  newValue: T[K],
): void {
  // obj = { model: 'QNAP TS-433', memory: '4G', isOnline: false }
  // key = isOnline ✅ because 'K extends keyof T'
  // newvalue: true 'boolean', its type change automatically because T[K]
  obj[key] = newValue;
  // obj = { model: 'QNAP TS-433', memory: '4G', isOnline: true ✅ }
}

// 3. Lock property
type ServerSettings = {
  readonly serialNumber: string;
  readonly model: string;
  memorySizeGB: number;
  isOnline: boolean;
};
// create object
const myNAS2: ServerSettings = {
  serialNumber: "SN123456789",
  model: "QNAP TS-433",
  memorySizeGB: 4,
  isOnline: true,
};
// myNAS2.model = "New Server"; // Error because it is locked
