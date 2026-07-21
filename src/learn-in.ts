interface Person {
  name: string;
  age?: number;
}

function printPersonInfo(person: Person) {
  if ("age" in person) {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
  } else {
    console.log(`Name: ${person.name}, Age not provided`);
  }
}

const GeeksForGeeks: Person = {
  name: "GeeksforGeeks",
  age: 30,
};
const Geek: Person = { name: "Geek" };

printPersonInfo(GeeksForGeeks);
printPersonInfo(Geek);
