// Type
type GameType = {
  status: string;
  cards: number;
  tricks: number;
};
type FaceCard = "J" | "Q" | "K" | "A";
//Penalty formula
const penaltyType: Record<FaceCard, number> = {
  J: 1,
  Q: 2,
  K: 3,
  A: 4,
};
export const simulateGame = (
  playerA: string[],
  playerB: string[],
): GameType => {
  const pile: string[] = [];
  let [totalCards, totalTricks] = [0, 0];
  let currentTurn: FaceCard = "A";
  return {
    status: "finished",
    cards: 10,
    tricks: 1,
  };
};
