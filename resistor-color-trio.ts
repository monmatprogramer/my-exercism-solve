
import type {ColorTypes} from "./types";
const COLORS:string[] = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
export default function DecodedResistorValue(colorNameList: ColorTypes[]) {
    let tempListNumber: number[] = [];
    let lastNumber:number=0;
    // 1. ohms 100
    
    //"black" | "brown" | "red" | "orange" | "yellow" | "green" | "blue" | "violet" | "grey" | "white";

    //Ex: ['brown', 'green', 'red']
    //result: 0100
    //check list of collor array first
    if(colorNameList.length > 2){
        colorNameList.map((color) =>{
            tempListNumber.push( COLORS.indexOf(color) );
        });

        
    }else{
        console.log("array < 2")
    }
    // find the last number
    lastNumber !=0 && lastNumber = tempListNumber[tempListNumber.length -1];


    console.log(`result ${tempListNumber}`);
    console.log("---end---");
  // 2. Killooms 1000
  // 3. Megaohms 1000000
  // 4. Gigaohms 1000000000
  // 5. Teraohms 1000000000000
  
}

