//this is pangram.ts

//alphabet list
//alphabet string
const alpSt = 'abcefghijklmnopqrstuvwxyz';
const alphabetList: string[] = alpSt.split('');
const input: string = 'The quick brown fox jumps over the lazy dog';

export function isPangram(userInput: string):boolean {
  let strArra:string[] = [];
  //check empty
  if(isEmpty(userInput)){
    return false;
  }
  //remove space
  removeSpace(userInput);
  

  //convert string to array
  strArra = transformToArray(userInput);

  //sort and remove duplicate
  return true;

}

function isEmpty(userString: string):boolean{
  //true: empty
  //false: not empty
  return userString.length === 0 ? true:false; 
}

//remove space
function removeSpace(userString:string):string{
  return userString.replace(/ /g, '');
}

function transformToArray(userString: string): string[]{
  return userString.split('');
}

function sortAndNoDublicate(originalStrArr: string[]):string[]{
  //sorted
  const sortedStrArra: string[] = originalStrArr.sort();
  return [''];
}
