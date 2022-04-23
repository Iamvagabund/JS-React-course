'use strict';
const btn = document.querySelector('button');

// btn.onclick = function() {
//   alert('click');
// }; // не используется. пербивается другой такой же функцией

// btn.addEventListener('click', () => {
//   alert('click');
// });

// btn.addEventListener('click', () => {
//   alert('Second click');
// });

// btn.addEventListener('mouseenter', () => {
//   console.log('its hover');
// }); // on hover

// btn.addEventListener('click', (event) => {
//   event.target.remove();
//   console.log('its hover with argument');
// });


// const deleteElement = (e)  => {
//   e.target.remove();
//   console.log('its hover with argument');
// };

// btn.addEventListener('click', deleteElement);
// btn.removeEventListener('click', deleteElement);


// let i = 0;
// const deleteElem = (e)  => {
//   console.log(e.target);
//   i++;
//   if (i == 1) {
//     btn.removeEventListener('click', deleteElem);
//   }
// };

// btn.addEventListener('click', deleteElem);


const overlay = document.querySelector('.overlay');

// const deleteElem = (e)  => {
//   console.log(e.target);
//   console.log(e.type);
// };

// btn.addEventListener('click', deleteElem);
// overlay.addEventListener('click', deleteElem); // обработчик сначала выполняет дочерние элементы, а потом уже самого родителям
// //снчала на вложеном, а потом на родителе. называется всплытием событий

const deleteElem = (e)  => {
  console.log(e.currentTarget);
  console.log(e.type);
};

// btn.addEventListener('click', deleteElem);
// overlay.addEventListener('click', deleteElem); // сначала событие на внутренем, а потом на оверлей

// const link = document.querySelector('a');

// link.addEventListener('click', (event) => {
//   event.preventDefault(); // отменяем стандартное поведение. говорит не нужно переходить по ссылке, а делай, что ниже в коде в функции
//   console.log(event.target);
// });

const btns = document.querySelectorAll('button'); 

// btns.forEach(btn => {
//   btn.addEventListener('click', deleteElem);
// }); // навешиваем событие для всех кнопок

btns.forEach(btn => {
  btn.addEventListener('click', deleteElem, {once: true});
}); // навешиваем событие для всех кнопок по одному разу