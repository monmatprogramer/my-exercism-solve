function cleanEmptyValue(dataTesting: unknown) {
  if (i) {
    console.log("clean data");

    console.log(Object.keys(dataTesting.b).length === 0);
    const { b, ...newData } = dataTesting;
    console.log(newData);
  }
}
