export class Allergies {
  private score: number;
  private allergens: string[];
  constructor(allergenIndex: number) {
    this.allergens = [""];
    this.score = 0;
  }

  public list(): string[] {
    return [""];
  }

  public allergicTo(allergen: string): boolean {
    return true;
  }
}
