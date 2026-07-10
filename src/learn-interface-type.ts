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

console.log(myUser.name);
