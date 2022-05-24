window.addEventListener('DOMContentLoaded', () => {
// используем классы для карточек

  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector) {
      this.src = src; // путь к картинке
      this.alt = alt; // текст к картинке, если она не подгрузится
      this.title = title; // название карточки
      this.descr = descr; // описание в карточке
      this.price = price; // цена в картчоке
      this.parent = document.querySelector(parentSelector); //родитель куда будем помещать див с карточкой
      this.transfer = 30; // курс валют доллара к гривне
      this.changeToUAH(); // возмёт цену и умножит на курс
    }

    changeToUAH() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement('div');
      element.innerHTML = `
        <div class="menu__item">
          <img src=${this.src} alt=${this.alt}>
          <h3 class="menu__item-subtitle">${this.title}</h3>
          <div class="menu__item-descr">${this.descr}</div>
          <div class="menu__item-divider"></div>
          <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
          </div>
        </div>
      `;
      this.parent.append(element);
    }
  }

  // const div = new MenuCard();
  // div.render();
  // можно писать как выше, а можно если мы сразу используем и в дальнейшем не будем использовать делат ькак ниже

  new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9, // 9 долларов значение берем с базы данных
    '.menu .container' // .container находится в .menu
  ).render(); // создали обьект и сразу использовали метод render

  new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    'Меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    14, // 14 долларов значение берем с базы данных
    '.menu .container' // .container находится в .menu
  ).render(); // создали обьект и сразу использовали метод render

  new MenuCard(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    21, // 9 долларов значение берем с базы данных
    '.menu .container' // .container находится в .menu
  ).render(); // создали обьект и сразу использовали метод render

  
});