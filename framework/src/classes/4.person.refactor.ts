namespace CleanerClass {
  class Person {

    // we still check the age limits and this makes our entire class code
    // much neater and cleaner. Easy to test!
    constructor(private _name: string, private _age: number) {
      // we do this here so we cant instantiate a bad value
      this.testUsersAge(_age); 
    }
      
    public set name(name: string) {
      this._name = name;
    }

    public get name() {
      return this._name;
    }
 
    private testUsersAge(age: number)
    {
      if (age > 200 || age < 0) {
        throw new Error("The age must be within range of 0-200");
      }
      return age;
    }

    public set age(age: number) {
      this.testUsersAge(age); // we need to do this here as it's a public accessor
      this._age = age;
    }
  
    public get age() {
      return this._age;
    }
  }

  // errors, cant do this.
  // const person: Person = new Person("John", 210);

  const person: Person = new Person("John", 10);

  console.log(person);

  // errors, now cant do this either
  // person.age = -10;
  console.log(person.name);
  console.log(person.age);
}