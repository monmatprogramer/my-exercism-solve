//learn robot name
export class Robot {
  // names ex: ['CE203']
  static nameDeck: string[] = buildNames();
  //name card
  _name: string;


  constructor() {}

  // helpers
  private generateName(){
  //regex 2uppercase 3digit
  const regex = /^[A-Z]{2}\d{3}$/;

  }
  //public get name(): string {
  //}

  public resetName(): void {
  }

  public static releaseNames(): void {
  }
}


function buildNames(): string[] {
  let combineNames:string[] = [];
  let names: string = "";
  for(let i: number = 1; i <= 2; i++){
    let tempName:string = names;
    names = tempName + getRandomLetter();
  } 
  names = names + getRandomNumber();
  combineNames.push(names);
  return combineNames;
};

function shuffleArray(inputs: string[]){
  for(let i = inputs.length -1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [inputs[i], inputs[j] ] = [ inputs[j] , inputs[i]];
  }
}


function getRandomLetter():string{
    const alphabt: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomDecimal: number = Math.random();
    const randomIndex: number = Math.floor(randomDecimal * alphabt.length);
    return alphabt[randomIndex];
}

function getRandomNumber(): string{
    const rn1: number = Math.floor(Math.random() * 10);
    const rn2: number = Math.floor(Math.random() * 10);
    const rn3: number = Math.floor(Math.random() * 10);
    //combine 
    const result = `${rn1}${rn2}${rn3}`;

    return result;
};

