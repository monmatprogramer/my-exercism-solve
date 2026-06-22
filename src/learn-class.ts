export class Robot{
  #name:string;
  test:string
  constructor(){
    this.#name = "RX832";
    this.test = "test";
  }

  public getName(): string{
    return this.#name;
  }

}

