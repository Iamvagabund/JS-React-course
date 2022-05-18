'use strict';
// 1111111111111111111111111111
// function showThis() {
//   console.log(this); // при строгом режиме this = undefined, без него this = window
// }
// showThis();


// 2222222222222222222222222222
function showThis(a, b) {
  console.log(this); // при строгом режиме this = undefined

  function sum() {
    console.log(this); // при строгом режиме this = undefined
    return a + b; // не может прочитать а и b, если this.a + this.b так как они undefined
  }

  console.log(sum());
}
showThis(4, 5);

const obj = {
  a: 20,
  b: 15,
  sum: function() {
    console.log(this);
  }
};
obj.sum(); // будет обьект потому что this ссылается на обьект в котором находится контекст вызова this. То есть контекст у методов обьекта - сам обьект

const objj = {
  a: 20,
  b: 15,
  sum: function() {
    function shout() {
      console.log(this);
    }
    shout();
  }
};
objj.sum(); // будет undefined потому это простой вызов функции. это не метод этого обьекта. это функция которая запускается внутри метода

// 3333333333333333333333333333333333333
function User(name, id) {
  this.name = name; // this всегда ссылается на новый созданый обьект, например ivan. this ссылается на new User('Ivan', 28); вместо this передается новое значение 'Ivan'
  this.id = id;
  this.human = true;
}

const ivan = new User('Ivan', 28); 

// 444444444444444444444444444444444
// ручное присвоение this любой функции
function sayName() {
  console.log(this);
  console.log(this.name);
}

const user = {
  name: 'John'
};

sayName.call(user); // говорим функции заработать на обьекте user и тогда this будет передавать обьект и используй его данные или this.name - свойство обьекта
sayName.apply(user);


function sayNameSurname(surname) {
  console.log(this);
  console.log(this.name + surname);
}

const userr = {
  name: 'John'
};

sayNameSurname.call(userr, 'тут будет фамилия');
sayNameSurname.apply(userr, ['тут будет фамилияяяя']);

//создает новую функцию связаную с определенным контекстом
function count(num) {
  return this*num;
}

const double = count.bind(2); // в double передаем новую функцию. 2 переходит в this, а num передается в функцию double.
console.log(double(4));
console.log(double(1));



// ИТОГИ
// 1. Обычная функция: this = window, но если use strict - undefined
// 2. Контекст у методов обьекта - сам обьект
// 3. this в конструкторах и классах - это новый экземпляр обьекта
// 4. ручная привязка this (call, apply, bind)

