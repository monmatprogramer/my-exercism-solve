// Dynamic Programming (DP) or Memoization

const target = 4;

let memory: (number[] | undefined)[] = new Array(target + 1).fill(undefined);

memory[3] = [1, 2];

// There are 6 slots (0-5)
console.log(memory);
