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
function mapOfObject() {
  let graph = new Map<string, string[]>();
  let object = {
    Vera: ["Bob", "Alice"],
    Bob: ["Vera", "Tomoko"],
    Alice: ["Vera"],
    Tomoko: ["Bob"],
  };
  graph = new Map(Object.entries(object));
  console.log(graph.get("Vera"));
}

// # 3. use Map
// Use case: need advanced key types
function toWayThree() {
  const featureFlags = new Map<string, boolean>();
  const relatives = new Map<string, string[]>();
  //-- fill relative
  relatives.set("Mat", ["Meng", "Mouy", "Heng"]);
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

  for (const [parent, children] of Object.entries(familyTree4)) {
    if (!graph.has(parent)) {
      graph.set(parent, [...children]);
    }
    let tempChildren: string[] = children;
    let remainArray: string[];
    let tempParent: string | undefined;
    let firstEle: string;
    let secondEle: string;
    for (let i: number = 0; i < children.length; i++) {
      tempParent = tempChildren.shift();
      remainArray = tempChildren;
      /*
      for(const[index, valueJ] of tempChildren){
         
      }
      */
      tempChildren = [tempParent!, ...remainArray];
      firstEle = tempChildren[0];
      secondEle = tempChildren[i + 1];
      tempChildren[0] = secondEle;
      tempChildren[i + 1] = firstEle;
      remainArray = [parent, ...remainArray];

      graph.set(tempParent!, remainArray);
    }
  }
  console.log(graph);
}
mapOfObject();
