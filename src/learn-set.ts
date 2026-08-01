// Learn set from first step to finish graph algorithm

function lession1Fun() {
  // define new set
  // --- bad declaring
  const badSet = new Set();
  // --- good declaring and clean coding
  const processedTransactions = new Set<string>();
  // Method of set as following:
  // --- 1. add
  processedTransactions.add("transaction1");
  console.log("->", processedTransactions);
  dis(processedTransactions);
}

// For displaying in cmd
const dis = (param: unknown) => {
  if (typeof param === "object") {
    console.log(JSON.stringify(param));
  } else console.log(`➡️ Result: ${param}`);
};

// ###### Call the lession #####
lession1Fun();
