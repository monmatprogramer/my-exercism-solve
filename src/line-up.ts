//finding line up customer
// define type of customer name
type CustomerName = string | null | undefined;
//output: Gianna, you are the 4th customer we serve today. Thank you!
export function format(firstName: CustomerName, orderNum: number): string {
  if(!validFirstName(firstName)){
    throw new Error("Sorry! wrong inpute.");
  }
  return "Hello";
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
  // check ordinal number
  switch(orderNum){
    case 1:
      //st
      return '1st';
    case 2:
      return '2nd';
    case 3:
      return '3rd';
    case 4;
      //TODO: 999th
      if(orderNum > 10000){
        throw new Error("Not allow input number");
      }
      return `${orderNum}th`
    default:
      throw new Error("invalid number");
  }
  throw new Error("wrong case.");
};
