window.addEventListener('DOMContentLoaded', () => {
  const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

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

  // вешаем обработчик события для закрытия модального окна и вызываем функцию closeModal
  modalCloseBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal(); // если клацаем на элемент с классом modal, то вызываем функцию закрытия модального окна
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) {
      closeModal(); // если нажимаем на клавишу Esc и при этом у нас открыто модальное окно, то вызываем функцию закрытия модального окна
    }
  });

  // вызываем через 4 секунды функцию открытие модального окна
  const modalTimerId = setTimeout(openModal, 4000);

  // при скроле до конца появляется модальное окно. window.pageYOffset - сколько пикселей пролистал пользователь по оси Y. scrollHeight - полная высота элемента с учетом прокрутки
  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal();
      window.removeEventListener('scroll', showModalByScroll); // если событие сработало второй раз не вызываем
    }
  }
  // если долистал до конца, то открывал модальное окно
  window.addEventListener('scroll', showModalByScroll);
});