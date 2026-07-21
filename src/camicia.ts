// Type
type GameType = {
  status: string;
  cards: number;
  tricks: number;
};
//Penalty formula
type PenaltyType = {};
export const simulateGame = (
  playerA: string[],
  playerB: string[],
): GameType => {
  const pile: string[] = [];
  let [totalCards, totalTricks] = [0, 0];
  let currentTurn: string = "A";
  return {
    status: "finished",
    cards: 10,
    tricks: 1,
  };
};
