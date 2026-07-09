import { Rational } from "./rational-numbers";
const actual = new Rational(1, -1).add(new Rational(2, 2));
console.log(actual.numerator);
console.log(actual.denominator);
