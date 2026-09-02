const product = [
  {
    id: "001",
    name: "Ice latee",
    price: 2.5,
  },
  {
    id: "002",
    name: "Hot latte",
    price: 2.5,
  },
  {
    id: "003",
    name: "Hot expresso",
    price: 1.5,
  },
  {
    id: "004",
    name: "Ice expresso",
    price: 2.8,
  },
];

const order = [
  {
    id: "1",
    totalAmount: 4.3,
  },
  {
    id: "2",
    totalAmount: 5.0,
  },
];
const orderItem = [
  {
    id: "00001",
    orderId: "1",
    name: "003",
    quantity: 1,
    price: 1.5,
  },
  {
    id: "00002",
    orderId: "1",
    name: "004",
    quantity: 1,
    price: 2.8,
  },
  {
    id: "00003",
    orderId: "2",
    name: "001",
    quantity: 1,
    price: 2.5,
  },
  {
    id: "00004",
    orderId: "2",
    name: "002",
    quantity: 1,
    price: 2.5,
  },
];

const filterOrder = orderItem.filter((item) => item.orderId === "1");
console.log(filterOrder);
