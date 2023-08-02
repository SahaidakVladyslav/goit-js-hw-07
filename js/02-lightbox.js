import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');
const markup = galleryItems.map(({ original, preview, description }) =>
    ` <li class="gallery__item">
     <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
</li>`).join('');


galleryEl.insertAdjacentHTML('beforeend', markup);

let gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    fadeSpeed: 250,
    captionSelector: "img",
    captionsData: 'alt',
    captionPosition: 'bottom',
});

