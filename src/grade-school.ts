//Grade School


export class GradeSchool {
  // store grades & names
  // key: grade
  // value: name

  //Private a list of the student
  private STUDENT_LIST = new Map<number, string[]>(); 
    
  roster(): Record<number, string[]>{
    const result: Record<number, string[]> = {};
    for(const [key, value] of this.STUDENT_LIST){
      result[key] = value;
    }
    return result;
  }

  add(stdName: string, score: number) {
    addStudent(stdName, score, this.STUDENT_LIST);
  }

  // return the list of students for one specific grade
  grade(score: number): string[] {
    // Return copy array
    let tempArray: string[] = this.STUDENT_LIST.get(score)!;
    return tempArray ? [...tempArray]:[];
   }
}
function addStd(stdName: string, score: number, tm: Map<number, string[]>){
  console.log(`AddStd`);
  for(const [key, value] of tm){
    console.log(key);
  }
  console.log(`---- END ----`);
}

function addStudent(stdName: string, score: number, tm: Map<number, string[]> ){
   //Check the score exist or not
    if(!tm.has(score)){ // if score does not exist
      //Add score
      tm.set(score, [stdName]);
      tm.get(score)!.sort();
    }else{
      let stdNameArray:string[] = tm.get(score)!;
      //check student name exist in the score or not
      stdNameArray.indexOf(stdName) !== -1 ?
        console.log('This student is already.') :
        tm.get(score)!.push(stdName);

      tm.get(score)!.sort();
    }
}
