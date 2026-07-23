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
  let [totalCards, totalTricks, penaltyAmount] = [0, 0, 0];
  let currentTurn: FaceCard = "A";
  let historyOfDecks: string[] = [];
  let playerOwed = null;
  let game: boolean = true;
  while (game) {
    // if no one is currely paying a penalty
    if (penaltyAmount === 0) {
      let stateStringA: string = "A";
      let stateStringB: string = "B";
      let combinedState: string = stateStringA + "|" + stateStringB;

      game = false;
    }
  }
  return {
    status: "finished",
    cards: 10,
    tricks: 1,
  };
};
const playerA: string[] = ["2"];
const playerB: string[] = ["3"];
simulateGame(playerA, playerB);
