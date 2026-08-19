export function sum(baseValues: number[], level: number) {
  //creat a empty set to hold unqiue multiples
  const total_sum = new Set<number>();
  // set current multiples
  let current_multiples: number;
  // base value is empty
  if (baseValues.length === 0) {
    return total_sum.add(0);
  } else {
    for (let i: number = 0; i < baseValues.length; i++) {
      let j: number = 1;
      while (true) {
        current_multiples = baseValues[i] * j;
        // compare with level
      }
    }
  }
  return 0;
}
