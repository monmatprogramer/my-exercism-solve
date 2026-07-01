//import {commands} from "./secret-handshake";

const divide: number = 31;
let result: number = 0;
let tempDivide: number = divide;
let remainder: number = 0;


do {
  result = tempDivide / 2;
  tempDivide = Math.floor(result);
} while(tempDivide > 0);

const listRemainder: number[] = [];
//remainder
tempDivide = divide;
while (tempDivide > 0) {
  listRemainder.push(divide % 2);
  tempDivide = Math.floor(tempDivide / 2);
  console.log(tempDivide);
}

console.log(listRemainder);
