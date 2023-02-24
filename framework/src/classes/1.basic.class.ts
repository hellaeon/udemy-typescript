namespace ClassInheritence {
  class User {
    name: string;
    email: string;
    age: number;

    constructor(name: string, email: string, age: number) {
      this.name = name;
      this.email = email;
      this.age = age;
    }

    // Realise the greet methods exists on the prototype.
    // Classes are just syntactic sugar in JS
    greet() { 
      return `Hi there, this is ${this.name}, age ${this.age}`; 
    }
  }

  class AdminUser extends User {
    isAdmin: boolean = true;
    usersReporting: number;

    constructor(
      name: string,
      email: string,
      age: number,
      usersReporting: number
    ) {
      super(name, email, age);
      this.usersReporting = usersReporting;
    }
  }

  const user: User = new User("John", "john@email.com", 32);
  const admin: AdminUser = new AdminUser("Mark", "mark@email.com", 34, 5);

  console.log(user);
  // User {name: 'John', email: 'john@email.com', age: 32}
  console.log(user.greet());

  console.log(admin);
  // AdminUser {name: 'Mark', email: 'mark@email.com', age: 34, isAdmin: true, usersReporting: 5}
  console.log(admin.greet());

  // Note the greet method when observing the admin object. It exists
  // on the prototype.

}