// We learn about graph algorithm which cause our system easy to search

function lesson1Fun() {
  const networkMap = new Map<string, Set<string>>();

  const configFile = {
    Vera: ["Tomoko", "Toyota", "Yamaha"],
    Tomoko: ["Aditi"],
  };

  for (const [parentName, childrenArray] of Object.entries(configFile)) {
    for (let i: number = 0; i < childrenArray.length; i++) {
      for (let j: number = i + 1; j < childrenArray.length; j++) {
        const siblingA = childrenArray[i];
        const siblingB = childrenArray[j];

        console.log("siblingA: ", siblingA);
        console.log("siblingB: ", siblingB);
      }
    }
  }
}
function lesson2Fun() {
  // Create a record
  const graph: Record<string, string[]> = {
    Vera: ["Bob", "Alice"],
    Bob: ["Vera", "Tomoko"],
    Alice: ["Vera"],
    Tomoko: ["Bob"],
  };

  console.log(graph["Vera"]);
}

lesson2Fun();
