'use stict';
console.log(document.body);
console.log(document.documentElement); // страницас html
console.log(document.body.childNodes); // дети body
console.log(document.body.firstChild); //певый в body
console.log(document.body.firstElementChild); //певый элемент body
console.log(document.body.lastChild); // поледий элемент body

console.log(document.querySelector('#current').parentNode); // получаем родителя 
console.log(document.querySelector('#current').parentNode.parentNode); // получаем родителя родителя
console.log(document.querySelector('#current').parentElement); // получаем элемент родителя


console.log(document.querySelector('[data-current="3"]').nextSibling); // ищем элемент по data и берём соседа, что идёт после
console.log(document.querySelector('[data-current="3"]').previousSibling); // ищем элемент по data и берём соседа, что идёт до
console.log(document.querySelector('[data-current="3"]').previousElementSibling); // ищем элемент по data и берём именно элемент соседа, что идёт до

for (let node of document.body.childNodes) {
  if (node.nodeName == '#text') {
    continue;
  }
  console.log(node);
}//пербирам бади и избавляеся от текстовых нод, чтобы получить только элементы