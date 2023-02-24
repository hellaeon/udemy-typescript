namespace GenericInterfacesClass {
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

  // implement the interface with the generics we want
  class Car
    implements Automobile<string, AutomobileBrands, AutomobileColours> {
    public type: string = "car";

    constructor(
      public brand: AutomobileBrands,
      public colours: AutomobileColours[],
      public description: string
    ) {
    }
  }

  // although it implements the same interface, it's just a contract.
  class Truck
    implements Automobile<string, AutomobileBrands, AutomobileColours> {
    public type: string = "truck";

    constructor(
      public brand: AutomobileBrands,
      public colours: AutomobileColours[],
      public description: string
    ) {
    }
  }

  const ferrari: Car = new Car(
    AutomobileBrands.ferrari,
    [AutomobileColours.red, AutomobileColours.black],
    "This is a Ferrari"
  );

  const toyotaTruck: Truck = new Truck(
    AutomobileBrands.toyota,
    [AutomobileColours.black, AutomobileColours.silver],
    "This is a Toyota Truck"
  );

  console.log(ferrari);
  console.log(toyotaTruck);

}
