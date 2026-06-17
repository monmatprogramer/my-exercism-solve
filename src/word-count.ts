
export function count(words:string):number{
  //convert to lowercase
 const lc:string = convertToLowercase(words);
 //
  return 0;
}

function convertToLowercase(words:string):string{
  const lc: string = words.toLocaleLowerCase();
  return lc;
}
