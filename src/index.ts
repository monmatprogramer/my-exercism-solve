import { List } from "./list-ops";

List.create(1, 2, 3, 4);

let userInput: unknown;
userInput = {
  id: 1,
  name: "MonMat",
  phone: "070836110",
};

if (typeof userInput === "string") {
  console.log(userInput.toLocaleUpperCase());
}

if (typeof userInput === "number") {
  console.log("number");
}

if (typeof userInput === "object") {
  console.log("object");
}
