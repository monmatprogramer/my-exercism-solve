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
  // --- 2. check the value exist or not in the set list
  processedTransactions.has("transaction1"); // true
  // --- 3. Delete specific value
  processedTransactions.delete("transaction1");
  // --- 4. Check size like check lenght of an array
  processedTransactions.size; //Set(0){}
  // --- 5. Clear every value in the set list like delete whole an array element
  processedTransactions.clear(); // No any return cus it is void method
}
// ###### Challenges ########
// -> it manages admin to our server
function manageAdmin() {
  // Create a set to store only admin ID number
  const adminId = new Set<number>();
}
// ###### Call the lession #####
lession1Fun();
