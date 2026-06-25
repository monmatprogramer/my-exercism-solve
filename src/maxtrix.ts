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
    const onlyCol: number[][] = [[]];
    let tempCol: number[] = [];
    for(let i:number = 0; i < this._myMatrix[0].length; i ++ ){
      for(let j:number = 0; j < this._myMatrix.length; j++){
        tempCol.push(this._myMatrix[j][i]); 
      }
      onlyCol[i] = tempCol;
      tempCol = [];
    }
    return onlyCol;  
  }
}
