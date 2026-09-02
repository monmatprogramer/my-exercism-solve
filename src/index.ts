const arrayOb = [
  {
    id: "0001",
    name: "Mon Mat",
    age: 12,
  },
  // {
  //   id: "0002",
  //   name: "Channy",
  //   age: 22,
  // },
];
let arrayDbNew = [];
console.log(arrayOb);
let see = arrayOb.map((v) => {
  return { id: "0003", name: v.name, age: 34 };
});

console.log("see", see);
