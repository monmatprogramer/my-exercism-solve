import { List } from "./list-ops";

List.create(1, 2, 3, 4, 5);
const n = new List(1, 2, 3, 4);
n.foldl((acc, el) => acc + el, 5);
