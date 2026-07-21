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
