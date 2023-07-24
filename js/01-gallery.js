import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems.length)
const markup = galleryItems.map(({ original, preview, description }) =>
    `<li>
    <a href="${original}">
    <img url="${preview}" alt="${description}" width="360px" height="200px">
    </a>
    </li>`).join("")
console.log(markup)
const body = document.querySelector(`body`)
body.insertAdjacentHTML("afterbegin", markup)


