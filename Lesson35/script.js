'use strict';

const script = document.createElement('script');
script.src = 'test.js';
script.async = false; // скрипт будет себя вести как обычно как будто помещён просто в хтмл
document.body.append(script); // начнёт загружаться после того как будет добавлена эта строчка. ведут себя как есинг. никого не ждут.


function loadScript(src) {
  const script = document.createElement('script');
script.src = src;
script.async = false; 
document.body.append(script);
}

loadScript('test.js');
loadScript('some.js'); // выполняется друг за другом