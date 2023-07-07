import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(`.gallery`);
console.log(gallery);



const markup = galleryItems
  .map((galleryItem, index) => `<li class="gallery__item"><a class="gallery__link" href="${galleryItem.original}"><img class="gallery__image" data-index="${index}" src="${galleryItem.preview}" data-source="${galleryItem.original}" alt="${galleryItem.description}"/></a></li>`)
    .join("");
  
gallery.insertAdjacentHTML("afterbegin", markup);
 
console.log(gallery);


const handleClick = (event) => {
  const { target } = event;
    event.preventDefault();
  if (!target.tagName === "IMG") {
    return;
  }
  console.log(target);    
  const { source } = target.dataset;
  const { index } = target.dataset;
  console.log(target.tagName, index, source); 
    
// const imgIndex = target.dataset.index;
// console.log(imgIndex);
// console.log(galleryItems[imgIndex].original); 
        
 const instance = basicLightbox.create(`<img src="${source}" width="800" height="600">`);
  instance.show(); 
  
  // Закрытие модалки клавиш. 'Escape'
document.addEventListener("keydown", keydownEscape); 
      
function keydownEscape(evt) {
        console.log("Keydown: ", evt.key);
  if (evt.key === 'Escape' || !instance) {
           console.log("Yes! ");
          instance.close();
          // instance = null;
        }; 
      };       
};

gallery.addEventListener("click", handleClick);  


   
      
        

  
    
     
