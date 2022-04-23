"use strict";

// TO STRING
//1
console.log(typeof(String(null)));
console.log(typeof(String(4)));
//2
console.log(typeof(5 + ''));
console.log(typeof(null + ''));

const num = 5;
console.log("https://vk.com/catalog" + num);
console.log(`https://vk.com/catalog + ${num}`);

const fontSize = 25 + 'px';



//TO NUMBER
//1
console.log(typeof(Number("4")));
//2
console.log(typeof(+'5'));
//3
console.log(typeof(parseInt('15px', 10)));


let answer = +prompt("hello", '');


//TO BOOLEAN
0, null, '', underfined, NaN // это false

//1
let switcher = null;

if (switcher) {
  console.log('Working');
} // null Значение false не выполняется

switcher = 1;

if (switcher) {
  console.log('Working');
} // 1 значение true выполняется

//2
console.log(typeof(Boolean("4")));
//3
console.log(typeof(!!'4'));


//ЗАДАЧИ С СОБЕСЕДОВАНИЙ
//•	Какое будет выведено значение: let x = 5; alert( x++ ); ?
let x = 5; alert( x++ ); // it will be 5
let x = 5; alert( ++x ); // it will be 6

//•	Чему равно такое выражение: [ ] + false - null + true ?
console.log(typeof([] + false)); // пустой массив приравнивается к пустой строке. строка с другим типом данных будет строка. Значение будет false
console.log(typeof([] + false - null)); // будет NaN которое получается при расчете не математических значений
console.log(typeof([] + false - null + true)); // будет NaN которое получается при расчете не математических значений

//•	Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
let y = 1;
let x = y = 2;
alert(x); // будет 2

//•	Чему равна сумма [ ] + 1 + 2?

console.log([ ] + 1 + 2); // пустая строка + 1 = '1' + 2 = 12

//•	Что выведет этот код: alert( "1"[0] )?
alert( "1"[0] ); //  к каждой строке можно обратится к его символу по порядку - получит 1

//•	Чему равно 2 && 1 && null && 0 && undefined ?
console.log( 2 && 1 ); // будет true ( 1 это true и 2 это true) - оператор И && всегда запинается на лжи, а оператор или || на правде
console.log( 2 && 1 && null); // будет null ( 1 это true и 2 это true), null это ничего false 

//•	Есть ли разница между выражениями? !!( a && b ) и (a && b)?
console.log(!!(1 && 2) === (1 && 2)); // два знака !! превращают выражение в булиновое и булиновоое не равняется правой части

//•	Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
// по таблице приоритета операторов в джеес какое выражение будет выполняться первым 
// больше значение у И && если 2 && 3, то возвращается последнее значение, то есть 3
// null || 3  - или запинается на правде, значит результатм будет 3
// 3 || 4 будет 3 потому что запнулось на правде


//•	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
// не правда. это два разных массива, которые просто содержат одинаковые данные


//•	Что выведет этот код: alert( +"Infinity" ); ?
// выведет Infinity потому что спрашивают не про тип данных, а что вывведет

//•	Верно ли сравнение: "Ёжик" > "яблоко"?
// false сравниваются первые буквы. особенности UNICOD коддировка и нужно смотреть по таблице

//•	Чему равно 0 || "" || 2 || undefined || true || falsе ?
// или запинается на правде. 0 и '' это false, а 2 это true всё что дальше не имеет значения
