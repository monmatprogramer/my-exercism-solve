//learn about bitwise
function lesson1Fun() {
  let result = 5 & 3;
  console.log(result);
}

// It checks the number is odd or even
function lesson2Fun(num: number): boolean {
  return (num & 1) === 1;
}

console.log(lesson2Fun(5));
console.log(lesson2Fun(8));
