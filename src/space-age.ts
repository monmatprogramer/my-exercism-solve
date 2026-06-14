// Create a planet class
class Planet{
  //Field
  public name: string;
  public age: number;

  //Constructor
  constructor(name:string, age:number){
    this.name = name;
    this.age = age;
  }
}

// Create list of planet and its age and is stored in an array
const planetList: Planet[] = [
  {name: 'mercury',age: 0.2408467 },
  {name: 'venus', age: 0.61519726 },
  {name: 'earth', age: 1.0 },
  {name: 'mars', age: 1.8808158 },
  {name: 'jupiter', age: 11.862615 },
  {name: 'saturn', age: 29.447498 },
  {name: 'uranus', age: 84.016846 },
  {name: 'neptune', age:164.79132 }
];

// Allow planet list 
type AllowPlanet = "mercury" |
  "venus" | 
  "earth" | 
  "mars" | 
  "jupiter" | 
  "saturn" | 
  "uranus" | 
  "neptune"; 
// Seconds on earth
const secondOnEarth: number = 31557600;


export function age(planet: AllowPlanet, seconds: number): number {
  
  // Match user input planet with allowed planet list
    //Filter
  const foundPlanetName: Planet[] =  planetList.filter((value) => value.name === planet);
    return planetAgeCalculate(foundPlanetName, seconds);
}


// Create a function to calcuale the planet age
function planetAgeCalculate(planetObj: Planet[], totalSecondsUserInput: number):number{
  
  return +(totalSecondsUserInput / (secondOnEarth * planetObj[0].age)).toFixed(2); 
}
