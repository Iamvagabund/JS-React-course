"use strict";

// function first() {
//   // do something
//   setTimeout(function () {
//       console.log('1');
//   }, 500);
// }

// function second() {
//   console.log('2');
// }

// first();
// second();


// function learnJS(lang, callback) {
//   console.log(`I learn: ${lang}`);
//   callback();
// }

// function done() {
//   console.log('I practice in it');
// }
// learnJS('Javascript', done);

// const obj = new Object();

// const options = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: 'black',
//     bg: 'red'
//   },
//   makeTest: function() {
//     console.log('test');
//   }
// };

// console.log(Object.keys(options).length); // узнаем сколько ключей в обьекте
// options.makeTest();

// const {border, bg} = options.colors; // деструктаризация обьекта. вытаскиваем нужные значение с обьекта обьекта
// console.log(border);
// // console.log(options.colors.bg);

// // delete options.name;

// // console.log(options);

// let counter = 0;

// for (let key in options) {
//   if (typeof(options[key]) === 'object') {
//     for (let i in options[key]) {
//       console.log(`Property ${i} have value ${options[key][i]}`);
//       counter++;
//     }
//   } else {
//     console.log(`Property ${key} have value ${options[key]}`);
//     counter++;
//   }
// }

// console.log(counter);



// const arr = [1, 2, 3, 4, 5];

// // arr.pop(); // удаляет в конце элемент
// // arr.push(10); // удаляет в конце элемент
// // console.log(arr);

// arr.forEach(function(items, i, arr) {
//   console.log(`${i}: ${items}: in array ${arr}`);
// });

// for (let i=0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

const str = prompt("", '');
const products = str.split(', '); // строку когда ввели слова через запятую превращает в массив
products.sort();
// console.log(products);
console.log(products.join('; ')); // массив склеил в строку через двоеточие


const arrNumberSort = [1, 21, 12, 4, 5, 25];
arrNumberSort.sort(compareNum); // для сортировки чисел, которые состоят из двух (и больше) цифр по типу 10 и больше

function compareNum(a, b) {
  return a - b;
}
console.log(arrNumberSort);



function copy(mainObj) {
  let objCopy = {};

  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }

  return objCopy;
}

// const obj = {
//   a: 6,
//   b: 1,
//   c: {
//     y: 3,
//     x: 2
//   }
// };

// const newObj = copy(obj);
// newObj.a = 10;
// console.log(obj);
// console.log(newObj);

// const add = {
//   d: 15,
//   r: 321
// };

// console.log(Object.assign(obj, add)); //соединение обьектов в один

// const cloneAdd = Object.assign({}, add); // методом соединения пустого обьекта мы создали копию второго обьекта
// cloneAdd.d = 255;
// console.log(cloneAdd);
// console.log(add);


// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice(); // создаем копию массива (по сути обьединяем пустой массив с тем, над которым нужно сделать копию)
// newArray.push('d');
// console.log(oldArray);
// console.log(newArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook']; // разворачиваем структуру массива video, blogs и таким образом обьединяем. Сам знак троеточия расскладывает массив на отдельные строки
// console.log(internet);

// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

const numm = [5, 3, 9];
console.log(...numm);

// const arrr = ['a', 'b', 'c'];
// const newArrr = [...arrr];
// console.log(newArrr);

// const q = {
//   one: 1,
//   two: 2
// };

// const newQ = {...q};

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
      console.log('Say hello');
    }
};

const john = {
  health: 100
};

john.__proto__ = soldier; // старая запись
Object.setPrototypeOf(john, soldier); // первый кому дать прототип, второй от кого, но правильно создавать сразу при создании Джона, пример ниже

const johnn = Object.create(soldier); // создаем Джона, который будет прототипно наследоваться от солдата

console.log(john);
console.log(john.armor); // наследует от прототипа
john.sayHello();

// ООП - обьектно ориентированное прграммирование. ООП это наука о том как делать правильную архитектуру 