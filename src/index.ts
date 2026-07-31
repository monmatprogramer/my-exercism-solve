import { degreesOfSeparation, FamilyTreeType } from "./relative-distance";

const familyTree: FamilyTreeType = {
  Vera: ["Tomoko"],
  Tomoko: ["Aditi"],
};
console.log(typeof familyTree);
//degreesOfSeparation(familyTree, "Vera", "Tomoko");
