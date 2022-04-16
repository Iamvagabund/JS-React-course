"use strict";

let num = 20;

function showFirstMesage(text) {
  console.log(text);
  let num = 10;
  console.log(num);
}

showFirstMesage('Hello');//такие функции можем вызвать только тогда, когда до неё доходит код. можем вызвать в любом месте. На подобе var существует до того, как обьявлена. Functon declaration
console.log(num); 

function calc(a, b) {
  return (a + b);
}

console.log(calc(4, 3));
console.log(calc(4, 1));


function ret() {
  let num = 50;
  return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
  console.log('Hello');
};

logger(); // можно вызвать только после обьявления. Functon expression


function calc(a, b) {
  return (a + b);
} // обычная декларейшн функция 
const calcArrow = (a, b) => a + b; // стрелочная функция 
const calcArrowClassic = (a, b) => {
  console.log('1');
  return a + b;
}; // стрелочная функция классическая . НЕ имеет контекста вызова. применяется в основном в обработчиках событий 


const str = 'test';

console.log(str.length);
console.log(str[0]);
console.log(str.toUpperCase());

console.log(str);

const arr = [1, 2, 3];

console.log(arr.length);
console.log(arr.length);

const fruit = 'some fruit';
console.log(fruit.indexOf('fruit')); // ищем с какой строки по порядку начинается

const logg = 'hello world';
// console.log(logg.slice(6, 11)); // с какой позиции вырезать слово
// console.log(logg.slice(-5, -1)); // с какой позиции вырезать слово

// console.log(logg.substring(6, 11)); // с какой позиции вырезать слово, не принимает минусовые значения
console.log(logg.substr(6, 1)); // с какой позиции вырезать слово, второй аргумент это сколько букв вырезать 

const number = 12.2;
console.log(Math.round(number));

const test = '13.2px';
console.log(parseInt(test)); // переводит число в другую систему исчисления, превращает в число
console.log(parseFloat(test)); // взять число и вернуть в двоичную систему с дробными значениями
