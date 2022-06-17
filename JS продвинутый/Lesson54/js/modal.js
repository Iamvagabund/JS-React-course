window.addEventListener('DOMContentLoaded', () => {
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
    postData(item);
  });


  function postData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;
      `;
      form.insertAdjacentElement('afterend', statusMessage);

      const request = new XMLHttpRequest();
      request.open('POST', 'server.php');

      request.setRequestHeader('Content-type', 'application/json'); // если нужно в формате json передавать данные. если не нужно, то строку всю убрать
      const formData = new FormData(form);

      // если нужно в формате json передавать данные
      const object = {};
      formData.forEach(function(value, key) {
        object[key] = value;
      })

      const json = JSON.stringify(object);
      request.send(json);


      request.addEventListener('load', () => {
        if (request.status === 200) {
          console.log(request.response);
          showThanksModal(message.success);
          form.reset();
          statusMessage.remove();
        } else {
          showThanksModal(message.failture);
        }
      });
    })
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
});