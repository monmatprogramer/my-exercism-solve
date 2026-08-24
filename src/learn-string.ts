//
const findString = () => {
  const st1: string = "OXXX";
  //find x value in a string
  // method 1
  console.log("method 1");
  for (const char of st1) {
    console.log(char === "X"); // true, false , fasle
  }
  console.log("-----End method  1--- \n\n");
  // method 2
  console.log("method 2");
  let xValue = st1.split("").filter((value) => value === "X");
  console.log(xValue); // ['X']
  console.log("-----End method  2--- \n\n");

  console.log("method 3");
  let xValue1 = st1.split("").map((value) => value === "X");
  console.log(xValue1); // [true, false, false]
  console.log("-----End method  3--- \n\n");

  console.log("method 4");
  const x_expree = /([X])/;
  if (x_expree.test(st1)) {
    console.log(st1.split("X").length - 1);
  }
  console.log("-----End method  4--- \n\n");

  console.log("method 5");
  let count = 0;
  let index = st1.indexOf("X");
  while (index !== -1) {
    count++;
    index = st1.indexOf("X", index + 1);
  }
  console.log(count);
  console.log("-----End method  5--- \n\n");
};

findString();
