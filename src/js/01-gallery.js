import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const markup = galleryItems
  .map(
    galleryItem =>
      `<li class="gallery__item"><a class="gallery__link"><img class="gallery__image" src=${galleryItem.preview} alt=${galleryItem.description}/></a></li>`
  )
  .join('');

galleryRef.innerHTML = markup;
console.log(markup);
