'use strict';

// FILTER
const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemar'];

const shortNames = names.filter(function(name) {
  return name.length < 5;
});

console.log(shortNames);

// MAP
const answers = ['IvAn', 'AnnA', 'Hello', 'CRis'];

const result = answers.map(item => item.toLowerCase());
console.log(result);

// let answers1 = ['IvAn', 'AnnA', 'Hello', 'CRis'];
// answers1 = answers1.map(item => item.toLowerCase());
// console.log(answers1);


//   EVERY/SOME
const some = [4, 'qwee', 'dsadasd'];
console.log(some.some(item => typeof(item) === 'number'));

console.log(some.every(item => typeof(item) === 'number'));


// REDUCE собираем массив в единое целое
const arr = [4, 5, 1, 3, 2, 6];
const resultArr = arr.reduce((sum, current) => sum + current, 3); // 3 это начальное значение
console.log(resultArr);

const arrString = ['apple', 'pear', 'plum'];
const resultArrString = arrString.reduce((sum, current) => `${sum}, ${current}`);
console.log(resultArrString);




const obj = {
  ivan: 'persone',
  ann: 'persone',
  dog: 'animal',
  cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);