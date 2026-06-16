
export function hey(message: string): string {
  message = cleanText(message);
  console.log(`👉 Your message is ${message}`);
  if((message.length === 0 || isTap(message) || isSpecialChar(message))){
    return "Fine. Be that way!";
  }
  // Is Question mark
    // if it has no questio mark
   if( !isQuestion(message)){
      // it is capitial letter
     if(isYelling(message)){
      return "Whoa, chill out!";
     }
     //it is number
      if(isTabAtEnd(message)){
        return "Whatever.";
      }
   }else if(isQuestion(message) && isYelling(message)){
      //ALL CAP and ?
     return "Calm down, I know what I'm doing!";
   }else if(isYelling(message)){
     return "Whoa, chill out!"; 
   }
return isQuestion(message) ? "sure" : "Whatever";

}

function cleanText(message: string): string{
  return message.trim();
}

function isQuestion(message: string): boolean {
  // true = it has question mark.
  return message.endsWith("?");
}

function isYelling(message: string):boolean{
  // check letter
  // check all caps
  // return true = it is all caps
  // TODO: Fix this
  if(isNumber(message)){return false;} 
  return /^[^a-z]+$/.test(message);
  
}
// Strictly allow string
function isNumber(message: string):boolean{
  const isNum = /[0-9]/;
  return isNum.test(message);
}

function isSpace(message:string): boolean{
  return false;
}

function isTap(message:string):boolean{
  //true: it has tab
  const isTab = /^\t+$/;
  return isTab.test(message);
}

//check tab in the end 
const isTabAtEnd = (message:string):boolean => {
  //true = has space
  return  message.endsWith(' ');
}

//find special charactor

const isSpecialChar = (message: string):boolean => {
  //true = special chara is found
  const sc = /[\n\t\r]/;
  return sc.test(message);
}
