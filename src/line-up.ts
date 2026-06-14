//finding line up customer
// define type of customer name
type CustomerName = string | null | undefined;
//output: Gianna, you are the 4th customer we serve today. Thank you!
export function format(firstName: CustomerName, orderNum: number): string {
  
  let validName:string | boolean;
  let validOrderNum:string;

  if(!validFirstName(firstName)){
    throw new Error("Sorry! wrong inpute.");
  }else{
    validName = validFirstName(firstName);
  }
 validOrderNum = ordinalNumber(orderNum);
  return `${validName}, you are the ${validOrderNum} customer we serve today. Thank you!`;
}
// Check valid and transform name

function validFirstName(firstName: CustomerName): string | boolean {
  //Ex: mat -> Mat
  let errMsg:string = '';
  //check empty name;
  if(!firstName){
    errMsg = "💥Invalid name input.";
    console.log(errMsg);
    return false;
  }
  firstName = firstName.charAt(0).toLocaleUpperCase() + firstName.slice(1);
  return firstName;
}
// Create a functiont to return ordinual number


function ordinalNumber(orderNum: number):string{
  const temp:number = orderNum % 100;
  const temp2:number = orderNum % 10;
  
  if( temp === orderNum){
    if(orderNum !== 11){
      if(orderNum !== 12){
      
        if(orderNum !== 13){
        
          if(temp2 === 1){
            return `${orderNum}st`;
          }else if(temp2 === 2){
            return `${orderNum}nd`;
          } else if(temp2 === 3){
            return `${orderNum}rd`;
          }else{
            return `${orderNum}th`;
          }
      }else{
        return `${orderNum}th`;
      }
      return `${orderNum}th`
    default:
      throw new Error("invalid number");
  }
  throw new Error("wrong case.");
};

    }else{
      return `${orderNum}th`;
    }
  }else {
    return `${orderNum}th`;
  } 
 }
 if(temp === 11 || temp === 12 || temp === 13){
    return `${orderNum}th`;
 }else if(temp >0 && temp < 4) {
   return temp === 1 ? `${orderNum}st`: temp === 2 ? `${orderNum}nd`: `${orderNum}rd`;
 }else{
    return temp2 === 1 ? `${orderNum}st` : temp2 === 2 ? `${orderNum}nd`: temp2 === 3 ? `${orderNum}rd`:`${orderNum}th`;
 }

}

