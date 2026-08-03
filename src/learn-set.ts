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
// -> Description
// * The save same data in the object can be save in set because its based on those objects
interface Customer {
  id: string;
  name: string;
}
function saveObjectInSet() {
  const customerSet = new Set<Customer>();
  customerSet.add({ id: "C-01", name: "David" });
  customerSet.add({ id: "C-01", name: "David" });
  console.log(customerSet.size);
}
// -> Description
// Do not insert whole object in set
// but insert only where unique value into its
function inputUniqueData() {
  // This data is unique on id
  const customersFromDB = [
    { id: "C-01", name: "David", balance: 5000 },
    { id: "C-02", name: "Sarah", balance: 8000 },
    { id: "C-01", name: "David", balance: 5000 },
  ];

  const uniqueCustomerIds = new Set<string>();
  const cleanCustomerList = [];
  for (const customer of customersFromDB) {
    if (!uniqueCustomerIds.has(customer.id)) {
      uniqueCustomerIds.add(customer.id);
      cleanCustomerList.push(customer);
    }
  }
  console.log(cleanCustomerList);
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
  // 1. we have a list of IP into log
  const loginLogs: string[] = [
    "192.168.1.1",
    "10.0.0.5",
    "192.168.1.1",
    "172.16.0.2",
  ];
  //const cleanLoginLogs: Set<string> = new Set<string>(loginLogs);
  const cleanLoginLogs: string[] = [...new Set(loginLogs)];
  for (const eachIp of cleanLoginLogs) {
    console.log(`Scanning IP: [${eachIp}]`);
  }
}
// challenge 4
// -> Save unique objecto
function saveAlertObject() {
  const alerts = [
    { code: "ERR-01", message: "CPU High" },
    { code: "ERR-02", message: "Memory Low" },
    { code: "ERR-01", message: "CPU High" },
  ];
  const uniqueAlert: Set<string> = new Set<string>();
  const cleanAlert = [];
  for (const unique of alerts) {
    if (!uniqueAlert.has(unique.code)) {
      uniqueAlert.add(unique.code);
      cleanAlert.push(unique);
    }
  }
  console.log(cleanAlert);
}
// Chanllege 5
// -> Prevent network glitch
interface Transactions {
  transactionId: string;
  customerName: string;
  amount: number;
}
function preventNetworkDuplicate() {
  //incoming transaction that will be filter what something duplicate
  const incomingPayments: Transactions[] = [
    { transactionId: "TXN-991", customerName: "Alice", amount: 150 },
    { transactionId: "TXN-992", customerName: "Bob", amount: 300 },
    { transactionId: "TXN-991", customerName: "Alice", amount: 150 }, // Duplicate!
    { transactionId: "TXN-993", customerName: "Charlie", amount: 50 },
    { transactionId: "TXN-992", customerName: "Bob", amount: 300 },
  ];
  // Create a set to store transaction id only
  // This purpose to remove duplicate transaction twice
  const uniqueTransactionIdSet: Set<string> = new Set<string>();

  // After we clean data, we need to create an array to store the cleaned data
  // This only store the clean data only
  const cleanPayments: Transactions[] = [];

  // Start to clear duplication transaction id
  for (const incomingPayment of incomingPayments) {
    if (!uniqueTransactionIdSet.has(incomingPayment.transactionId)) {
      // we need to add transaction id here becuase we need to take condition
      uniqueTransactionIdSet.add(incomingPayment.transactionId);
      // Save the into clean store place
      cleanPayments.push(incomingPayment);
    }
  }
}
//
// ###### Call the lession #####
preventNetworkDuplicate();
