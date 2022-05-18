const btn = document.querySelector('button');

btn.addEventListener('click', function() {
  console.log(this); // this будет сам элемент на который кликаем. тоже самое что и even.target
  this.style.backgroundColor = 'red';
});

const obje = {
  num: 5,
  sayNumber: function() {
    const say = () => {
      console.log(this.num);
    }
    say();
  }
};

obje.sayNumber(); // this находится в стрелочной функции. у стрелочных функций нет своего контекста вызова и она ищет выше. выше будет метод, который ссылается на обьект

const doubleDouble = a => a * 2; // если стрелочная функция делается в одну строчку то мы сокращаем. в полном виде будет: (a) => { return a * 2;}