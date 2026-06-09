
import type {ColorTypes} from "./types"; const COLORS:string[] = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
export function decodedResistorValue(colorNameList: ColorTypes[]): string {
    let tempListNumber: number[] = [];
    let lastNumber:number=0;
    let appendString:string = '0';
    let numbericColor: string = "";
    let totalNumeric:number = 0;
    
    tempListNumber = findOutIndexNumeric(colorNameList);
        //find name of numberic color
      //let num = colorNameList.map((colorTitle,index)=> index < 2 && COLORS.indexOf(colorTitle));
    numbericColor = tempListNumber.length > 2 ? findTwoDigit([tempListNumber[0], tempListNumber[1]]) : "";
    
   lastNumber = findLastNumber(tempListNumber);//4
    console.log('lastNumber'+ lastNumber);
   appendString = findAppendingStr(lastNumber);//00 00
    console.log("apendString: "+ appendString);
    console.log("numbericColor: "+ numbericColor);
    appendString = numbericColor + appendString;//47 

   
    console.log("appendString: "+appendString);//470000
    if( lastNumber === 3 || ( (Number(appendString) > 1000) && Number(appendString) < 10000 ) || ((Number(appendString) / 1000) < 1000)){
      return `${Number(appendString)/1000} kiloohms`;
    }else if(lastNumber > 3 || (Number(appendString) > 1000 && Number(appendString) < 10000000)){
      return `${numbericColor} megaohms`; 
    }else if(lastNumber > 6){
      return `${numbericColor} gigaohms`; 
    }else if(lastNumber >9 && lastNumber < 13){
      return `${numbericColor} teraohms`; 
    }else{
      if (Number(appendString) === 0) {
        return  `${lastNumber} ohms`;
      }else if(Number(appendString) / 1000 < 1000){
        return `${( (Number(appendString)/ 1000 * 100) ) < 10 
          ?  (Number(appendString)/ 1000 * 100) : 
            (Number(appendString)/ 1000 * 100) * 10 } ohms`;
      } 
      return '';
    }
}

//Create a function to find out color name list [white,white,white] =>  [9, 9, 9]
function findOutIndexNumeric(userColorInput: ColorTypes[] ): number[]{
  //check size of userColorInput ex: [orange,orange,black] 330
  let tempListNumeric: number[] = []; //store numberic temporary
  userColorInput.length > 2 && 
    userColorInput.map((colorName) => tempListNumeric.push( COLORS.indexOf(colorName)));
  return tempListNumeric;
}

//Create a function to take out only two digits lieke [9,9,9] => [9,9]
function findTwoDigit(listNumeric: number[]):string {
  return listNumeric[0] === 0 ? listNumeric[1].toString() : listNumeric.join("");
}

//Find last number ex: [7,3,6] => [6]
function findLastNumber(colorNumberic: number[]) : number {
  //[1,2,3]
  for(let i:number = 0; i < 2; i++){
    colorNumberic.shift();
  }
  return colorNumberic[0];
}

//Find appending string. Ex:[4] -> 19 => 190000
export function findAppendingStr(numeric: number): string {
  switch(numeric){
    case 2:
      return countZero(2);
      break;
    case 3:
      return countZero(3)
      break;
    case 4:
      return countZero(4);
      break;
    case 5:
      return countZero(5);
      break;
    case 6:
      return countZero(6);
      break;
    case 7:
      return countZero(7);
      break;
    case 8:
      return countZero(8);
      break;
    case 9:
      return countZero(9);
      break;
    default:
      return "0";
  }
}

function countZero(userCase: number): string{
  let tempZeroList: number[] = [];
  
  for(let i:number = 1; i <= userCase; i++){
    tempZeroList.push(0);
  };
  
  return tempZeroList.join("");
 
}
