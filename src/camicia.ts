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
  let actionValueA: string | number;
  let actionValueB: string | number;
  let getPile: string[] = [];
  let continueCondition: boolean = false;
  let loopCondition: boolean = true;
  let stepCount: number = 1;
  let trickCount: number = 0;
  let numberOfCard: number = 0;
  let resultObj: GameType;
  let statusState = "finished";
  const isNumRex = /^[0-9]/;
  while (loopCondition) {
    // Checking action
    switch (turn) {
      case "A":
        actionValueA = isNumRex.test(collectionA[0])
          ? Number(collectionA[0])
          : collectionA[0];
        console.log("➡️  ", collectionA);
        getPile.push(collectionA.shift()!);
        playerA_Deck = collectionA;
        turn = "B";
        break;
      case "B":
        break;
        actionValueB = isNumRex.test(collectionB[0])
          ? Number(collectionB[0])
          : collectionB[0];
        getPile.push(collectionB.shift()!);
        playerB_Deck = collectionA;
        turn = "A";
      default:
        throw new Error("Invalid turn");
    }

    // Compare action
    if (
      typeof actionValueA! === "number" &&
      typeof actionValueB! === "number"
    ) {
      if (actionValueA > actionValueB) {
        collectionA = [...playerA_Deck, ...getPile];
        playerA = collectionA;
        continueCondition = playerB_Deck.length === 0 ? false : true;
        if (continueCondition) {
          turn = "A";
        }
      } else if (actionValueB > actionValueA) {
        collectionB = [...playerB_Deck, ...getPile];
        playerB = collectionB;
        continueCondition = playerA_Deck.length === 0 ? false : true;
        if (continueCondition) {
          turn = "B";
        } else {
          throw new Error("Error on action A and B and its turn ");
        }
      }
    } else {
      throw new Error("Not complete logic on compare action ");
    }
    // Increase step action
    ++stepCount;
    ++numberOfCard;
    if (continueCondition) {
      loopCondition = true;
      ++trickCount;
      if (stepCount === 0) {
        tempCollectionA = collectionA;
        tempCollectionB = collectionB;
      } else if (stepCount !== 1) {
        throw new Error("Not complete in step not equal 1");
      }
    } else {
      loopCondition = false;
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

try {
  const playerA: string[] = ["2"];
  const playerB: string[] = ["3"];
  simulateGame(playerA, playerB);
} catch (e: any) {
  console.log(e.message);
}
