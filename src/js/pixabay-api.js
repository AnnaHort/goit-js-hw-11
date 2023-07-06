const API_KEY = '38070095-9e6d535b4dc883ad57627f805';// особистий ключ до бібліотеки
const BASE_URL = 'https://pixabay.com/api';// базова url адреса

const inputEl = document.querySelector('[name="searchQuery"]');// елемент input

fetch(`${BASE_URL}/?key=${API_KEY}&q=${inputEl.value}&image_type=photo&orientation=horizontal&safeswarch=true`)
.then(response => {
if(!response.ok) {
    throw new Error (response.status) // штучне створення виклику повернення помилки
}
return response.json() // повертаємо відповідь від сервера у читабельному форматі
})
.then(data => {
    console.log(data)
})
.catch(error => console.log(error.status));
