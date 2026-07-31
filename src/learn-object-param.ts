// --- Lesson1 ---
type UserBox = {
  name: string;
  age: number;
};

function greetUser(user: UserBox) {
  console.log("Hello, " + user.name + "!");
  console.log("You are " + user.age + " years old.");
}

//greetUser({ name: "Alice", age: 28 });

// --- Lesson2 manage the server ---

type ServerInfo = {
  model: string;
  memoryGb: number;
  isOnline: boolean;
};

function checkServer(server: ServerInfo) {
  if (server.isOnline) {
    console.log("The " + server.model + " server is running");
    console.log("Memory " + server.memoryGb + "GB");
  } else {
    console.log("Alert: Server is down");
  }
}
