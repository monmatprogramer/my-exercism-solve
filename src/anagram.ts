export class Anagram {
  private input: string;
  constructor(input: string) {
    this.input = input.toLowerCase();
  }

  public matches(...potentials: string[]): string[] {
    return [""];
  }
}
