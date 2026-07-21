// Type
type GameType = {
  status: string;
  cards: number;
  tricks: number;
};
export const simulateGame = (
  playerA: string[],
  playerB: string[],
): GameType => {
  return {
    status: "finished",
    cards: 10,
    tricks: 1,
  };
};
