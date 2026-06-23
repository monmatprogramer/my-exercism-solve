//learn robot name
export class Robot {
  // names ex: ['CE203']
  static nameDeck: string[] = buildNames();
  //name card
  _name: string;


  constructor() {
    // take the last item out
    this._name = Robot.nameDeck.pop()!;
  }


  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    this._name = Robot.nameDeck.pop()!;
  }

  public static releaseNames(): void {
    Robot.nameDeck = buildNames();
  }
}

function buildNames():string[] {
  let combineNames: string[] = [];
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for(let l1 = 0; l1 < 26; l1++){
    for(let l2 = 0; l2 < 26; l2++){
      for (let n = 0; n < 1000; n++){
        let letter1 = alphabet[l1];
        let letter2 = alphabet[l2];

        let numberString = n.toString().padStart(3, '0');
        combineNames.push(letter1 + letter2 + `${numberString}`);
      }
    }
  }
  shuffleArray(combineNames);
  return combineNames;
}


function shuffleArray(inputs: string[]){
  for(let i = inputs.length -1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [inputs[i], inputs[j] ] = [ inputs[j] , inputs[i]];
  }
}



