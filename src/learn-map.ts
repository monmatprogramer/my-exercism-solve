// --- The to create a dictionary in typeScript
// # 1. use Record
// Use case: simple object-based
function toWayOne() {
  const userAges: Record<string, number> = {
    Alice: 28,
    Bob: 34,
  };

  userAges["Alice"] = 22;
  // Read each value
  for (const name of Object.entries(userAges)) {
    console.log(name);
  }
  // Read only value
  for (const value of Object.values(userAges)) {
    console.log(value);
  }
  // Read only key
  for (const key of Object.keys(userAges)) {
    console.log(key);
  }
  //{ Alice: 22, Bob: 34 }
}

// # 2. use Index (tranditional way)
// - 2.1 create an  interface
// Use case : use with existing interface
interface StringNumberDic {
  [key: string]: number;
}
function toWayTwo() {
  const scores: StringNumberDic = {
    player1: 100,
    player2: 250,
  };
  console.log(scores);
  //{ player1: 100, player2: 250 }
}

// # 3. use Map
// Use case: need advanced key types
function toWayThree() {
  const featureFlags = new Map<string, boolean>();
  featureFlags.set("darkMode", true);
  featureFlags.set("betaFeatures", false);
  featureFlags.set("darkMode", false);
  const isDardMode = featureFlags.get("darkMode"); // false
  //check
  featureFlags.has("acb"); //false
  // loop
  for (const featureName of featureFlags) {
    ///console.log(featureName);
  }
  const familyTree: Record<string, string[]> = {
    Marry: ["Same", "Leo"],
    //Sokchan: ["Kunthea", "Duch", "Teav"],
  };

  const familyTree4 = {
    Alice: ["Bob", "Charlie"],
    Bob: ["Alice", "Charlie"],
    Charlie: ["Alice", "Bob"],
  };
  const familyTree5 = {
    John: ["Anna", "Tome"],
  };
  const familyTree6 = {
    A: ["B", "C", "D"],
  };
  const graph = new Map<string, string[]>();
  let i: number = 0;
  let init: boolean = true;
  let tempChil: string = "";
  let tempparent: string = "";
  for (const [parent, children] of Object.entries(familyTree6)) {
    if (!graph.has(parent)) {
      graph.set(parent, children);
    }

    let tempArray: string[] = [];
    let tempChildren: string[] = children;
    for (let i: number = 0; i < children.length; i++) {
      tempparent = tempChildren[i];
      for (let j: number = 1; j < children.length; j++) {
        tempArray.push(children[j]);
      }
      graph.set(tempparent, [parent, ...tempArray]);
      tempArray = [];
    }
  }
  console.log(graph);
}

toWayThree();
