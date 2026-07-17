//etl exercise
// create a type for old data
type OldData = {
  [key: number]: string[];
};

type NewData = {
  [key: string]: number;
};
export function transform(oldData: OldData) {
  console.log(oldData);
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
