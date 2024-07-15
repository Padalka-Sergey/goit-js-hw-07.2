import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const markup = createGalleryItems(galleryItems);

galleryRef.innerHTML = markup;

galleryRef.addEventListener('click', clickImageHandler);

function createGalleryItems(items) {
  return items
    .map(
      ({ preview, description, original }) =>
        `<li class="gallery__item"><a class="gallery__link" href=${original}><img class="gallery__image" src=${preview} alt=${description}/></a></li>`
    )
    .join('');
}

function clickImageHandler(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  lightbox.open();
}
