'use strict';
    /* 1) + Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
    новый фильм добавляется в список. Страница не должна перезагружаться.
    Новый фильм должен добавляться в movieDB.movies.
    Для получения доступа к значению input - обращаемся к нему как input.value;
    
    2) + Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
    
    3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
    
    4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
    "Добавляем любимый фильм"
    
    5) + Фильмы должны быть отсортированы по алфавиту */
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
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          ourCheckbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
            event.preventDefault();
    
            let newFilm = addInput.value.toUpperCase();
            const favorite = ourCheckbox.checked;
    
            if (newFilm) {
    
                if (newFilm.length > 21) {
                    newFilm = `${newFilm.substring(0, 22)}...`;
                }
                if (favorite) {
                    console.log('Добавляем любимый фильм');
                }
                movieDB.movies.push(newFilm);
                sortArr(movieDB.movies);
        
                creatMovieList(movieDB.movies, movieList);
            }
    
            event.target.reset();
        });

    const deleteAdv = (arrgument) => {
        arrgument.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        promoGenre.textContent = 'Драма';
    
        promoBg.style.cssText = 'background: url("img/bg.jpg"); background-size: cover';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function creatMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i+1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                creatMovieList(films, parent);
            });
        });
    }

    deleteAdv(promoAdv);
    makeChanges();
    creatMovieList(movieDB.movies, movieList);

});
