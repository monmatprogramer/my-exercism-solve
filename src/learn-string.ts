//
const findString = () => {
  const st1: string = "XOO";
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
  let xValue2 = st1.split("").map((value) => value === "X");
  console.log(); // [true, false, false]
  console.log("-----End method  4--- \n\n");
};

findString();
