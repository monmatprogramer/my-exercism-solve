export const findFewestCoins = (coins: number[], target: number): number[] => {
  const bestSolution: number[] = [];
  if (target < 0) {
    throw new Error("It is negative");
  }
  if (target === 0) {
    return [];
  }

  for (let i: number = 0; i < target; i++) {}
  return [];
};

findFewestCoins([1, 5, 10, 25], 1);
