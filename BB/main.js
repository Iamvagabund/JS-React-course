const navItem = document.querySelectorAll('.nav__item'),
      nav = document.querySelector('.nav'),
      page = document.querySelectorAll('.page'),
      intro = document.querySelector('.intro'),
      preloader = document.querySelector('.preloader');

intro.addEventListener('click', () => {
  intro.style.display = 'none';
  preloader.style.display = 'none';
});

// Переключение пунктов меню
navItem.forEach(function (element, i) {
  element.addEventListener('click', function (e) {
    const target = e.target;
    // проверяем или нажали на пункт меню
    if(target.classList.contains('nav__item')) {
      for(let i = 0; i < navItem.length; i++) {
        // Убираем у всех пунктов меню класс active__menu
        navItem[i].classList.remove('active__menu');
        // добавляем клас active__menu на который нажали
        target.classList.add('active__menu');
      }
    }
    // убираем класс active__page у всех страниц
    page.forEach(pages => {
      pages.classList.remove('active__page');
    });
    // добавляем клас active__page section индекс которого соответствует индексу пункта меню
    page[i].classList.add('active__page');
  })
});