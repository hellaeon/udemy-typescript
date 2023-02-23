/* 
  Modifier | Outside class/Child Class/Parent Class
  public | yes, yes, yes
  protected | no, yes, yes
  private | no, no, yes
*/

// with private, name will only be available to this class
// even if we try to extend it.
namespace AccessModifiersPrivate {
  class Person {
    private name: string;
    public age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    public getName() {
      return this.name;
    }
  }
  
  let person: Person = new Person("John", 32);
  console.log(person.getName());
}

// proteted allows us to acccess the parent class values
// when we extend it and inherit from it
namespace AccessModifiersProtected {
  class Person {
    protected name: string;
    public age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    public getName() {
      return this.name;
    }
  }
  
  class Admin extends Person {
    public returnName() {
      return this.name;
    }
  }
  
  const admin: Admin = new Admin("Mark", 42);
  
  let person: Person = new Person("John", 32);
  
  console.log(person);
  console.log(admin.returnName());
}

// this is the same as the above and really cleans up the code
namespace AccessModifiersShorthand {
  class Person {
    constructor(protected name: string, public age: number) {}
  
    public getName() {
      return this.name;
    }
  }
  
  class Admin extends Person {
    public returnName() {
      return this.name;
    }
  }
  
  const admin: Admin = new Admin("Mark", 42);
  
  let person: Person = new Person("John", 32);
  
  console.log(person);
  console.log(admin.returnName());
}
// This is again, syntactic sugar. 
// You will still see name and age in the console objects
