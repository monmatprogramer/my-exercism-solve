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
  let playerA_Deck: string[] = [];
  let playerB_Deck: string[] = [];
  let collectionA: string[] = playerA;
  let collectionB: string[] = playerB;
};

const playerA: string[] = ["2"];
const playerB: string[] = ["3"];
simulateGame(playerA, playerB);
