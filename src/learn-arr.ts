//Learn array
const input: string = "one car two car three car three dog four car";
let notFoundWord: string [] = input.split(" ");

console.log(notFoundWord.indexOf('one'));

/*
 *Document 
 *  ## Remove specific index of array
 *  use splice(index, number of element want to remove)
 * */

const value: string = notFoundWord[0];
const two: string = notFoundWord[1];
const three: string = notFoundWord[2];
const myMap = new Map<string,number>();
const match: string[] = notFoundWord.filter((v) => v === value);
const matchTwo: string[] = notFoundWord.filter((v) => v === two);
const matchThree: string[] = notFoundWord.filter((v) => v === three);
let result: string[] = [];
for(let i:number = 0; i < notFoundWord.length; i++){
  let value: string = notFoundWord[i];
  //index: 0, 1
  result = notFoundWord.filter((v) => v === value );
  myMap.set(value, result.length); 
}


console.log(input);
console.log(myMap);
