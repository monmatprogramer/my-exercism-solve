// Dynamic Programming (DP) or Memoization

const target = 4;

let memory: (number[] | undefined)[] = new Array(target + 1).fill(undefined);

function findStudentScore() {
  // we create 5 slotes to store score
  let scores: (number | undefined)[] = new Array(5).fill(undefined);
  //save scores
  scores[2] = 95;
  console.log("scores array: ", scores);
}

findStudentScore();
