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
  // Take without number cards (2-10)
  let playerA_Deck: string[] = findPlayerDeck(playerA);
  let playerB_Deck: string[] = findPlayerDeck(playerB);

  while (game) {
    // if no one is currely paying a penalty
    if (penaltyAmount === 0) {
      let stateStringA: string[] = playerA_Deck;
      let stateStringB: string[] = playerB_Deck;
      //let combinedState: string = stateStringA + "|" + stateStringB;
      //check combinedState
      //
      if (currentTurn === "A" && playerA_Deck.length < 0) {
        return {
          status: "finished",
          cards: totalCards,
          tricks: totalTricks,
        };
      } else if (currentTurn === "B" && playerB_Deck.length < 0) {
      }
      game = false;
    }
  }
  return {
    status: "finished",
    cards: 10,
    tricks: 1,
  };
};
//
export function findPlayerDeck(playerName: string[]): string[] {
  //check number
  const isNumberRex = /[0-9]/;
  const withoutNumber: string[] = [];
  const withNumber: string[] = [];
  for (const value of playerName) {
    if (!isNumberRex.test(value)) {
      withoutNumber.push(value);
    } else {
      withNumber.push(value);
    }
  }

  return withoutNumber;
}

const playerA: string[] = ["2"];
const playerB: string[] = ["3"];
simulateGame(playerA, playerB);
