import { valid } from "./luhn";

let d: string = "12 345 334 34";

//console.log(valid("111"));

const getNumOnlyRex = /^[0-1]+$/;

console.log(getNumOnlyRex.test("11a11"));
