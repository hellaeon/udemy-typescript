namespace UnionType {
  type Dog = {
    name: string;
    barks: boolean;
    wags: boolean;
  };

  type Cat = {
    name: string;
    purrs: boolean;
  };

  // a union means the resulting object allows us to specify either a cat or dog type...
  // you must have the shape of either the cat or dog or both
  type DogAndCatUnion = Dog | Cat;

  // dog...
  let doggy: DogAndCatUnion = {
    name: 'woofa',
    barks: true,
    wags: true
  }

  // cat...
  let catty: DogAndCatUnion = {
    name: 'pusspuss',
    purrs: true,
  }

  // or both
  let mutant: DogAndCatUnion = {
    name: 'beast',
    barks: true,
    wags: false,
    purrs: true,
  }

  // great for allowing an object of multiple types into a method
  type StringOrNumber = number | string;
  function addNumberOrString(a: StringOrNumber, b: StringOrNumber) {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    }
    else {
      return a.toString() + b.toString();
    }
  }

  console.log(addNumberOrString(4, 3));
  console.log(addNumberOrString(4, ' dude'));
  console.log(addNumberOrString('Matty', ' dude'));
}