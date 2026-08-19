export function sum(baseValues: number[], level: number) {
  //creat a empty set to hold unqiue multiples
  const set_result_muliples = new Set<number>();
  // set current multiples
  let current_multiples: number = 0;
  // temp total_sum
  let total_sum: number = 0;
  // base value is empty
  if (baseValues.length === 0) {
    return total_sum;
  } else if (baseValues.length === 1 && baseValues[0] === 0) {
    return total_sum;
  } else {
    for (let i: number = 0; i < baseValues.length; i++) {
      let j: number = 1;
      while (true) {
        if (baseValues[i] !== 0) {
          current_multiples = baseValues[i] * j;
        }
        // compare with level
        if (current_multiples >= level) {
          break;
        }
        // Increase number for next multiples
        ++j;
        set_result_muliples.add(current_multiples);
      }
    }
  }

  // Total sum in set
  for (const value of set_result_muliples) {
    total_sum = total_sum + value;
  }
  return total_sum;
}
