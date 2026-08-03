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
//degreesOfSeparation(familyTree, "Vera", "Tomoko");
//degreesOfSeparation(familyTree2, "Olga", "Yassin");
degreesOfSeparation(familyTree3, "Olga", "Yassin");
