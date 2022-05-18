// ES5
function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function() {
    console.log(`Hi, ${this.name}`);
  };
}

User.prototype.exit = function() {
  console.log(`Пользователь ${this.name} ушел`);
}

const ivan = new User('Ivan', 28),
      alex = new User('Alex', 20);

ivan.hello();
alex.hello();

ivan.exit();


console.log(ivan);
console.log(alex);

// ES6 используем классы
class User {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
  }
  hello() {
    console.log(`Hi, ${this.name}`);
  }
  exit() {
    console.log(`Пользователь ${this.name} ушел`);
  }
}