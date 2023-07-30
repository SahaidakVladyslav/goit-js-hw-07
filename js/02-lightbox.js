import { galleryItems } from './gallery-items.js';
var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
console.log(lightbox);

const galleryEl = document.querySelector('.gallery');
const markup = galleryItems.map(({ original, preview, description }) =>
    ` <li class="gallery__item">
     <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
</li>`).join('');


galleryEl.insertAdjacentHTML('beforeend', markup);


const modalOpenPhoto = (event) => {
    event.preventDefault();

    let gallery = new SimpleLightbox('.gallery a', {
        captions: true,
        captionDelay: 250,
        fadeSpeed: 250,
        captionSelector: "img",
        captionsData: 'alt',
        captionPosition: 'bottom',
    });
    gallery.on('show.simplelightbox');
};


galleryEl.addEventListener('click', (event) => {
    modalOpenPhoto(event)
});



