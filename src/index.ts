import {Clock} from "./clock";

const cl1 = new Clock(0,0);
const cl2 = new Clock(3,0);

cl1.equals(cl2);
console.log(cl1.toString());
