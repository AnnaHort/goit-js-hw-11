
import { PixabayAPI } from "./pixabay-api";
import createGalleryCards from './createPhotoGallery';

const searchFormEl = document.querySelector('.search-form');
const galleryListEl = document.querySelector('.gallery');
const loadMoreButtonEl = document.querySelector('.load-more');

const unsplashInstance = new PixabayAPI();

const handleSearchFormSubmit = event => {
    event.preventDefault();

}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);







