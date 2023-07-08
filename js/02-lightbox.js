import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector(`.gallery`);
console.log(gallery);
// =======================


const markup = galleryItems
    .map(({ preview, original, description, index })  => `<li class="gallery__item">
   <a class="gallery__link" href="${original}" data-lightbox="lbox"><img class="gallery__image" src="${preview}" alt="${description}"/></a></li>`)
    .join("");

gallery.insertAdjacentHTML('beforeend', markup);
console.log(gallery);



const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
 
