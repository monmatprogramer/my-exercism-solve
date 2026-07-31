// We learn about graph algorithm which cause our system easy to search

function lesson1Fun() {
  const networkMap = new Map<string, Set<string>>();

  const configFile = {
    Vera: ["Tomoko"],
    Tomoko: ["Aditi"],
  };
  for (const [parentName, childrenArray] of Object.entries(configFile)) {
    for (let i: number = 0; i < childrenArray.length; i++) {
      console.log(i);
      for (let j: number = 0; j < childrenArray.length; j++) {
        console.log(j);
      }
    }
  }
}

lesson1Fun();
