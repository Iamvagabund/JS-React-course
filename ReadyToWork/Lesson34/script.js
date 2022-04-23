// touchstart при касании на элемент
// touchmove при касании на элемент палец начинает двигаться
// touchend как только палец оторвался от элемента
// touchenter когда ведем пальцем по экрану и наскакиваем на эллемент
// touchleave как только палец скользил по элементу и покинул его область
// touchcancel точка соприкосновения не регистрируется на поверхности. например когда мы свернули браузер ( палец уходит запределы браузера)

window.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector('.box');

  box.addEventListener('touchstart', (e) => {
    e.preventDefault();

    console.log('start');
  });

  box.addEventListener('touchmove', (e) => {
    e.preventDefault();

    console.log('move');
  });

  box.addEventListener('touchend', (e) => {
    e.preventDefault();

    console.log('move end');
  });

  //touches список всех пальцев, которые взаемодействуют с экраном. Те пальці, которіе тапнули и держат на сенсорном мониторе

  box.addEventListener('touchstart', (e) => {
    e.preventDefault();

    console.log(e.touches); // получаем TouchList . length количество пальцев
  });

  // targetTouches все пальцы которые взаемодействуют с этим элементом

  box.addEventListener('touchstart', (e) => {
    e.preventDefault();

    console.log(e.targettouches); // получаем TouchList . length количество пальцев
  });

  //changedTouches список пальцев которые участвуют в текущем событии. Если событие touchEnd то список будет содержать палец, 
  //который был убран, даже если остальные на экране остались. то есть это пальцы которые совершили назначенное определенное действие

  //
  box.addEventListener('touchmove', (e) => {
    e.preventDefault();

    console.log(e.targetTouches[0].pageX); // отслеживаю координаты пальца. можно использовать, если переходит границу, то переключаю слайд.

    // сущестуют готовые библиотеки типа Hammerjs - небольшой скрипт с уже готовыми данными
  });
});
