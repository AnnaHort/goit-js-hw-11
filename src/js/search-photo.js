
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
        return console.log("Sorry, there are no images matching your search query. Please try again.")
    };

    unsplashInstance.query = searchQuery;// змінюємо значення query для нового класу даємо йому значення інпуту  
    // console.log(searchQuery);

    unsplashInstance.fetchPhotos().then(data => {
        // console.log(data);
        if(!data.hits.length) {// якщо таких даних немає на сервері
            return console.log("Sorry, there are no images matching your search query. Please try again.")
        }

        galleryListEl.innerHTML = createGalleryCards(data.hits);
})
.catch(console.warn);

}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);







