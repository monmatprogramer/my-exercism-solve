import {GradeSchool} from "./grade-school";

const school = new GradeSchool();

school.add('Aimee', 2);
school.add('Blair', 2)
school.add('James', 2)
school.add('Paul', 2)

console.log(school.roster());
