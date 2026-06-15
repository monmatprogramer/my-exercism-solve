//this is pangram.ts

//alphabet list
//alphabet string
const alpSt = 'abcdefghijklmnopqrstuvwxyz';
const alphabetList: string[] = alpSt.split('');
const input: string = 'The quick brown fox jumps over the lazy dog';

export function isPangram(userInput: string):boolean {
  let strArra:string[] = [];
  //check empty
  if(isEmpty(userInput)){
    return false;
  }
  //remove space
  userInput = removeSpace(userInput);
  //to lower case
  userInput = userInput.toLocaleLowerCase();
  //convert string to array
  strArra = transformToArray(userInput);

  //sort and remove duplicate
  strArra = sortAndNoDublicate(strArra);

  return matchAlphabet(strArra);

}

function isEmpty(userString: string):boolean{
  //true: empty
  //false: not empty
  return userString.length === 0 ? true:false; 
}

//remove space
function removeSpace(userString:string):string{
  return userString.replace(/[^a-zA-Z]/g, '');
}

function transformToArray(userString: string): string[]{
  return userString.split('');
}

function sortAndNoDublicate(originalStrArr: string[]):string[]{
  //sorted
  const sortedStrArra: string[] = originalStrArr.sort();
  //remove duplicate
  const removeDup = new Set<string>(sortedStrArra);
  return [...removeDup];
}

function matchAlphabet(alp:string[]):boolean{
  if(alp.length !== alphabetList.length ) return false;
  return alp.every((value, index) => value === alphabetList[index]);
}
