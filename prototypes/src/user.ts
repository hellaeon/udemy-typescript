class User {
  points: number;

  constructor(public name: string, public email: string) {
    this.email = email;
    this.points = 0;
  }

  login() {
    console.log(this.name, 'Has logged in');
  }

  logout() {
    console.log(this.name, 'Has logged out');
  }

  addPoint() {
    this.points++;
    console.log('total points', this.points);
  }
}

/*
function User(name, email) {
  this.name = name;
  this.email = email;
  this.points = 0;
}

User.prototype.login = function () {
  console.log(this.name, 'Has logged in');
};

User.prototype.logout = function () {
  console.log(this.name, 'Has logged out');
};

User.prototype.addPoint = function () {
  this.points++;
  console.log('total points', this.points);
};
*/