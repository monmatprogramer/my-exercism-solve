//doc
/*
 * same basic job
 *  blueprints for the data
 *  it tells 'shapes of objects, functions, variable'
 *
 *
 *
 * */

//----------interface-------
/*
 * it descripts shape of object
 * to extend other interfaces using 'extends'
 * It does not use with Unions
 * */
interface User {
  id: number;
  name: string;
  isActive: boolean;
}

const myUser: User = {
  id: 1,
  name: "John Doe",
  isActive: true,
};
//-----------Type------
/*
 * Type do everything but interface for objects
 * It creates Unions (|) -> this or that
 * */
type Product = {
  id: number;
  price: number;
};

type ButtonSize = "small" | "medium" | "large";
type SatusCode = 200 | 404 | 500;
function Button({ size }: { size: ButtonSize }) {
  return "<button className ={`btn-${size}`}> Click Me</button>";
}
console.log(Button({ size: "small" }));
