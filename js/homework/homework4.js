/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
  
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },

  rememberMyFilms: function() {
    for (let i = 0; i < 2; i++) {
      const questionFilm = prompt('Один из последних просмотренных фильмов?', ''),
            questionRate = +prompt('На сколько оцените его?', '');
    
      if (questionFilm != null && questionRate !== null && questionFilm != '' && questionRate != '' && questionFilm.length < 50) {
        personalMovieDB.movies[questionFilm] = questionRate;
        console.log('DONE');
      } else {
        console.log('ERROR');
        i--;
      }
    }
  },

  detectPersonalLevel: function() {
    if (personalMovieDB.count <= 10) {
      console.log('Просмотрено довольно мало фильмов. Это меньше 10-ти');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30 ) {
      console.log('Вы классический зритель. Это между 10 и 30');
    } else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман это больше 30');
    } else {
      console.log('Произошла ошибка');
    }
  },

  showMyDB: function(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },

  toggleVisibleMyDB: function() {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },

  writeYourGenres: function() {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');

      if(genre == '' || genre == null) {
        console.log('Your entered an empty string or entered nothing');
        i--;
      } else {
        personalMovieDB.genres[i-1] = genre;
      }
    }

    personalMovieDB.genres.forEach((item, i ) => {
      console.log(`Любимый жанр ${i+1} - это ${item}`);
    });

    // for (let i = 1; i < 2; i++) {
    //   let genre = prompt('Введите Ваши любимые жанры через запятую', '').toLowerCase();
    //     if (genre == '' || genre == null) {
    //       console.log('Your entered an empty string or entered nothing');
    //       i--;
    //     } else {
    //       personalMovieDB.genres = genre.split(', ');
    //       personalMovieDB.genres.sort();
    //     }
    // }
  }
};