//etl exercise
// create a type for old data
type OldData = {
  [key: number]: string[];
};
type NewData = {
  [key: string]: number;
};
export function transform(oldData: OldData) {}

console.log(JSON.stringify({ 1: ["A"] }));
