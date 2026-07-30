export class Allergies {
  private score: number;
  private allergens: string[];
  constructor(allergenIndex: number) {
    // allergenIndex role as length of array
    this.allergens = Array.from({ length: allergenIndex });
    this.score = 0;
  }

  public list(): string[] {
    //correct order
    return this.allergens;
  }

  // Add the item into allergens and then check it
  public allergicTo(allergen: string): boolean {
    //check one item
    //allergen is the name of item
    let lenNotEmpy: number = this.allergens.filter(
      (value) => value !== undefined,
    ).length;
    if (lenNotEmpy > this.allergens.length) throw new Error("Not enoug space");
    this.allergens[lenNotEmpy] = allergen;

    return true;
  }
}
