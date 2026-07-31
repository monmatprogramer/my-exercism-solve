// --- Lesson1 ---
type UserBox = {
  name: string;
  age: number;
};

function greetUser(user: UserBox) {
  console.log("Hello, " + user.name + "!");
  console.log("You are " + user.age + " years old.");
}

greetUser({ name: "Alice", age: 28 });
