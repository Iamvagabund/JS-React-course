"use strict";

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'), // получаем HTMLCollections это псевдомассив, к псевдомассиву нельзя обратится и поменять кнопку. он не содержит методов, нужно обращаться только к элемменту. 
// const btns = document.getElementsByTagName('button')[1]; // получаем вторую кнопку
      circles = document.getElementsByClassName('circle'), //получаем HTMLCollections это псевдомассив, к псевдомассиву нельзя обратится и поменять кнопку. он не содержит методов, нужно обращаться только к элемменту. 
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'), //это Nodelist у него есть метод forEach
      oneHeart = wrapper.querySelector('.heart'); // первый элемент берёт
console.dir(box);

box.style.backgroundColor = 'blue'; // обращаемс к инлайн стилям
box.style.width = '500px';
// box.style.cssText = 'background-color: blue; width: 500px'; // много стилей делаем
// box.style.cssText = `background-color: blue; width: ${num}px`; // много стилей делаем

btns[1].style.borderRadius = '100%';

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
  item.style.backgroundColor = 'blue';
});

const div = document.createElement('div'); // сохраняется только в джеес
const text = document.createTextNode('hello') ;// нода это узел. будем слышать не элементы на странице, а ноды


div.classList.add('black'); //добавили класс black, но div по прежденму нет в доме, а только в джеес

document.body.append(div); // берём тег body и в конец добавляем div

// document.querySelector('.wrapper').append(div); // если не используем часто, а только один раз то можно сразу делать и не создавать переменную отдельно.

wrapper.append(div); // добвить в конец
// wrapper.appendChild(div); // старая запись

wrapper.prepend(div); // перед элементов

hearts[0].before(div); // перед таким то элементом hearts[0] вставляем div
hearts[0].after(div); // после таким то элементом hearts[0] вставляем div

// wrapper.insertBefore(div, hearts[0]); // старый метод. блок который вставляем, второй перед каким вставляет

circles[0].remove(); //удаляем элемент
// wrapper.removeChild(hearts[1]); // старый метод

hearts[0].replaceWith(circles[0]); // сначала указываем какой эллемент хотим удалить, а потом какой поставить вместо него
// wrapper.replaceChild(circles[0], hearts[0]); // первый эллемент на который мы хотим что то поменять, а второй эллемент это тот элемент который меняется

div.innerHTML = '<h1>hey hey hey</h1>'; // появится структура внутри блока

// div.textContent = 'heeeeey'; // работает только как текст и работает только с текстом

div.insertAdjacentHTML('', '<h2>HEEEEy</h2>'); // первое это спец слово, а второе тот html который хотим вставить
//первое спец слово beforebegin - позволяет ставить данные HTML перед элементом
// afterbegin - вставит код в начало элемента
// beforeend - вставит код в конец элемента
// afterend - вставит код после элемента




