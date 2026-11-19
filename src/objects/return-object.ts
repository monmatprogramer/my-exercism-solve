//-------------------
// Return object using normal function
//-------------------

export function returnObject1() {
  return {
    or: () => {
      console.log("or function");
    },
  };
}

//-------------------
// Return object using arrow function
//-------------------
export const returnObject2 = () => ({
  or: () => {
    console.log("or function 2");
  },
});
