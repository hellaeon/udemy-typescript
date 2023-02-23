namespace AbstractClass {

  // if any implementation is mandatory for the class, 
  // you probably want to use an abstract
  abstract class Person {
    public abstract name: string;
    public abstract email: string;
    public abstract phone: number;
  
    // in the abstract class we can define the methods body
    public greeting() {
      console.log(`Hello ${this.name}`);
    }
  
    // also we can use statics
    public static nameClass () {
      return "Class name is Person"
    }
  }
  
  class RegisteredPerson extends Person {
    constructor(
      public name: string,
      public email: string,
      public phone: number  
    ) {
      super();
    }
  }
  
  const person: RegisteredPerson = new RegisteredPerson(
    "John",
    "john@email.com",
    987889788);
  
  person.greeting();
  console.log(person)
  console.log(Person.nameClass())
}

namespace InterfaceClass {

  // Use interfaces where you want to use contracts.
  // Most times the design pattern you follow is what dictates 
  // whether to use abstract or interfaces.
  interface User {
    name: string;
    email: string;
    phone: number;
    // greeting: () => void;
  }
  
  // interfaces allow us to create the method signature, but the body
  // must be implemented by the class using the interface
  // also, we cant use statics
  interface Greeting {
    greeting: () => void;
  }
  
  class RegisteredUser implements User, Greeting {
    constructor(
      public name: string,
      public email: string,
      public phone: number
    ) {
    }
  
    public greeting() {
      console.log(`Hello ${this.name}`);
    }
  }
}