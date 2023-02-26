// Class decorators can alter a constructor function and return a 
// new constructor function from within the decorator.
namespace NewClassObjectFromDecorator {
  interface MapLocation {
    lat: number;
    long: number;
  }
  
  function AddLocation(lat: number, long: number) {
    // this will capture the original arguements we need for the constructor - name and age
    // use the generic type here so we can apply this decorator to any class.
    // the generic type extends the constructor function. We will get some arguements passed in,
    // but we will use any type, so we can keep this generic for any class
    return <T extends { new (...args: any[]): {} }>(
      classConstructor: T
    ) => {
      // we actually return a new class that extends the class this decorator is attached to
      return class extends classConstructor {
        public mapLocation: MapLocation;
        constructor(...args: any[]) {

          // we finally pass these args back to the original class constructor
          console.log(args);
          super(...args);
          this.mapLocation = { lat, long };
        }
      };
    };
  }
  
  @AddLocation(1.234, 1.876)
  class Person {
    constructor(public name: string, public age: number) {}
  }
  
  const person: Person = new Person('John', 32);
  console.log(person);
  /*
    Person {name: 'John', age: 32, mapLocation: {…}}
    age: 32
    mapLocation: {lat: 1.234, long: 1.876}
    name: "John"
  */
}