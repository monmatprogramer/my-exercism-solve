import { List } from "./list-ops";
const n = new List(1, 2, 3, 4);
n.foldr((acc, el) => acc - el, 5);
