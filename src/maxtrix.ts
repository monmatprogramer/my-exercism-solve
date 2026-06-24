// matrix exercise

export class Matrix {
  
  private _myMatrix:number[][] = [[]];

  constructor(inputs: string) {
    const tempInput: string[] = inputs.split('\n');
    for(const [index, value] of tempInput.entries()){
      let t: string[] = value.split(" ");
      let tn: number[] = t.map((v) => Number(v));
      this._myMatrix[index] = tn; 
    }
  }

  get rows(): number[][]{
    return this._myMatrix;
  }

 
  get columns(): number[][]{
    for(let row:number = 0;){
    }
    return [[]];  
  }
}
