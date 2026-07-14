import { List } from "./list-ops";

List.create(1, 2, 3, 4, 5);
const n = new List(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 33, 44, 55);
n.map((n) => {
  return n + 1;
});
