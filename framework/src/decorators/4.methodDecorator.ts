namespace MethodDecoratorExample {
  enum Manufacturers {
    boeing = 'boeing',
    airbus = 'airbus',
  }
  
  interface AircraftInterface {
    _aircraftModel: string;
    pilotName: () => void;
    prototype?: any;
    origin?: string;
    manufacturer?: string;
    type?: string;
    airbusMethod?: () => void;
    boeingMethod?: () => void;
  }
  
  // when calling a method decorator, three parameters are expected before 
  // any other arguements as shown below
  function MethodDecorator(
    classPrototype: Object,
    methodName: string,
    descriptor: PropertyDescriptor
  ) {
    console.log(classPrototype);
    /* 
    {constructor: ƒ, pilotName: ƒ}
    aircraftModel: (...)
    constructor: class Airplane
    pilotName: ƒ pilotName()
    get aircraftModel: ƒ aircraftModel()
    [[Prototype]]: Object
    */
    console.log(methodName);
    // pilotName - the method the decorator is applied to
    console.log(descriptor);
    // {writable: true, enumerable: false, configurable: true, value: ƒ}
    // enumerable is false because this is a method and this cannot be looped through. 
    // This function is what you are getting in as the value of the property descriptor.
    // Also this is set to writable, by default all the properties are writable

    // We are telling javascript that we want this method (pilotName) to be either
    // not allowed to be changed (static) or writable (can assign a new function to it)
    descriptor.writable = false;
  }
  
  class Airplane implements AircraftInterface {
    constructor(
      public _aircraftModel: string,
      private pilot: string
    ) {}
  
    @MethodDecorator
    public pilotName() {
      console.log(this.pilot);
    }
  
    public get aircraftModel() {
      return this._aircraftModel;
    }
  }
  const airplane: AircraftInterface = new Airplane(
    'Airbus A380',
    'John'
  );
  
  // because we set `descriptor.writable = false;` this will throw an error
  airplane.pilotName = () => console.log('Function Changed');
  
  airplane.pilotName();
}