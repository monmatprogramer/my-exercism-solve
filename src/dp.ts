// Dynamic Programming (DP) or Memoization

function findStudentScore() {
  // we create 5 slotes to store score
  let scores: (number | undefined)[] = new Array(5).fill(undefined);
  //save scores
  scores[2] = 95;
  if (scores[2] !== undefined) {
    console.log("Student 2 score:", scores[2]);
  }
  console.log("scores array: ", scores);
}

function favoritFruitsFun() {
  let favoritFruits: (number[] | undefined)[] = new Array(4).fill(undefined);
  favoritFruits[0] = [1, 3];
  console.log(favoritFruits);
}
function ageFun() {
  let ages: (number | undefined)[] = new Array(5).fill(undefined);
  ages[0] = 18;
  ages[3] = 25;
  ages[5] = 30;
  // Check before using
  if (ages[2] !== undefined) {
    console.log("Age found: ", ages[2]);
  } else {
    console.log("Age not found");
  }
  console.log(ages);
}

function courseFun() {
  let courses: (number[] | undefined)[] = new Array(4).fill(undefined);
  courses[0] = [101, 102];
  courses[2] = [201];
  courses[3] = [301, 302, 303];
  console.log(courses);
}
//Count Stored Values
function countStoredValue() {
  let memory: (number[] | undefined)[] = new Array(6).fill(undefined);
  memory[1] = [10];
  memory[4] = [20, 30];
  memory[5] = [40];
  let countResult: number = 0;
  for (let i: number = 0; i < 6; i++) {
    if (memory[i] !== undefined) {
      ++countResult;
    }
  }
}
countStoredValue();
