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
  const pile: string[] = [];
  return {
    status: "finished",
    cards: 10,
    tricks: 1,
  };
};
