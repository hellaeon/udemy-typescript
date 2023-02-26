namespace ConstructorDecorator {
  enum Manufacturers {
    boeing = 'boeing',
    airbus = 'airbus',
  }

  // this decorator will just before the class is instantiated,
  // Adding these values to the prototype of Aircraft.
  function AircraftManufacturer(manufacturer: Manufacturers) {
    return (target: Function) => {
      if (manufacturer === Manufacturers.airbus) {
        target.prototype.origin = 'United States Of America';
        target.prototype.manufacturer = Manufacturers.airbus;
        target.prototype.type = 'Jet';
      } else {
        target.prototype.origin = 'France';
        target.prototype.manufacturer = Manufacturers.boeing;
        target.prototype.type = 'Helicopter';
      }
    };
  }

  @AircraftManufacturer(Manufacturers.airbus)
  class Airplane {
    constructor(
      public _aircraftModel: string,
      private pilot: string
    ) {
      console.log('Aircraft Class Instantiated');
    }

    public pilotName() {
      console.log(this.pilot);
    }

    public get aircraftModel() {
      return this._aircraftModel;
    }
  }

  // the decorator will perform its duties before creating the object
  const airplane = new Airplane('Airbus A380', 'John');
  
  console.log(airplane);
  /* 
Airplane {_aircraftModel: 'Airbus A380', pilot: 'John'}
  pilot: "John"
  _aircraftModel: "Airbus A380"
  aircraftModel: (...)
  [[Prototype]]: Object
    manufacturer: "airbus"
    origin: "United States Of America"
    type: "Jet"
*/

  //@ts-ignore
  // despite typescript not seeing this, javascript searches
  // the prototype chain for values and we will actually find manufacturer on
  // the Airplane object.
  console.log(airplane.manufacturer);
}

// to get around the issue of typescript not recognising the value, even though 
// we can access it through the prototype chain, we can use an interface hack :/
namespace ConstructorDecoratorWithInterface {
  enum Manufacturers {
    boeing = 'boeing',
    airbus = 'airbus',
  }

  interface AircraftInterface {
    _aircraftModel: string;
    prototype?: any;
    origin?: string;
    manufacturer?: string;
    type?: string;
  }

  // this decorator will just before the class is instantiated,
  // Adding these values to the prototype of Aircraft.
  function AircraftManufacturer(manufacturer: Manufacturers) {
    return (target: Function) => {
      if (manufacturer === Manufacturers.airbus) {
        target.prototype.origin = 'United States Of America';
        target.prototype.manufacturer = Manufacturers.airbus;
        target.prototype.type = 'Jet';
      } else {
        target.prototype.origin = 'France';
        target.prototype.manufacturer = Manufacturers.boeing;
        target.prototype.type = 'Helicopter';
      }
    };
  }

  @AircraftManufacturer(Manufacturers.airbus)
  class Airplane implements AircraftInterface{
    constructor(
      public _aircraftModel: string,
      private pilot: string
    ) {
      console.log('Aircraft Class Instantiated');
    }

    public pilotName() {
      console.log(this.pilot);
    }

    public get aircraftModel() {
      return this._aircraftModel;
    }
  }

  // the decorator will perform its duties before creating the object, this
  // time so we can get access to manufacturer, we use the interface.
  const airplane: AircraftInterface = new Airplane('Airbus A380', 'John');
  
  console.log(airplane); 

  // no errors now
  console.log(airplane.manufacturer);

  // however it does feel a bit of a hack as we are hiding what the protoype
  // mechanism is doing, but meh. It also gives us a way to implement a contract,
  // which always makes for better code.
}

