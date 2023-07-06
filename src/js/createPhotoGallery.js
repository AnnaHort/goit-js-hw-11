export default function createPhotoGallery(arr) {
    return arr
      .map(
        ({
          tags,
          largeImageURL,
          webformatURL,
          likes,
          views,
          comments,
          downloads,
        }) => `
          
          <div class="photo-card">
          <a class="gallery__link" href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" loading="lazy"/>
          </a>
    
          <div class="info">
            <p class="info-item">
              <b class="info-desc"><span class = "info-name" >Likes ${likes}</span> <span class = "info-value">${likes}</span></b>
            </p>
            <p class="info-item">
              <b class="info-desc"><span class = "info-name" >Views ${views}</span> <span class = "info-value" >${views}</span></b>
            </p>
            <p class="info-item">
              <b class="info-desc"><span class = "info-name" >Comments ${comments}</span> <span class = "info-value">${comments}</span></b>
            </p>
            <p class="info-item">
              <b class="info-desc"><span class = "info-name" >Downloads ${downloads}</span> <span class = "info-value">${downloads}</span></b>
            </p>
          </div>
         
        </div>`
      )
      .join('');
  }