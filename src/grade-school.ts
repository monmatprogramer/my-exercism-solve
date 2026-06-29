//Grade School


export class GradeSchool {
  // store grades & names
  // key: grade
  // value: name

  //Private a list of the student
  private static STUDENT_LIST = new Map<number, string[]>(); 
    
  roster() {
     
  }

  add(stdName: string, score: number) {
    //Check the score exist or not
    if(!GradeSchool.STUDENT_LIST.has(score)){ // if score does not exist
      //Add score
      GradeSchool.STUDENT_LIST.set(score, [stdName]);
      console.log(`Added success: ${GradeSchool.STUDENT_LIST.get(score)}`);
    }
  }

  // return the list of students for one specific grade
  grade(score: number): string[] {
    // Return copy array
    return [];
  }
}
