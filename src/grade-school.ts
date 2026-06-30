//Grade School


export class GradeSchool {
  // store grades & names
  // key: grade
  // value: name

  //Private a list of the student
  private STUDENT_LIST = new Map<number, string[]>(); 
    
  roster(): Record<number, string[]>{
    const result:Record<number, string[]> = {};
    for(const [key, value] of this.STUDENT_LIST){
      result[key] = [...value];
    }
    console.log(result);
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


function addStudent(stdName: string, score: number, tm: Map<number, string[]> ){
  for(const [key, value] of tm){
    const filteredStudents = value.filter(name => name !== stdName);
    tm.set(key, filteredStudents);
  }  
  if(!tm.has(score)){
    tm.set(score, [stdName]);
    tm.get(score)!.sort();
  }else{
    tm.get(score)!.push(stdName);
    tm.get(score)!.sort();
  }
}
