export function findFewestCoins(coins: number[], target: number): number[] {
  // 1. Handle the errors first
  if (target < 0) throw new Error("target can't be negative");
  if (target === 0) return [];

  // 2. Create the memory array
  let memory: (number[] | undefined)[] = new Array(target + 1).fill(undefined);
  memory[0] = [];

  // 3. Start the loops
  for (let amount = 1; amount <= target; amount++) {
    for (let coin of coins) {
      // Only test if the coin fits
      if (coin <= amount) {
        let pastAnswer = memory[amount - coin];

        // If we have a past answer, we can make a combination!
        if (pastAnswer !== undefined) {
          // ==========================================
          // YOUR TURN! FILL IN THE 3 BLANK LINES BELOW
          // ==========================================

          // Task 1: Create a new array. Put 'pastAnswer' and 'coin' inside it.
          let newCombination = [...pastAnswer, coin];

          // Task 2: Check if memory[amount] is empty OR if newCombination is shorter
          if (
            memory[amount] === undefined ||
            newCombination.length < memory[amount].length
          ) {
            // Task 3: Save newCombination into memory[amount]
            memory[amount] = newCombination;
          }
          // ==========================================
        }
      }
    }
  }

  // 4. Return the final answer
  if (memory[target] === undefined) {
    throw new Error("can't make target with given coins");
  }

  return memory[target];
}
