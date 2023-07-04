const API_KEY = '38070095-9e6d535b4dc883ad57627f805';// особистий ключ до бібліотеки


fetch(`https://pixabay.com/api/?key=${API_KEY}`)
// завжди у першому ./then перевіряємо статус відповіді і створюємо помилку щоб обробити невдалий запит на сервер
.then(response => {
if(!response.ok) {
    throw new Error (response.status)
}
return response.json() // повертаємо відповідь від сервера у читабельному форматі
})
.then(data => {

})
.catch(console.error);
