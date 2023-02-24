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

  interface CommercialVehicle {
    capacity: string;
    licenseRenewalDate: Date;
  }

  class Truck
    implements Automobile<string, AutomobileBrands, AutomobileColours>,
    CommercialVehicle {
    public type: string = "truck";

    constructor(
      public brand: AutomobileBrands,
      public colours: AutomobileColours[],
      public description: string,
      public capacity: string,
      public licenseRenewalDate: Date
    ) {
    }
  }

  const toyotaTruck: Truck = new Truck(
    AutomobileBrands.toyota,
    [AutomobileColours.black, AutomobileColours.silver],
    "This is a Toyota Truck",
    "15 Tonners",
    new Date()
  );
  console.log(toyotaTruck);

}
