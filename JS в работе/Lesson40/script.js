'use strict';

const now = new Date();
// const now = new Date('2022-04-23');
// const now = new Date(2022, 4, 23);
// const now = new Date(0);
// const now = new Date(-999999999);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getUTCHours());
console.log(now.getTimezoneOffset());


console.log(now.setHours(18));

// const noww = new Date('2022-05-22');
// new Date.parse('2022-05-22');


let start = new Date();

for (let i=0; i < 100000; i++) {
  let some = i ** 3; // возводит в степень 3
}

let end = new Date();

alert(`цикл отработал за ${end - start} милисекунд`);