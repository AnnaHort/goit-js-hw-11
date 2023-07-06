export class PixabayAPI {
    API_KEY = '38070095-9e6d535b4dc883ad57627f805';// особистий ключ до бібліотеки
    BASE_URL = 'https://pixabay.com/api/';// базова url адреса

 query = null;
 page = 1;

fetchPhotos() {
    return fetch(
        `${this.BASE_URL}?key=${this.API_KEY}&q=${this.query}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`)
    .then(response => {
    if(!response.ok) {
        throw new Error (response.status) // штучне створення виклику повернення помилки
    }
    return response.json() // повертаємо відповідь від сервера у читабельному форматі
    });
  }
}




