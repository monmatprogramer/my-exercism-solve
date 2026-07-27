function findFewesCoins(coins: number[], target: number): number[] {
  if (target < 0) throw new Error("Target cann't be negative");
  if (target === 0) return [];
  let memory: (number[] | undefined)[] = new Array(target + 1).fill(undefined);
  memory[0] = [];
  console.log(memory);
  return [];
}

findFewesCoins([1, 5, 10, 25, 100], 15);
