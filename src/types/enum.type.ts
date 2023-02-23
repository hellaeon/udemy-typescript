namespace EnumType {
  enum Roles {
    Admin,
    Author,
    Editor
  };

  type Person = {
    name: string;
    email: string;
    password: string;
    role: Roles;
  }

  let newPerson: Person = {
    name: "Old Mate",
    email: "someone@somewhere.com",
    password: 'password',
    role: Roles.Admin
  }
}