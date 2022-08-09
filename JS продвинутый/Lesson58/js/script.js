window.addEventListener('DOMContentLoaded', () => {
  const tabcontent = document.querySelectorAll('.tabcontent'),
        tabs = document.querySelectorAll('.tabheader__item'),
        tabsAll = document.querySelector('.tabheader__items');

  function hideTabsContent() {
    tabcontent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });

    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active');
      });
  }

  function showTabsContent(i = 0) {
    tabcontent[i].classList.add('show', 'fade');
    tabcontent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabsContent();
  showTabsContent();

  tabsAll.addEventListener('click', (e) =>{
    const target = e.target;

    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabsContent();
          showTabsContent(i);
        }
      });
    }
  });


  // TIMER JS
  const deadline = '2022-08-12';

  // функция которая определяет разницу между дедлайном и нашим временем
  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()), //Date.parse(endtime) количество милисекунд до которого нужно досчитать. Вся строчка разница между датами в милисекундах
          days = Math.floor(t / (1000 * 60 * 60 * 24)), //количество милисекунд и разделить на кол милисекунд в одном дне и округлить
          hours = Math.floor((t / (1000 * 60 * 60) % 24)),
          minutes = Math.floor((t / 1000 / 60) % 60),
          seconds = Math.floor((t / 1000) % 60);
  
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    }
  }

  // ставим ноль, если число меньше 10
  function getZero(num) {
    if(num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num
    }
  }
  // установим наши часы на сайт
  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000); // устанавливаем время через которое будет обновляться таймер на сайте

    // для того, чтобы при перезагрузке страницы не показывало стандартное время
    updateClock();

    // обновляет таймер каждую секунду
    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadline);


  // используем классы для карточек

  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.src = src; // путь к картинке
      this.alt = alt; // текст к картинке, если она не подгрузится
      this.title = title; // название карточки
      this.descr = descr; // описание в карточке
      this.price = price; // цена в картчоке
      this.classes = classes; // если в будущем будем использовать ещё какие то свойства. они будут в массиве
      this.parent = document.querySelector(parentSelector); //родитель куда будем помещать див с карточкой
      this.transfer = 30; // курс валют доллара к гривне
      this.changeToUAH(); // возмёт цену и умножит на курс
    }

    changeToUAH() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement('div');

      if (this.classes.length === 0) {
        this.element = 'menu__item';
        element.classList.add(this.element);
      } else {
        this.classes.forEach(className => element.classList.add(className)); // назначаем классы. это массив, то проходимся по каждому элементу внутри, вытаскиваем название класса и подключаем каждый класс к диву
      }
      element.innerHTML = `
          <img src=${this.src} alt=${this.alt}>
          <h3 class="menu__item-subtitle">${this.title}</h3>
          <div class="menu__item-descr">${this.descr}</div>
          <div class="menu__item-divider"></div>
          <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
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
    '.menu .container'
  ).render(); // создали обьект и сразу использовали метод render

  new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    'Меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    14, // 14 долларов значение берем с базы данных
    '.menu .container',
    'menu__item' // .container находится в .menu
  ).render(); // создали обьект и сразу использовали метод render

  new MenuCard(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    21, // 9 долларов значение берем с базы данных
    '.menu .container',
    'menu__item' // .container находится в .menu
  ).render(); // создали обьект и сразу использовали метод render



  // MODAL JS
  const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');

  // функция открытия модального окна
  function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    // modal.classList.toggle('show');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId) // если пользователь сам открыл модальное окно, то не вызываем переменную modalTimerId
  }

  // проганяем все элементы с атрибутом data-modal и вешаем обработчик события и вызываем функцию openModal
  modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
  });
  
  // функция закрытия модального окна
  function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    // modal.classList.toggle('show');
    document.body.style.overflow = '';
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      closeModal(); // если клацаем на элемент с классом modal или на элемент у которого есть атрибут data-close то вызываем функцию закрытия модального окна
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) {
      closeModal(); // если нажимаем на клавишу Esc и при этом у нас открыто модальное окно, то вызываем функцию закрытия модального окна
    }
  });

  // вызываем через n секунды функцию открытие модального окна
  const modalTimerId = setTimeout(openModal, 50000);

  // при скроле до конца появляется модальное окно. window.pageYOffset - сколько пикселей пролистал пользователь по оси Y. scrollHeight - полная высота элемента с учетом прокрутки
  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal();
      window.removeEventListener('scroll', showModalByScroll); // если событие сработало второй раз не вызываем
    }
  }
  // если долистал до конца, то открывал модальное окно
  window.addEventListener('scroll', showModalByScroll);

  //FORMS
  const forms = document.querySelectorAll('form');

  const message = {
    loading: 'img/form/spinner.svg',
    success: 'Спасибо мы с вами свяжемся',
    failture: 'Что-то пошло не так...'
  }

  forms.forEach(item => {
    bindPostData(item);
  });


  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: data
    });

    return await res.json();
  };

  function bindPostData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;
      `;
      form.insertAdjacentElement('afterend', statusMessage);

      const formData = new FormData(form);

      // если нужно в формате json передавать данные
      const object = {};
      formData.forEach(function(value, key) {
        object[key] = value;
      });

      postData('http://localhost:3000/requests', JSON.stringify(object))
      .then(data => {
        console.log(data);
        showThanksModal(message.success);
        statusMessage.remove();
      }).catch(() => {
        showThanksModal(message.failture);
      }).finally(() => {
        form.reset();
      });
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');
    openModal();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
    <div class="modal__content">
      <div class="modal__close" data-close>×</div>
      <div class="modal__title">${message}</div>
    </div>
    `;

    document.querySelector('.modal').append(thanksModal);

    //когда пользователь снова открывает модальное окно, чтобы было видно форму
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      closeModal();
    }, 4000);
  }

  fetch('http://localhost:3000/menu')
    .then(data => data.json())
    .then(res => console.log(res));
});
