export class Allergies {
  private score: number;
  private allergens: string[] = [
    "eggs",
    "peanuts",
    "shellfish",
    "strawberries",
    "tomatoes",
    "chocolate",
    "pollen",
    "cats",
  ];
  constructor(allergenIndex: number) {
    // allergenIndex role as length of array
    this.score = allergenIndex;
  }

  public list(): string[] {
    //correct order
    return this.allergens;
  }

  public allergicTo(allergen: string): boolean {
    //check one item
    //allergen is the name of item
    const itemScore = Math.pow(2, this.allergens.indexOf(allergen));

    return (this.score & itemScore) > 0;
  }
}
