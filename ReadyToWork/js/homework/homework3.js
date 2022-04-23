"use strict";

let numberOffFilms;

function start() {
  numberOffFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOffFilms == '' || numberOffFilms == null || isNaN(numberOffFilms)) {
    numberOffFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOffFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const questionFilm = prompt('Один из последних просмотренных фильмов?', ''),
          questionRate = +prompt('На сколько оцените его?', '');
  
    if (questionFilm != null && questionRate != null && questionFilm != '' && questionRate != '' && questionFilm.length < 50) {
      personalMovieDB.movies[questionFilm] = questionRate;
      console.log('DONE');
    } else {
      console.log('ERROR');
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count <= 10) {
    console.log('Просмотрено довольно мало фильмов. Это меньше 10-ти');
  } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30 ) {
    console.log('Вы классический зритель. Это между 10 и 30');
  } else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман это больше 30');
  } else {
    console.log('Произошла ошибка');
  }
}

detectPersonalLevel();

// Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы
// function showMyDB() {
//   if (personalMovieDB.privat === false) {
//     console.log(personalMovieDB);
//   }
// }

// showMyDB();

function showMyDB (hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

// Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres
function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
  }
}

writeYourGenres();