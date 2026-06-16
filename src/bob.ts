
export function hey(message: string): string {
  message = cleanText(message);
  console.log(`👉 Your message is ${message}`);
  if((message.length === 0 || isTap(message))){
    return "Fine. Be that way!";
  }
  // Is Question mark
    // if it has questio mark
   if( !isQuestion(message)){
      //it is number
      if(!isYelling(message) || isTabAtEnd(message)){
        return "Whatever.";
      }

   }


  return "---end---";
}

function cleanText(message: string): string{
  return message.trim();
}

function isQuestion(message: string): boolean {
  return message.endsWith("?");
}

function isYelling(message: string):boolean{
  // check letter
  if(!isNumber(message)) return false; // it is not character
  // check all caps
  return false;
}
// Strictly allow string
function isNumber(message: string):boolean{
  const notNumber = /^\D+$/;
  return notNumber.test(message);
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
