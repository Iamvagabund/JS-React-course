"use strict";

const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button'); // получаем HTMLCollections это псевдомассив, к псевдомассиву нельзя обратится и поменять кнопку. он не содержит методов, нужно обращаться только к элемменту. 
// const btns = document.getElementsByTagName('button')[1]; // получаем вторую кнопку

const circles = document.getElementsByClassName('circle'); //получаем HTMLCollections это псевдомассив, к псевдомассиву нельзя обратится и поменять кнопку. он не содержит методов, нужно обращаться только к элемменту. 

//современные методы

const hearts = document.querySelectorAll('.heart'); //это Nodelist у него есть метод forEach
hearts.forEach(item => {
  console.log(item);
});

const oneHeart = document.querySelector('.heart'); // первый элемент берёт

