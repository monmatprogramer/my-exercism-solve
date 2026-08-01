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
// == Challenge 1
// -> it manages admin to our server
function manageAdmin() {
  // Create a set to store only admin ID number
  const adminId = new Set<number>();
  // Add the admin ID
  const adminIdLists: number[] = [501, 502, 501];
  try {
    for (let i: number = 0; i < adminIdLists.length; i++) {
      adminId.add(adminIdLists[i]);
    }
  } catch (e: any) {
    console.log(e.message);
  }
  console.log(adminId.size);
  console.log("---END----");
}
// == Challenge 2

// ###### Call the lession #####
manageAdmin();
