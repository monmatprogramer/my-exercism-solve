//Grade School


export class GradeSchool {
  // store grades & names
  // key: grade
  // value: name

  //Private a list of the student
  private static STUDENT_LIST: Map<number, string[]>; 
  
  roster() {
     
  }

  add() {
  }

  // return the list of students for one specific grade
  grade(score: number): string[] {
    

    // Return copy array
    return [...GradeSchool.STUDENT_LIST.get(3)];
  }
}
