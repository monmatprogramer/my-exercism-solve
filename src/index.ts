import { List } from "./list-ops";

List.create(1, 2, 3, 4, 5);
const n = new List(11, 22, 33, 44, 55);
const n1 = new List(32, 34, 35, 53, 41, 46);
console.log(n.append(n1));
