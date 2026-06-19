// store word count here
let totalWord: number = 0;

export function count(words:string):number{
  console.log(`👤 user input: ${words}`);
  //convert to lowercase
 const lc:string = convertToLowercase(words);
  // get array list  ['word', 'smart']
 const wordArr: string[] = toArray(lc);
  const wordMap = initialMap(wordArr);
 console.log("----End----");
  return totalWord;
}

function convertToLowercase(words:string):string{
  const lc: string = words.toLocaleLowerCase();
  const arr:string[] = words.split(" ");
  
  //for(const [index, value] of arr.entries()){
    //findApostrophes(words);
  //}
 // findApostrophes(words);
  return lc;
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
  console.log(`👉 word array: ${wordArr}`);
  console.log(`🔢 total legnth : ${wordArr.length - 1}`);
  // find match word
  let tempArr: string[] = [];
  let found: string;
  const wordMap = new Map<string,number>();

  let count:number = 0;
  
  for(let i: number = 0; i < wordArr.length; i++){
   console.log(wordArr[i]); 
    for(let j:number = i+1; j < wordArr.length; j++){
      if(wordArr[i] === wordArr[j]){
        wordMap.set(wordArr[i], count++)
      }
    }
  }

  return wordMap;
};

