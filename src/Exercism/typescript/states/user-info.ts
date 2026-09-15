interface User {
  id: number;
  username: string;
  email: string;
  role: string;
}

const currentUserState: User = {
  id: 101,
  username: "alex99",
  email: "alex_old@test.com",
  role: "user",
};

const updateUserState: User = {
  ...currentUserState,
  ["email"]: "alex_new@test.com",
};
function updateUser(user: User, update: Partial<User>): User {
  return { ...user, ...update };
}

const result = updateUser(currentUserState, { username: "monmat" });
console.log(result);
