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

// console.log(Object.keys(options).length);
// options.makeTest();

// const {border, bg} = options.colors;
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
const products = str.split(', ');
products.sort();
// console.log(products);
console.log(products.join('; '));


const arrNumberSort = [1, 21, 12, 4, 5, 25];
arrNumberSort.sort(compareNum);

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

// console.log(Object.assign(obj, add));

// const cloneAdd = Object.assign({}, add);
// cloneAdd.d = 255;
// console.log(cloneAdd);
// console.log(add);


// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();
// newArray.push('d');
// console.log(oldArray);
// console.log(newArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];
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