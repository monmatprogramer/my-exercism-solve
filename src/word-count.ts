
export function count(words:string):number{
  //convert to lowercase
 const lc:string = convertToLowercase(words);
 //
  return 0;
}

function convertToLowercase(words:string):string{
  const lc: string = words.toLocaleLowerCase();
  findApostrophes(words);
  return lc;
}

// find apostrophes 
function findApostrophes(message: string){
  // Create Reg pattern
  const fap = /\b[a-z0-9]+'?[a-z0-9]+\b|[a-z0-9]+\b/g;
  const tr = fap.test(message);
  console.log(tr);

};
