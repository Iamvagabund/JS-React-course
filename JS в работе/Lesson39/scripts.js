
  // const setTime = setTimeout(function() {
  //   console.log('hello');
  // }, 500);

  // clearInterval(setTime); // убираем счётчик

  // const setTimes = setTimeout(function(text) {
  //   console.log(text);
  // }, 1000, 'hey third argument');


  // const setTimed = setTimeout(logger, 2000);
  // function logger() {
  //   console.log('hello, here is logger');
  // }


  // let setTimeId,
  //     count = 0;
  // const btn = document.querySelector('.btn');
  // btn.addEventListener('click', () => {
  //   // const setTimeId = setTimeout(logger, 2000);
  //   setTimeId = setInterval(logger, 1000); //при клике на кнопку каждые 2 сек будет выполнятся функция
  // });

  // function logger() {
  //   if (count === 3) {
  //     clearInterval(setTimeId);
  //   }
  //   console.log('hello, here is logger');
  //   count++;
  // }
  

  // let id = setTimeout(function log() {
  //   console.log('Hiiii');
  //   id = setTimeout(log, 6000); // запустится функция через 500, потом делает всё что внутри и через 6000 запустится заново и через 500 снова
  // }, 500);


  // LIKE HOMEWORK
  const btn = document.querySelector('.btn');

  function myAnimation() {
    const box = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 5);

    function frame() {
      if (pos === 300) {
        clearInterval(id);
      } else {
          pos++;
          box.style.top = pos + 'px';
          box.style.left = pos + 'px';
      }
    }

  }

  btn.addEventListener('click', myAnimation);
