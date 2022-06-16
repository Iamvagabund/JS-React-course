'use strict';

const inputUah = document.querySelector('#uah'),
      inputUsd = document.querySelector('#usd');

inputUah.addEventListener('input', () => {
  const request = new XMLHttpRequest();

  request.open('GET', 'js/current.json'); // request.open(method (get or post), url, async, login, pass);
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.send();

  request.addEventListener('load', () => {
    if (request.status === 200) {
      // в условии проверяем что событие полностью загрузилось и что статус его успешный
      console.log(request.response);

      const data = JSON.parse(request.response);
      inputUsd.value = (+inputUah.value / data.current.usd).toFixed(2);
    } else {
      inputUsd.value = 'Что то пошло не так';
    }
  })
  // Свойства:
  // status - статус запроса 404 не найдено, 500 клиентские, 200 успешные
  // statusText - текстовое описание окей, нотфаунд и тд
  // responce - ответ, тот ответ который задал бэкенд разработчик
  // readyState - состояние обьекта

  // События:
  // onReadyStateChange - событие отслеживает статус готовности нашего запроса в данный текущий момент
  //load - запрос полностью загрузился
});