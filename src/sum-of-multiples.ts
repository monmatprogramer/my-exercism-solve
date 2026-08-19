export function sum(baseValues: number[], multipler: number) {
  //creat a empty set to hold unqiue multiples
  const total_sum = new Set<number>();
  // set current multiples
  let current_multiples: number[];
  // base value is empty
  if (baseValues.length === 0) {
    return total_sum.add(0);
  } else {
    current_multiples = baseValues;
  }
  return 0;
}
