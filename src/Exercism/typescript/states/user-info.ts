interface UserType {
  id: number;
  username: string;
  email: string;
  role: string;
}

const currentUserState: UserType = {
  id: 101,
  username: "alex99",
  email: "alex_old@test.com",
  role: "user",
};

const updateUserState: UserType = {
  ...currentUserState,
  ["email"]: "alex_new@test.com",
};

console.log("copy state");
console.log({ ...currentUserState });
