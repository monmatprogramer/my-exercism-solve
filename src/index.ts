import { List } from "./list-ops";
const n = new List(1, 2, 3, 4);
n.foldl((acc, el) => acc + el, 5);
