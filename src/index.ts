import { List } from "./list-ops";

List.create(1, 2, 3, 4);

let userInput: unknown;
userInput = "hello world";

if (typeof userInput === "string") {
  console.log(userInput.toLocaleUpperCase());
}
