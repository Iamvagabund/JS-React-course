'use strict';

console.log('запрос данных...'); //синхронный код


//асинхронный код
setTimeout(() => {
  //отпправляем запрос на сервер
  console.log('Подготовка данных...');

  //получили данные от сервера
  const product = {
    name: 'TV',
    price: 4000
  };

  // получили данные и хотим выполнить операции асинхронно. Например, что статус -заказан
  setTimeout(() => {
    product.status = 'order';
    console.log(product);
  }, 2000);
}, 2000);


//чтобы не попадать в коллбэк хел создаются промисы
const req = new Promise(function(resolve, reject) {
  setTimeout(() => {
    //отпправляем запрос на сервер
    console.log('Подготовка данных...');
  
    //получили данные от сервера
    const product = {
      name: 'TV',
      price: 4000
    };
    
    resolve(product);
  }, 2000);
});

req.then((product) => {
  setTimeout(() => {
    product.status = 'order';
    console.log(product);
  }, 2000);
})


//ЕСЛИ req.then нужно обернуть в промис
const req = new Promise(function(resolve, reject) {
  setTimeout(() => {
    //отпправляем запрос на сервер
    console.log('Подготовка данных...');
  
    //получили данные от сервера
    const product = {
      name: 'TV',
      price: 4000
    };
    
    resolve(product);
  }, 2000);
});

// первый вариант
// req.then((product) => {
//   const req2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       product.status = 'order';
//       resolve(product);
//     }, 2000);
//   });

//   req2.then(data => {
//     console.log(data);
//   })
// })

//второй вариант
req.then((product) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      product.status = 'order';
      resolve(product);
    }, 2000);
  });
}).then(data => {
  console.log(data);
});

// возвращать можем не только промисы
req.then((product) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      product.status = 'order';
      resolve(product);
    }, 2000);
  });
}).then(data => {
  data.modify = true;
  return data;
}).then(dataAfter => {
  console.log(dataAfter);
});

// применяем reject, если ошибка. в конец ставим catch
req.then((product) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      product.status = 'order';
      reject();
    }, 2000);
  });
}).then(data => {
  data.modify = true;
  return data;
}).then(dataAfter => {
  console.log(dataAfter);
}).catch(() => {
  console.error('Произошла ошибка');
});

//есть ещё блок finally
req.then((product) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      product.status = 'order';
      resolve(product);
    }, 2000);
  });
}).then(data => {
  data.modify = true;
  return data;
}).catch(() => {
  console.error('Произошла ошибка');
}).finally(() => {
  console.log('FINALLY');
});


//есть ещё all и race
const test = time => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), time);
  })
}

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

//убеждаемся, что все наши промисы выполнены
Promise.all([test(1000), test(2000)]).then(() => {
  console.log('All')
});

//метод race выполняет действия когда только самый первый промис отработал
Promise.race([test(1000), test(2000)]).then(() => {
  console.log('All')
});