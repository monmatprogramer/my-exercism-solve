export function findFewestCoins(coins: number[], target: number): number[] {
  if (target < 0) throw new Error("target can't be negative");
  if (target === 0) return [];

  let memory: (number[] | undefined)[] = new Array(target + 1).fill(undefined);
  memory[0] = [];

  for (let amount = 1; amount <= target; amount++) {
    for (let coin of coins) {
      if (coin <= amount) {
        let pastAnswer = memory[amount - coin];

        if (pastAnswer !== undefined) {
          let newCombination = [...pastAnswer, coin];

          if (
            memory[amount] === undefined ||
            newCombination.length < memory[amount]!.length
          ) {
            memory[amount] = newCombination;
          }
        }
      }
    }
  }

  if (memory[target] === undefined) {
    throw new Error("can't make target with given coins");
  }
  let finalAnswer = memory[target];

  // Sort the final array from smallest to biggest
  finalAnswer.sort((a, b) => a - b);

  return finalAnswer;
}
