
export class DnDCharacter {
 // Create a private field
  public strenght: number;
  public dexterity: number;
  public constitution: number;
  public intelligence: number;
  public wisdom: number;
  public charisma: number;

  public static generateAbilityScore(consitution:number): number {
    const modifier:number = (consitution -10)/2;
    const hitPoint: number = 10 + modifer;
    return Math.floor(modifier);
  }

  public static getModifierFor(abilityValue: number): number {
    // Create a random array
    let dices: number[] = [];
    let score: number = 0;
    for(let i: number = 1; i <= 4; i++){
      const randomNum: number = Math.floor(Math.random() * 6) + 1;
      dices.push(randomNum);   
    }
    // Sort
    dices = dices.sort();
    // Remove the first element
    dices.shift();
    score = dices.reduce((total, current) => total + current,0);

    return DnDCharacter.generateAbilityScore(abilityValue);
  }
}

// Dungeons & Dragons
