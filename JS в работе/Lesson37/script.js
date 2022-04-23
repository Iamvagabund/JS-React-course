"use strict";

const btns = document.querySelectorAll('button');

// console.log(btns[0].classList.length); // сколько классов у элемента btns[0]
// console.log(btns[0].classList.item(0)); // получаем класс который идет под определенным индексом.
// console.log(btns[1].classList.add('red', 'onemoreclass')); // добавляет определнные классы
// console.log(btns[0].classList.remove('blue')); // убирает определнные классы
// console.log(btns[0].classList.toggle('blue')); // если есть класс, то будет убран, если нет, то будет добавлен

// if(btns[1].classList.contains('red')) {
//   console.log('red');
// }// проверяет наличие класса на определнном элементе и возвращает булиновое значение
// // данный метод применяется в гамбургер меню. проверяем или есть клас актив у 
// //меню и если есть, то убираем актив и закрываем меню при нажатии

btns[0].addEventListener('click', () =>{
  if (!btns[1].classList.contains('red')) {
    btns[1].classList.add('red');
  } else {
    btns[1].classList.remove('red');
  }//если у второй кнопки нет класса ред, то я буду добавлять, если есть, то буду убирать
});

console.log(btns[0].className); // старый метод получаем все классы элемента в одной строке

// ДЕЛИГИРОВАНИЕ СОБЫТИЙ. много кнопок. на клике на любую из них вызывалось одно событие. 
// делигируем с родителя на потомка

const wrapper = document.querySelector('.btn-block');

wrapper.addEventListener('click', (e) => {
  if (e.target && e.target.tagName == 'BUTTON') {
    console.log('hello');
  } // в условии у (e) мы ищем тагнейм через консоль дир чтобы убедится, что мы точно нажали на кнопку. значение тагнейм BUTTON
});

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log('hello');
  });
}); // это не делигирование, делает тоже что и выше обработчик, но не сработает на кнопку которая будет добавлена через js динамически

// wrapper.addEventListener('click', (e) => {
//   if (e.target && e.target.classList.contains('blue')) {
//     console.log('hello');
//   } // кнопка которая имеет класс blue Будет выполнять этот код
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);


wrapper.addEventListener('click', (e) => {
  if (e.target && e.target.matches('button.red')) {
    console.log('have class red');
  } // проверка на совпадение, с чем сравниваем или совпадает пишем в скобки матчес
});