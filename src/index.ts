import { degreesOfSeparation } from "./relative-distance";

const familyTree = {
  Vera: ["Tomoko"],
  Tomoko: ["Aditi"],
};
console.log(typeof familyTree);
//degreesOfSeparation(familyTree, "Vera", "Tomoko");
