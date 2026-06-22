// store word count here
let totalWord: number = 0;

export function count(words:string):Map<string,number>{
  //convert to lowercase
 const lc:string = convertToLowercase(words);
  // get array list  ['word', 'smart']
 const wordArr: string[] = toArray(lc);
  const wordMap = initialMap(wordArr);
 console.log("----End----");
  return wordMap;
}

function convertToLowercase(words:string):string{
  //findSeqApostrophes(words);
  findApostrophes(words);
  words = cleanMessyData(words);
  //multiple spaces
  words = words.replace(/\s+/g, " ");
  //remove double space
  //if(words.includes("  ")){
  //  words = words.replace(/  /g," ");
  //}
  if(words.includes(",")){
    words = words.replace(/,/g, ' ');
  }
  if(words.includes("\n")){
    words = words.replace(/\n/g, "");
  }
  console.log(words);
  const lc: string = words.trim().toLocaleLowerCase();
  return lc;
}
//Check messy data
function cleanMessyData(input:string):string{
    return input.replace(/\s+/g,' ').replace(/[^a-zA-Z0-9\s']/g,' ').replace(/(^|[^a-zA-Z])'|'([^a-zA-Z]|$)/g, "$1$2").replace(/ +/g,' ').trim();
}
// Create a function to conver to array
const toArray = (words: string):string[] => {
  const wordArr: string[] = words.split(" ");
  // Add it into map
  return wordArr;
};



// find apostrophes 
// it returns true = found 
function findApostrophes(message: string){
  // Create Reg pattern
  const fap = /\b[a-z0-9]+'?[a-z0-9]+\b|[a-z0-9]+\b/g;
  const tr = fap.test(message);
  console.log(tr);
};
// create a loop to find sequence in a string
const findSeqApostrophes = (text:string) => {
  // flag for counting '
  let count = 0; 
  // using loop for(const char of text){
  for(const char of text){ 
  if(char === "'"){
      count++;
    }
  }
  console.log(count);
}
 // create a function to initialize a new map
const initialMap =  (wordArr: string[]): Map<string,number> => {
  let result: string[] = [];
  const myMap = new Map<string, number> ();
  for(const [index, value] of wordArr.entries()){
    result = wordArr.filter((element) => element === value );
    myMap.set(value, result.length);
  }
  return myMap;
};

