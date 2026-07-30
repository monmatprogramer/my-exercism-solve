export class Allergies {
  private score: number;
  private allergens: string[];
  constructor(allergenIndex: number) {}

  public list(): string[] {
    return [""];
  }

  public allergicTo(allergen: string): boolean {
    return true;
  }
}
