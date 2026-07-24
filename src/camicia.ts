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
  const tempCollectionA: string[] = [];
  const tempCollectionB: string[] = [];
  let turn: string = "A";
  let actionValueA:string = '';
  let actionValueB: string = '';
  let getPile: string[] = [];
  let continueCondition: string[] = [];
  let loopCondition: boolean = true;
  let septCount: number = 1;
  let trickCount: number = 0;
  let numberOfCard: number = 0;
  let resultObj: GameType;
  let statusState = "finished";
  while (loopCondition) {
    switch (turn) {
      case "A":
        actionValueA = collectionA[0];
        getPile = 
        break;
      case "B":
        break;
      default:
        throw new Error("Invalid turn");
    }
  }

  //Assign resultObj firt before calling.
  resultObj = {
    status: statusState,
    cards: numberOfCard,
    tricks: trickCount,
  };
  return resultObj;
};

const playerA: string[] = ["2"];
const playerB: string[] = ["3"];
simulateGame(playerA, playerB);
