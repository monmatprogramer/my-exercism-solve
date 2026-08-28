// check history exercise
// Create state
const myHistory = new Set<string>();
const checkHistory = (state: string) => {
  if (myHistory.has(state)) {
    console.log("Already seen this state!");
  } else {
    myHistory.add(state);
    if (myHistory.has(state)) {
      console.log("New state saved!");
    }
  }
};

checkHistory("Add water");
checkHistory("Add water");
checkHistory("Add water");
