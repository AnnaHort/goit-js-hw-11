import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { PixabayAPI } from "./pixabay-api";
import createGalleryCards from './createPhotoGallery';

const searchFormEl = document.querySelector('.search-form');
const galleryListEl = document.querySelector('.gallery');
const loadMoreButtonEl = document.querySelector('.load-more');
const inputEl = searchFormEl.firstElementChild;

const unsplashInstance = new PixabayAPI();// створюємо незалежну копію класу 

const handleSearchFormSubmit = event => {
    event.preventDefault();
    const searchQuery = inputEl.value.trim();// значення інпуту без пробілів

    if (!searchQuery) {// якщо інпут пустий 
        inputEl.value = '';
        return Notify.failure("Sorry, there are no images matching your search query. Please try again.")
    };

    unsplashInstance.query = searchQuery;// змінюємо значення query для нового класу даємо йому значення інпуту  
    // console.log(searchQuery);
    unsplashInstance.page = 1;

    unsplashInstance.fetchPhotos().then(data => {
        console.log(data);
        if(!data.hits.length) {// якщо таких даних немає на сервері
            inputEl.value = '';
            return Notify.failure("Sorry, there are no images matching your search query. Please try again.") 
        }

        galleryListEl.innerHTML = createGalleryCards(data.hits);
        loadMoreButtonEl.classList.remove('is-hidden');
        loadMoreButtonEl.disabled = false;

        inputEl.value = '';
        inputEl.blur();
})
.catch(console.warn);
};


const handleLoadMoreButtonClick = () => {
    unsplashInstance.page += 1;

    unsplashInstance.fetchPhotos()
    .then(data => {

        // if( unsplashInstance.hits === data.totalHits.length) {
        //     loadMoreButtonEl.classList.add('is-hidden');
        //     Notify.info("We're sorry, but you've reached the end of search results.") 
        // }

        const allImgPages = Math.ceil(data.totalHits / 40);
        console.log(allImgPages);
        if (unsplashInstance.page === allImgPages) {
          loadMoreButtonEl.classList.add('is-hidden');
          Notify.info("We're sorry, but you've reached the end of search results.");
        }
        
        galleryListEl.insertAdjacentHTML('beforeend', createGalleryCards(data.hits))
    })
    .catch(console.warn);
    loadMoreButtonEl.blur();
};

searchFormEl.addEventListener('submit', handleSearchFormSubmit);
loadMoreButtonEl.addEventListener('click', handleLoadMoreButtonClick);







