import { List } from "./list-ops";

List.create(1, 2, 3, 4, 5);
const n = new List(11, 22, 33, 44, 55);
n.forEach((item) => console.log("result: ", item));
console.log(n.length());
