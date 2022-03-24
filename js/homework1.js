"use strict";

alert('Homework1');

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

//1
const numberOffFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


//2
const personalMovieDB = {
  count: numberOffFilms,
  movies: {

  },
  actors: {},
  genres: [],
  privat: false
};

//3
const questionFilmFirst = prompt('Один из последних просмотренных фильмов?', ''),
      questionRateFirst = +prompt('На сколько оцените его?', ''),
      questionFilmSecond = prompt('Один из последних просмотренных фильмов?', ''),
      questionRateSecond = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[questionFilmFirst] = questionRateFirst;
personalMovieDB.movies[questionFilmSecond] = questionRateSecond;

console.log(personalMovieDB);