import { Rational } from "./rational-numbers";
const actual = new Rational(13, 13);
actual.reduce();
console.log(actual.numerator);
console.log(actual.demominator);
