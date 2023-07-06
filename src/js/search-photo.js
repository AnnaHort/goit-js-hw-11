
const formEl = document.querySelector('.search-form');// форма
const searchButtonEl = document.querySelector('.search-button');// пошук
const loadMoreButtonEl = document.querySelector('.load-more');// кнопка додаткового підвантаження зображень
const galerryEl = document.querySelector('.gallery');// галерея зображень

const inputEl = formEl.firstElementChild;// поле вводу

const handleSearchPhotoGalerry = (e) => {

e.preventDefault();

}

formEl.addEventListener('submit', handleSearchPhotoGalerry)




