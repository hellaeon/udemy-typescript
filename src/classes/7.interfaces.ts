namespace Interfaces {
  enum Roles {
    admin = "admin",
    author = "author",
    editor = "editor"
  }

  interface Role {
    role: Roles
  }

  enum PermissionsList {
    read = "read",
    write = "write",
    execute = "execute"
  }

  interface UserPermissions {
    permissions: PermissionsList[]
  }

  interface User {
    name: string;
    email: string;
    age: number;
    phone?: number;
    greet?: () => void;
  }

  interface UserWithAddress extends User {
    address: string;
  }

  interface AdminUser extends User, Role, UserPermissions {
    numberOfUsersReporting: number;
  }

  const user: User = {
    name: "John",
    email: "john@email.com",
    age: 32
  };

  const userWithAddress: UserWithAddress = {
    name: "Mark",
    email: "mark@email.com",
    age: 23,

    address: "666 devils lane, hell",
  }

  const adminUser: AdminUser = {
    name: "Mark",
    email: "mark@email.com",
    age: 23,

    role: Roles.admin,
    permissions: [PermissionsList.read, PermissionsList.write, PermissionsList.execute],
    numberOfUsersReporting: 50
  }
}