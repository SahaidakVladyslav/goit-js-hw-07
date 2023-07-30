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

const modalCloseEsc = (element) => {
  if (typeof element !== "undefined") {
    document.addEventListener('keydown', function (event) {
      const key = event.key;
      if (key === "Escape") {
        return element.close();
      }
    });
  }
};

const modalOpenPhoto = (event) => {
  event.preventDefault();
  if (event.target.classList.contains('gallery__image')) {
    const clickedImageAlt = event.target.getAttribute('alt');
    const clickedImageSrc = event.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${clickedImageSrc}" alt="${clickedImageAlt}"/>`);
    instance.show();
    modalCloseEsc(instance);
  } else {
    const pindsvin = basicLightbox.create(`<img src="./css/enPindcvin.jpg"/>`);
    pindsvin.show();
    modalCloseEsc(pindsvin);
  }
};


gallery.addEventListener('click', (event) => {
  modalOpenPhoto(event)
});



