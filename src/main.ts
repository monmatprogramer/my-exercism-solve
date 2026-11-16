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
  const myServerConfig = {
    host: "127.0.0.1",
    database: {
      user: "postgres",
      password: "super-secret-db-password",
      apiToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    },
    services: {
      payment: {
        stripe_token: "sk_test_123456789",
        status: "active",
      },
    },
  };
  console.log("Cleaned Result: ", hideSecret(myServerConfig));
}

main();
