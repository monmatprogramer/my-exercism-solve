// We learn about graph algorithm which cause our system easy to search

function lesson1Fun() {
  const networkMap = new Map<string, Set<string>>();

  const configFile = {
    Vera: ["Tomoko"],
    Tomoko: ["Aditi"],
  };
  for (const [paraentName, childrenArray] of Object.entries(configFile)) {
    console.log("Main Server: ", paraentName);
    console.log("Backup Server: ", childrenArray);
  }
}

lesson1Fun();
