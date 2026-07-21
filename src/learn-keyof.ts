interface User {
  id: number;
  name: string;
  email: string;
}
//UserKyes as "id" | "name" | "email"
type UserKyes = keyof User;

let field: UserKeys;
