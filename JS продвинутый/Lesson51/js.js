'use strict';

const person = {
  name: 'Alex',
  tel: '+38096323232'
};

console.log(JSON.stringify(person)); // превращаем обьект в структуру JSON для отправки на сервер


// когда с сервера приходит файл JSON и нам нужно превратить в обычный обьект
console.log(JSON.parse(JSON.stringify(person)));


const persons = {
  name: 'Alex',
  tel: '+38096323232',
  parents: {
    mom: 'Olga',
    dad: 'Mike'
  }
};
//делаю глубокую копию обьекта
const clone = JSON.parse(JSON.stringify(persons));
clone.parents.mom = 'Ann';
console.log(persons);
console.log(clone);