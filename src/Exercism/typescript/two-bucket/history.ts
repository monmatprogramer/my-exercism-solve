// check history exercise
// Create state
const myHistory = new Set<string>();
const checkHistory = (state: string) => {
  if (myHistory.has(state)) {
    console.log("Already seen this state!");
  } else {
    myHistory.add(state);
    if (myHistory.has(state)) {
      console.log("NNew state saved!");
    }
  }
};

checkHistory("Add water");
