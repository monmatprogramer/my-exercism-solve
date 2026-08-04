import { degreesOfSeparation, FamilyTreeType } from "./relative-distance";

const familyTree: FamilyTreeType = {
  Vera: ["Tomoko"],
  Tomoko: ["Aditi"],
};
const familyTree2 = {
  Dalia: ["Olga", "Yassin"],
};
const familyTree3 = {
  Mary: ["Same", "Leo"],
};
const familyTree4 = {
  Alice: ["Bob", "Charlie"],
  Bob: ["Alice", "Charlie"],
  Charlie: ["Alice", "Bob"],
};
//degreesOfSeparation(familyTree, "Vera", "Tomoko");
//degreesOfSeparation(familyTree2, "Olga", "Yassin");
//degreesOfSeparation(familyTree3, "Olga", "Yassin");
degreesOfSeparation(familyTree4, "Olga", "Yassin");
