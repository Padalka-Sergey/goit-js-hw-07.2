import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryRef = document.querySelector('.gallery');
const markup = galleryItems
  .map(
    ({ preview, description, original }) =>
      `<li class="gallery__item"><a class="gallery__link" href=${original}><img class="gallery__image" src=${preview} data-source=${original} alt=${description}/></a></li>`
  )
  .join('');

galleryRef.innerHTML = markup;

galleryRef.addEventListener('click', clickImageHandler);

function clickImageHandler(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    // console.log(evt.target.nodeName);
    return;
  }
  const instance = basicLightbox.create(`
    <img src=${evt.target.dataset.source} width="800" height="600">
`);

  instance.show();
  console.dir(evt.target);
}
