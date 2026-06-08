
import type {ColorTypes} from "./types";
const COLORS:string[] = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
export default function DecodedResistorValue(colorNameList: ColorTypes[]) {
    let tempListNumber: number[] = [];
    let lastNumber:number=0;
    let appendString:string = '0';
    let numbericColor: string = "";
    let totalNumeric:number = 0;
    // 1. ohms 100
    //"black" | "brown" | "red" | "orange" | "yellow" | "green" | "blue" | "violet" | "grey" | "white";

    //Ex: ['brown', 'green', 'red']
    //result: 0100
    //check list of collor array first
    if(colorNameList.length > 2){
        colorNameList.map((color) =>{
            tempListNumber.push( COLORS.indexOf(color) );
        });
        //find name of numberic color
      //let num = colorNameList.map((colorTitle,index)=> index < 2 && COLORS.indexOf(colorTitle));
      for (let i: number = 0; i < 2; i++){
        let temp:string = "";
        temp = (COLORS.indexOf(colorNameList[i])).toString();
        numbericColor = numbericColor + temp; 
      }
    }else{
        console.log("array < 2")
    }
    // find the last number
    if(lastNumber == 0){
      lastNumber = tempListNumber[tempListNumber.length -1];
    } 
    if(lastNumber===2){
      // 012
      appendString='00';

    }else if(lastNumber===3){
      appendString='000';
    }else if(lastNumber===4){
      appendString='0000';
    }else if(lastNumber===5){
      appendString='00000';
    }else if(lastNumber===6){
      appendString='000000';
    }else if(lastNumber===7){
      appendString='0000000';
    }else if(lastNumber===8){
      appendString='00000000';
    }else{
      appendString='00000000000';
    }
    
    console.log(`result ${numbericColor}${appendString}`);
    appendString = numbericColor + appendString;
    totalNumeric = Number(appendString);
    if( lastNumber === 3 ){
      console.log(`${numbericColor} kiloohms`);
    }else if(lastNumber > 3 && lastNumber <= 6){
       console.log(`${numbericColor} megahoms`);
    }else if(lastNumber > 6 && lastNumber <= 9){
       console.log(`${numbericColor} gigahoms`);
    }else if(lastNumber >9 && lastNumber < 13){
       console.log(`${numbericColor} terahoms`);

    }else{
      console.log("not found");
    }
    console.log(appendString);
    console.log("---end---");
  // 2. Killooms 1000
  // 3. Megaohms 1000000
  // 4. Gigaohms 1000000000
  // 5. Teraohms 1000000000000
  
}
