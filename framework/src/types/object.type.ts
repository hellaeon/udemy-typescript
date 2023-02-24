namespace ObjectType {
  let person = {
    name: 'Matt',
    age: 24
  };

  let car: { colour: string, brand: string } = {
    colour: '#fff',
    brand: 'matts car'
  };

  type Article = {
    author: string;
    content: string;
    title: string;
    image?: string; // optional properties
  };

  // if you dont use all the required vars for the type, typescript will throw an error
  let article: Article = {
    author: 'Matty',
    content: 'some text',
    title: 'my only book'
  };

  let post: Article = {
    author: "Sammy",
    content: "Carlton only",
    title: "I like beer"
  }

  // More complex
  type Caterer = {
    name: string;
    address: string;
    phone: number;
  }

  type Airplane = {
    model: string;
    flightNumber: string;
    timeOfDeparture: Date;
    timeOfArrival: Date;
    caterer: Caterer;
  }

  let airplane: Airplane = {
    model: "Airbus A380",
    flightNumber: "A2201",
    timeOfDeparture: new Date(),
    timeOfArrival: new Date(),
    caterer: {
      name: "Special Food Ltd",
      address: "484, Some Street, New York",
      phone: 1452125
    }
  }
}