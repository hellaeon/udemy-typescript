namespace GenericInterfaces {
  enum AutomobileTypes {
    car = "car",
    bus = "bus",
    van = "van",
    truck = "truck",
    bike = "bike",
  }
  
  enum AutomobileBrands {
    ferrari = "ferrari",
    honda = "honda",
    bmw = "bmw",
    toyota = "toyota",
  }
  
  enum AutomobileColours {
    red = "red",
    blue = "blue",
    white = "white",
    black = "black",
    silver = "silver",
  }

  // because of the generics here, we can create instances of automobile, 
  // we dont have to extend the interface to use it
  interface Automobile<Type, Brand, Colours> {
    type: Type;
    brand: Brand;
    colours: Colours[];
    description: string;
  }
  
  const ferrari: Automobile<AutomobileTypes, AutomobileBrands, AutomobileColours> = {
    type: AutomobileTypes.car,
    brand: AutomobileBrands.ferrari,
    colours: [AutomobileColours.black, AutomobileColours.red],
    description: "This is a ferrari"
  };
  
  // this time we can implement the interface with all strings
  const honda: Automobile<string, string, string> = {
    type: "car",
    brand: "Honda",
    colours: ["silver", "black"],
    description: "This is a Honda"
  };
  
  // here we dont have to use our enums, we can specify a different type
  const toyota: Automobile<string, AutomobileBrands, number> = {
    type: "car",
    brand: AutomobileBrands.toyota,
    colours: [6676, 97897],
    description: "This is a Toyota"
  };
  
  console.log(ferrari);
  console.log(honda);
  console.log(toyota);

}
