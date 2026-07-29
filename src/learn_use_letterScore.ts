// This is learn to use letter score from scrabble exercise
// Learn to use it

import { letterScores } from "./scrabble-score";
// {'Z':10}
const scoreForZ = letterScores["Z"];
//console.log(scoreForZ);
let totalScore: number = 0;
const word: string = "quirky";
const wordUpper: string = word.toUpperCase();

// find word in letter scores
for (const char of wordUpper) {
  // final result must  22;
}
