const userRoles = new Map<number, string>();

userRoles.set(101, "Admin");
userRoles.set(102, "Moderator");

console.log(JSON.stringify(userRoles.get(101)));
