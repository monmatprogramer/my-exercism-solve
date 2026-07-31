//grain exercise
export const square = (N: number): BigInt => {
  if (N < 1 || N > 64) {
    throw new Error("Square must be between 1 and 64");
  }
  const bigN: BigInt = BigInt(N);
  console.log(bigN);
  console.log(2n - 1n);
  //return 2n ** (bigN - 1n);
  return 0n;
};

export const total = () => {
  console.log("total");
};
