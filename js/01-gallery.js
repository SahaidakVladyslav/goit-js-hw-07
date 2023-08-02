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
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  const clickedImageAlt = event.target.getAttribute('alt');
  const clickedImageSrc = event.target.dataset.source;
  let instance = basicLightbox.create(`<img src="${clickedImageSrc}" alt="${clickedImageAlt}"/>`, {
    onShow: (instance) => { document.addEventListener('keydown', OnEscPress) },
    onClose: (instance) => {
      document.removeEventListener('keydown', OnEscPress);
      instance = null; // Удаляем ссылку на экземпляр
    }
  });

  function OnEscPress(event) {
    if (event.key !== "Escape") {
      return;
    }
    instance.close(); // Закрываем модалку
  }

  instance.show();
};

gallery.addEventListener('click', modalOpenPhoto);