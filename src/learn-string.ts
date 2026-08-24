//
const findString = () => {
  const st1: string = "XOO";
  //find x value in a string
  // method 1
  console.log("method 1");
  for (const char of st1) {
    console.log(char === "X");
  }
  console.log("-----End method  1--- \n\n");
  // method 2
  console.log("method 2");
  let xValue = st1.split("").filter((value) => value === "X");
  console.log(xValue);
  console.log("-----End method  1--- \n\n");
};

findString();
