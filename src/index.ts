import { degreesOfSeparation, FamilyTreeType } from "./relative-distance";

const familyTree: FamilyTreeType = {
  Vera: ["Tomoko"],
  Tomoko: ["Aditi"],
};
const familyTree2 = {
  Dalia: ["Olga", "Yassin"],
};

degreesOfSeparation(familyTree, "Vera", "Tomoko");
degreesOfSeparation(familyTree2, "Olga", "Yassin");
