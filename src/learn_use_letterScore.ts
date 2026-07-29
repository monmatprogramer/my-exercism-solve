// This is learn to use letter score from scrabble exercise
// Learn to use it

import { letterScores } from "./scrabble-score";
// {'Z':10}
const scoreForZ = letterScores["Z"];
//console.log(scoreForZ);
const word: string = "quirky";
const wordUpper: string = word.toUpperCase();

// find word in letter scores
for (const char of wordUpper) {
  console.log(char);
}
