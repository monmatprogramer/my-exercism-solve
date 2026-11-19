import { returnObject1, returnObject2 } from "./objects/return-object";

function main() {
  const obj1 = returnObject1();
  const obj2 = returnObject2();
  obj1.or();
  obj2.or();
}

main();
