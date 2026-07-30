export class Allergies {
  private score: number;
  private allergens: string[];
  constructor(allergenIndex: number) {
    this.allergens = [""];
    this.score = 0;
  }

  public list(): string[] {
    //correct order
    return [""];
  }

  public allergicTo(allergen: string): boolean {
    //check one item
    return true;
  }
}
