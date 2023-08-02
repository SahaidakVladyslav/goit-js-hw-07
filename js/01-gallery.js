import { galleryItems } from './gallery-items.js';
const gallery = document.querySelector('.gallery');
const markup = galleryItems.map(({ original, preview, description }) =>
  `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
        data-source="${original}"
        max-width="360px"
        max-height="200px"
      />
    </a>
  </div>`).join('');


gallery.insertAdjacentHTML('beforeend', markup);


const modalOpenPhoto = (event) => {
  event.preventDefault();
  if (event.target.classList.contains('gallery__image')) {
    const clickedImageAlt = event.target.getAttribute('alt');
    const clickedImageSrc = event.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${clickedImageSrc}" alt="${clickedImageAlt}"/>`, {
      onShow: (instance) => { },
    });
    instance.show(() => console.log('lightbox now visible'));
  }
  return;
};


gallery.addEventListener('click', (event) => {
  modalOpenPhoto(event)
});




