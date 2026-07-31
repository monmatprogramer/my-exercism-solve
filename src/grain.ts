//grain exercise
export const square = (N: number) => {
  if (N < 1 || N > 64) {
    throw new Error("Square must be between 1 and 64");
  }
  console.log("square");
};

export const total = () => {
  console.log("total");
};
