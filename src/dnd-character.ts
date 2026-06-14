
export class DnDCharacter {
 // Create a private field

  public static generateAbilityScore(consitution:number): number {
    const modifier:number = (consitution -10)/2;
    return Math.floor(modifier);
  }

  public static getModifierFor(abilityValue: number): number {
    return DnDCharacter.generateAbilityScore(abilityValue);
  }
}
