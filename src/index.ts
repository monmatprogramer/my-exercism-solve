import {GradeSchool} from "./grade-school";

const school = new GradeSchool();
console.log(school.roster());
school.add('Mat', 1);

school.roster();
