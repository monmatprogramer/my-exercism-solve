export class Allergies {
  private score: number;
  private allergens: string[];
  constructor(allergenIndex: number) {
    // allergenIndex role as length of array
    this.allergens = Array.from({ length: allergenIndex - 1 });
    console.log(this.allergens);
    this.score = 0;
  }

  public list(): string[] {
    //correct order
    return [""];
  }

  // Add the item into allergens and then check it
  public allergicTo(allergen: string): boolean {
    //check one item
    //allergen is the name of item

    return true;
  }
}
