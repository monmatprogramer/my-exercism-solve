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
  let stepCount: number = 0;
  let trickCount: number = 0;
  let numberOfCard: number = 0;
  let resultObj: GameType;
  let statusState = "finished";
  const isNumRex = /^[0-9]/;
  while (loopCondition) {
    // Checking action
    if (turn === "A") {
      // Save data in actionValueA
      actionValueA = isNumRex.test(playerA[0])
        ? Number(playerA[0])
        : playerA[0];
      // Remove an element
      playerA.shift();
      getPile.push(String(actionValueA!));
      // Save player into playerA_Deck
      playerA_Deck = playerA;
      //count card or steps
      ++stepCount;

      if (playerB.length !== 0) {
        turn = "B";
      }
    }
    if (turn === "B") {
      // Save data into actionValueB
      actionValueB = isNumRex.test(playerB[0])
        ? Number(playerB[0])
        : playerB[0];
      // Remove an element
      playerB.shift();
      getPile.push(String(actionValueB));
      playerB_Deck = playerB;
      //Count step or car
      ++stepCount;
    }

    // Compare action
    if (
      typeof actionValueA! === "number" &&
      typeof actionValueB! === "number"
    ) {
      if (actionValueA > actionValueB) {
        collectionA = [...playerA_Deck, ...getPile];
        if (playerA_Deck.length === 0 && playerB_Deck.length === 0) {
          playerA = collectionA;
        }
        continueCondition = playerB_Deck.length === 0 ? false : true;
        if (continueCondition) {
          turn = "A";
        }
      } else if (actionValueB > actionValueA) {
        if (playerA_Deck.length !== 0) {
          playerA = playerA_Deck;
          turn = "A";
          continueCondition = playerA_Deck.length === 0 ? false : true;
        } else {
          collectionB = [...playerB_Deck, ...getPile];

          if (playerB.length !== 0) {
            playerB = collectionB;
            continueCondition = playerA_Deck.length === 0 ? false : true;
            if (continueCondition) {
              turn = "B";
            }
          } else {
            ++trickCount;
            resultObj = {
              status: "finished",
              cards: stepCount,
              tricks: trickCount,
            };
            return resultObj;
          }
        }
      }
    } else {
      throw new Error(
        `💥 Not complete logic on compare action: actionValueA ${typeof actionValueA!} and actionValueB ${typeof actionValueB!}`,
      );
    }
    // Increase step action
    //++trickCount;
    if (continueCondition) {
      loopCondition = true;
      if (stepCount === 0) {
        tempCollectionA.push(String(collectionA));
        tempCollectionB.push(String(collectionB));
      } else if (stepCount !== 1) {
        //throw new Error("Not complete in step not equal 1");
      }
      loopCondition = false;
    } else {
      loopCondition = false;
      if (playerA_Deck.length === 0 && playerB_Deck.length === 0) {
        ++trickCount;
      }
    }
    //++stepCount;
  }

  //Assign resultObj firt before calling.
  resultObj = {
    status: statusState,
    cards: stepCount,
    tricks: trickCount,
  };
  return resultObj;
};

try {
  const playerA = ["2", "4"];
  const playerB = ["3"];
  const playerA1 = ["2"];
  const playerB1 = ["3"];
  console.log(simulateGame(playerA, playerB));
} catch (e: any) {
  console.log(e.message);
}
