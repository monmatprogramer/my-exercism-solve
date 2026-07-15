import { List } from "./list-ops";

const list2 = List.create(3);
//it shoud be list2 = []
const list3 = List.create<number>();

const list4 = List.create(4, 5, 6);

const listOfLists = List.create(list2, list3, list4);

const list1 = List.create(1, 2);

list1.concatenate(listOfLists);
