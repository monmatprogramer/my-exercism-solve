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
  let tempArr: string[] = wordArr;
  let found: string;
  const wordMap = new Map<string,number>();

  let count:number = 0;
    
  for(let i:number = 0; i < wordArr.length; i++){
    let value1: string = wordArr[i];
    for(let j:number = i+1; j < tempArr.length; j++){
      let value2: string = tempArr[j];
      console.log(wordArr[i]);
      console.log(wordArr[j]);
      console.log("\n");

      if(value1 === value2){
          console.log("😊 ", value1 === value2);
          let foundWord: string [] = wordArr.filter((v) => v === value1 );
          console.log(foundWord);
          let notFoundWord: string [] = wordArr.filter((v) => v !== value1 );
          console.log("\n");
          console.log(notFoundWord);
          tempArr = notFoundWord;
          wordArr = tempArr;
          wordMap.set(wordArr[i], foundWord.length);
          console.log(wordMap.get(wordArr[i])); 
      }else{
          count = 0;
          wordMap.set(value2, count+1);
       }
    }

  }
  console.log(wordArr);
  console.log(wordMap); 
  return wordMap;
};

