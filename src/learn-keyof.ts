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

// -- Common Use Case ---
// 1. Type-Safe Dynamic Property Access
