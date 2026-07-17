//etl exercise
// create a type for old data
type OldData = {
  [key: string]: string[];
};
export function transform(oldData: OldData) {
  // Convert to map object
  const d: Map<string, number> = convertToMap(oldData);
  convertToSJsObject(d);
}

const old = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
};

transform(old);
function convertToMap(oldData: OldData): Map<string, number> {
  //conver to map
  const letterScores = new Map<string, number>();

  for (const [scoreString, letterArray] of Object.entries(old)) {
    //Conver numerice to be number
    const scoreNumber = Number(scoreString);
    //loop on the array
    for (const letter of letterArray) {
      letterScores.set(letter.toLocaleLowerCase(), scoreNumber);
    }
  }
  return letterScores;
}
// Convert it backt to a standard JS object
function convertToSJsObject(oldData: Map<string, number>): OldData {
  let d = Object.fromEntries(oldData);
  console.log(d);
  return d;
}
