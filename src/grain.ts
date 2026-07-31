//grain exercise
export const square = (N: number): BigInt => {
  if (N < 1 || N > 64) {
    throw new Error("Square must be between 1 and 64");
  }
  const bigN = BigInt(N);
  return 2n ** (bigN - 1n);
};

export const total = (): BigInt => {
  return 2n ** 64n - 1n;
};
