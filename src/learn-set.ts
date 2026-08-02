// Learn set from first step to finish graph algorithm
// I declare globle variable for using in this file
const transactions: string[] = ["001-A", "002-B", "001-A", "003-C"];

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
// -> Description
// * need to run nightly script
// * calculate interest for bank
function calculateInterestBack() {
  // 1. we recieve a daily log with duplication account number
  const dailyTransactions: string[] = [...transactions];
  // 2. Clean code: convert to a set to gurantee unique accounts
  const accountsToProcess = new Set<string>(dailyTransactions);
  // 3. Read each value in set
  for (const account of accountsToProcess) {
    console.log(`Processing 5% interest for account: ${account}`);
  }
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
// -> Clean dirty data from out resource or convert array into set
function cleanDirtyData() {
  // Assumpt we have got dirt data as array
  const dirtyArray: string[] = ["Acc-1", "Acc-2", "Acc-1", "Acc-3", "Acc-2"];
  const cleanSet: Set<string> = new Set<string>(dirtyArray);
}
// -> Convert array back into set
// bacuase some platforms like postgress and React UI work well with array
function converSetToArray() {
  const uniqueAccounts = new Set<string>();
  uniqueAccounts.add("Acc-1");
  uniqueAccounts.add("Acc-2");
  const finalArray: string[] = [...uniqueAccounts];
  console.log(finalArray);
}

// == Challenge 3
// -> Manage network security
function manageNetworkSecurity() {
  // 1. we have a list of IP
}

// ###### Call the lession #####
calculateInterestBack();
