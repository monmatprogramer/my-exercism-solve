export class Anagram {
  private input: string;
  constructor(input: string) {
    this.input = input.toLowerCase();
  }

  public matches(...potentials: string[]): string[] {
    // Convert potentials to lower case
    let lowerCasePotentials: string[] = potentials.map((v) =>
      v.toLocaleLowerCase(),
    );
    let result: string[] = potentials.filter((value) => this.input === value);
    if (result.length > 0) {
      throw new Error("No Anagram");
    }
    return [""];
  }
}
