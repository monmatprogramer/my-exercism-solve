
export class DnDCharacter {
 // Create a private field
  public strenght: number = 0;
  public dexterity: number = 0;
  public constitution: number = 0;
  public intelligence: number = 0;
  public wisdom: number = 0;
  public charisma: number = 0;

  //create constructor
  constructor(c:number, s:number, w:number, i: number, ch: number, d: number){
     this.strenght = s;
     this.dexterity = d;
     this.constitution= c;
     this.intelligence = i;
     this.wisdom = w;
     this.charisma = ch;
  };

  public static generateAbilityScore(consitution:number): number {
     // Create a random array
    let roleResult:number[] = [];
   
    const modifier:number = (consitution -10)/2;
    
       //Characters
    //6 loop
    for(let i:number = 0; i < 6 ; i++){
      //random number
      const rolingResult = DnDCharacter.doRoll();
      roleResult.push(rolingResult); 
    }
    //Sorth role Result to fine characters
    roleResult = roleResult.sort();
    //Math character
   DnDCharacter.matchCharacter(roleResult);
    return Math.floor(modifier);
  }

  public static getModifierFor(abilityValue: number): number {
   

    return DnDCharacter.generateAbilityScore(abilityValue);
  }

  //function for generating random number
  private static doRoll():number{
    
    let score: number = 0;
    let dices: number[] = [];
    //Generate random num and add it inot the array
    for(let i: number = 1; i <= 4; i++){
      const randomNum: number = Math.floor(Math.random() * 6) + 1;
      dices.push(randomNum);   
    }
     
    // Sort
    dices = dices.sort();
    // Remove the first element
    dices.shift();
    score = dices.reduce((total, current) => total + current,0);
  return score; 
  }

  //Create a function that match characters
  private static matchCharacter(roleArray: number[]){
    new DnDCharacter(roleArray[5],roleArray[4],roleArray[3], roleArray[2], roleArray[1], roleArray[0]); 
  }
}
// Dungeons & Dragons
//
