const box = document.querySelector('.box');
const btn = document.querySelector('button');

const width = box.clientWidth; // ширина и высота элемента без учета марджина
const height = box.clientHeight;

const width = box.offsetWidth; // получить контент с учетом полосы прокрутки с марджин видимой части
const height = box.offsetHeight;

const width = box.scrollWidth; // с учетом прокрутки высота и ширина
const height = box.scrollHeight;

btn.addEventListener('click', () => {
  box.style.height = box.scrollHeight + 'px'; // после клика берем у элемента и устанавливаем высоту с учетом всей прокрутки. При клике разворачивает всю прокрутку
  console.log(box.scrollTop); // покажет сколько текста пролистал, на каком пикселе по отношению к высоте элемента 
});


console.log(box.getBoundingClientRect()); // получаем координаты элемента
console.log(box.getBoundingClientRect().top); // получаем координаты высоты элемента

const style = window.getComputedStyle(box);// получаем свойства элемента которые указаны в css
const style = window.getComputedStyle(box, );// вторым значение можем посмотреть псевдостили
console.log(style.display); // покажет какой дисплей у элемента.

console.log(document.documentElement.scrollTop); // можем обращаться только через documentElement
console.log(window.scrollBy(0, 400)); // листаем от текущей позиции
console.log(window.scrollTo(0, 400)); // листаем от начала страницы