import { List } from "./list-ops";

List.create(1, 2, 3, 4);

let userInput: unknown;
userInput = 123;

if (typeof userInput === "string") {
  console.log(userInput.toLocaleUpperCase());
}

if (typeof userInput === "number") {
  console.log("number");
}
