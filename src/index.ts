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
const familyTree5 = {
  John: ["Anna", "Tom"],
};
//degreesOfSeparation(familyTree, "Vera", "Tomoko");
//degreesOfSeparation(familyTree2, "Olga", "Yassin");
//degreesOfSeparation(familyTree3, "Olga", "Yassin");
degreesOfSeparation(familyTree5, "Olga", "Yassin");
