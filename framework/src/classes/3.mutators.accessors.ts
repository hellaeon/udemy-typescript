// Mutators - Setters
// Accessors - Getters 
// why I dont know.
// A 'set' accessor must have exactly one parameter.
// A 'get' accessor cannot have parameters.

namespace GettersSetters {
  class Person {
    private _age: number | undefined;
    constructor(private name: string) {}
  
    public getName() {
      return this.name;
    }
  
    // A 'set' accessor must have exactly one parameter.
    public set age(age: number) {
      if (age > 200 || age < 0) {
        throw new Error("The age must be within range of 0-200");
      }
      this._age = age;
    }
  
    // A 'get' accessor cannot have parameters.
    public get age() {
      if (this._age === undefined) {
        throw new Error("The age property has not been set as yet");
      }
      return this._age;
    }
  }

  const john: Person = new Person("John");
  const mark: Person = new Person("Mark");

  console.log(john);
  console.log(mark);

  // will throw an error!
  // john.age = -10;
  // mark.age = 205;

  john.age = 10;
  mark.age = 50;

  console.log(john.age);
  console.log(mark.age);

}