// normal functions.
function intro(name: string, age: number): string {
  return `My name is ${name} and I am ${age} years old`;
}

const intro2 = function (name: string, age: number): string {
  return `My name is ${name} and I am ${age} years old`;
};

const intro3 = (name: string, age: number): string => {
  return `My name is ${name} and I am ${age} years old`;
};

// default parameters
function introDefaultParams(name: string, age: number, country: string = "UK"): string {
  return `My name is ${name} and I am ${age} years old and I live in ${country}`;
}
console.log(introDefaultParams("john", 32));
console.log(introDefaultParams("john", 32, "USA"));