'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };


    const promoAdv = document.querySelectorAll('.promo__adv img'),
          promoGenre = document.querySelector('.promo__genre'),
          promoBg = document.querySelector('.promo__bg'),
          movieList = document.querySelector('.promo__interactive-list');
    
    const deleteAdv = (arrgument) => {
        arrgument.forEach(item => {
            item.remove();
        });
    };

    deleteAdv(promoAdv);
    
    const makeChanges = () => {
        promoGenre.textContent = 'Драма';
    
        promoBg.style.cssText = 'background: url("img/bg.jpg"); background-size: cover';
    };

    makeChanges();

    function allmovies(films, parent) {
        parent.innerHTML = '';
        
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i+1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });
    }

    allmovies(movieDB.movies, movieList);

    const sortArr = (arr) => {
        arr.sort();
    };

    sortArr(movieDB.movies);

    /* 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
    новый фильм добавляется в список. Страница не должна перезагружаться.
    Новый фильм должен добавляться в movieDB.movies.
    Для получения доступа к значению input - обращаемся к нему как input.value;
    P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
    
    2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
    
    3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
    
    4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
    "Добавляем любимый фильм"
    
    5) Фильмы должны быть отсортированы по алфавиту */


    const addForm = document.querySelector('form.add'),
          addInput = document.querySelector('.adding__input');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const newFilm = addInput.value;
        movieDB.movies.push(newFilm);
        sortArr(movieDB.movies);
        allmovies(movieDB.movies, movieList);
        event.target.reset();
    });

});
