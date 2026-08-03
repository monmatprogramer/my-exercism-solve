// --- The to create a dictionary in typeScript
// # 1. use Record
function toWayOne() {
  const userAges: Record<string, number> = {
    Alice: 28,
    Bob: 34,
  };
  userAges["Alice"] = 22;
  console.log(userAges);
  //{ Alice: 22, Bob: 34 }
}
// # 2. use Index (tranditional way)
// - 2.1 create an  interface
interface StringNumberDic {
  [key: string]: number;
}
function toWayTwo() {
  const scores: StringNumberDic = {
    player1: 100,
    player2: 250,
  };
  console.log(scores);
  //{ player1: 100, player2: 250 }
}
toWayTwo();
