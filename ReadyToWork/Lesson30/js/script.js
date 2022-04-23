'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


//1) Удалить все рекламные блоки со страницы (правая часть сайта)
const promoAdv = document.querySelectorAll('.promo__adv img');

promoAdv.forEach(item => {
    item.remove();
});

//2) Изменить жанр фильма, поменять "комедия" на "драма"
const promoGenre = document.querySelector('.promo__genre');

promoGenre.textContent = 'Драма';

//3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img. Реализовать только при помощи JS
const promoBg = document.querySelector('.promo__bg');

promoBg.style.cssText = 'background: url("img/bg.jpg"); background-size: cover';

//4) Список фильмов на странице сформировать на основании данных из этого JS файла. Отсортировать их по алфавиту 
//5) Добавить нумерацию выведенных фильмов
const movieList = document.querySelector('.promo__interactive-list');
movieList.innerHTML = '';

movieDB.movies.sort();
// a = a + 'string' тоже самое, что a += 'string'
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i+1} ${film}
            <div class="delete"></div>
        </li>
    `;
});