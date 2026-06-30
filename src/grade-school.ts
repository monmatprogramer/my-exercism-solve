//Grade School


export class GradeSchool {
  // store grades & names
  // key: grade
  // value: name

  //Private a list of the student
  private static STUDENT_LIST = new Map<number, string[]>(); 
    
  roster(): Record<number, string[]>{
    const result: Record<number, string[]> = {};
    for(const [key, value] of GradeSchool.STUDENT_LIST){
      result[key] = value;
    }
    return result;
  }

  add(stdName: string, score: number) {
    //Check the score exist or not
    if(!GradeSchool.STUDENT_LIST.has(score)){ // if score does not exist
      //Add score
      GradeSchool.STUDENT_LIST.set(score, [stdName]);
      GradeSchool.STUDENT_LIST.get(score)!.sort();
    }else{
      let stdNameArray:string[] = GradeSchool.STUDENT_LIST.get(score)!;
      //check student name exist in the score or not
      stdNameArray.indexOf(stdName) !== -1 ?
        console.log('This student is already.') :
        GradeSchool.STUDENT_LIST.get(score)!.push(stdName);

      GradeSchool.STUDENT_LIST.get(score)!.sort();
    }

  }

  // return the list of students for one specific grade
  grade(score: number): string[] {
    // Return copy array
    return [...GradeSchool.STUDENT_LIST.get(score)!];
  }
}
