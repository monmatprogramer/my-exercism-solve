import { clean } from "./phone-number.ts";

let ph: string = "12234567890";
// let test = clean("12234567890");
// console.log(test);
ph = ph
  .split("")
  .splice(1, ph.length - 1)
  .join("");
console.log(ph);
