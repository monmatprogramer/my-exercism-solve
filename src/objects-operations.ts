function cleanEmptyValue() {
  console.log("clean data");
  const dataTesting = {
    a: "a",
    b: {},
  };
  console.log(Object.keys(dataTesting.b).length === 0);
  const { b, ...newData } = dataTesting;
  console.log(newData);
}
