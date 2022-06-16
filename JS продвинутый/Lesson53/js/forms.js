window.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');

  const message = {
    loading: 'Загрузка',
    success: 'Спасибо мы с вами свяжемся',
    failture: 'Что-то пошло не так...'
  }

  forms.forEach(item => {
    postData(item);
  });


  function postData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      statusMessage.textContent = message.loading;
      form.append(statusMessage);

      const request = new XMLHttpRequest();
      request.open('POST', 'server.php');

      request.setRequestHeader('Content-type', 'application/json'); // если нужно в формате json передавать данные. если не нужно, то строку всю убрать
      const formData = new FormData(form);

      // если нужно в формате json передавать данные
      // const object = {};
      // formData.forEach(function(value, key) {
      //   object[key] = value;
      // })

      // const json = JSON.stringify(object);
      // request.send(json);


      request.send(formData);

      request.addEventListener('load', () => {
        if (request.status === 200) {
          console.log(request.response);
          statusMessage.textContent = message.success;
          form.reset();
          setTimeout(() => {
            statusMessage.remove();
          }, 2500);
        } else {
          statusMessage.textContent = message.failture;
        }
      });
    })
  }
});