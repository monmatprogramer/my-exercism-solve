// --- The to create a dictionary in typeScript
// # 1. use Record
function toWayOne() {
  const userAges: Record<string, number> = {
    Alice: 28,
    Bob: 34,
  };
  userAges["Alice"] = 22;
  console.log(userAges);
}
// # 2. use Index
// - 2.1 create an  interface
interface StringNumberDic {
  [key: string]: number;
}
function toWayTwo() {}
toWayTwo();
