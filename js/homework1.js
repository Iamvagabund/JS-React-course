"use strict";
// Проверить, чтобы все работало без ошибок в консоли */

//1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:'Сколько фильмов вы уже посмотрели?'
const numberOffFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

/*2) Создать объект personalMovieDB и в него поместить такие свойства:
- count - сюда передается ответ на первый вопрос
- movies - в это свойство поместить пустой объект
- actors - тоже поместить пустой объект
- genres - сюда поместить пустой массив
- privat - в это свойство поместить boolean(логическое) значение false */
const personalMovieDB = {
  count: numberOffFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

/* 3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    } */
// const questionFilmFirst = prompt('Один из последних просмотренных фильмов?', ''),
//       questionRateFirst = +prompt('На сколько оцените его?', ''),
//       questionFilmSecond = prompt('Один из последних просмотренных фильмов?', ''),
//       questionRateSecond = +prompt('На сколько оцените его?', '');

// personalMovieDB.movies[questionFilmFirst] = questionRateFirst;
// personalMovieDB.movies[questionFilmSecond] = questionRateSecond;

// console.log(personalMovieDB);

//HOMEWORK 015 script.js
/*1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
  2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять
  3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"*/
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

if (personalMovieDB.count <= 10) {
  console.log('Просмотрено довольно мало фильмов. Это меньше 10-ти');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30 ) {
  console.log('Вы классический зритель. Это между 10 и 30');
} else if (personalMovieDB.count >= 30) {
  console.log('Вы киноман это больше 30');
} else {
  console.log('Произошла ошибка');
}

// console.log(personalMovieDB);

