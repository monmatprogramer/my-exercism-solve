import { hideSecret } from "./recursionFuns/hide-secrets";

function main() {
  const testUser = {
    name: "Mon Mat",
    role: "admin",
    accounDetails: {
      email: "admin@example.com",
      password: "super-secret-password",
    },
  };
  console.log("Cleaned Result: hideSecret(testUser)");
}

main();
