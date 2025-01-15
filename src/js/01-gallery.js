import { galleryItems } from './gallery-items.js';

// Change code below this line
let instance = null;
const galleryRef = document.querySelector('.gallery');
const markup = createGalleryItems(galleryItems);

galleryRef.innerHTML = markup;

galleryRef.addEventListener('click', clickImageHandler);

function createGalleryItems(items) {
  return items
    .map(
      ({ preview, description, original }) =>
        `<li class="gallery__item"><a class="gallery__link" href=${original}><img class="gallery__image" src=${preview} data-source=${original} alt=${description}/></a></li>`
    )
    .join('');
}

function clickImageHandler(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  instance = basicLightbox.create(`
    <img src=${evt.target.dataset.source} width="800" height="600">
`);
  instance.show(() => document.addEventListener('keydown', escCloseHandler));
}

function escCloseHandler(evt) {
  console.log('Слушатель ESC');
  if (evt.code === 'Escape') {
    instance.close(() =>
      document.removeEventListener('keydown', escCloseHandler)
    );
  }
  return;
}
