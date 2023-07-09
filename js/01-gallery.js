import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(`.gallery`);
// console.log(gallery);



const markup = galleryItems
  .map((galleryItem, index) => `<li class="gallery__item"><a class="gallery__link" href="${galleryItem.original}"><img class="gallery__image" data-index="${index}" src="${galleryItem.preview}" data-source="${galleryItem.original}" alt="${galleryItem.description}"/></a></li>`)
    .join("");
  
gallery.insertAdjacentHTML("afterbegin", markup);
 
// console.log(gallery);


const handleClick = (event) => {
  const { target } = event;
    event.preventDefault();
  if (!target.nodName === "IMG") {
    return;
  }
  // console.log(target);    
  const { source } = target.dataset;
  const { index } = target.dataset;
  // console.log(target.tagName, index, source); 
    
// const imgIndex = target.dataset.index;
// console.log(imgIndex);
// console.log(galleryItems[imgIndex].original); 
        
  const instance = basicLightbox.create(`<img src="${source}" width="800" height="600">`,
     
    {
        onShow: () => {
          document.addEventListener('keydown', keydownEscape);
        console.log('onShow');
        },
        onClose: () => {
          document.removeEventListener('keydown', keydownEscape);
          console.log('onClose');
        },
    });
     instance.show();
    
    
  
  //  Закрытие модалки клавиш. 'Escape'
       
function keydownEscape(evt) {
        console.log("Keydown: ", evt.code);
  if (evt.code === 'Escape') {
          instance.close();
        }; 
      };   
};
 
gallery.addEventListener("click", handleClick);  

  
   
    







// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// const gallery = document.querySelector(`.gallery`);
// // console.log(gallery);



// const markup = galleryItems
//   .map((galleryItem, index) => `<li class="gallery__item"><a class="gallery__link" href="${galleryItem.original}"><img class="gallery__image" data-index="${index}" src="${galleryItem.preview}" data-source="${galleryItem.original}" alt="${galleryItem.description}"/></a></li>`)
//     .join("");
  
// gallery.insertAdjacentHTML("afterbegin", markup);
 
// // console.log(gallery);


// const handleClick = (event) => {
//   const { target } = event;
//     event.preventDefault();
//   if (!target.nodName === "IMG") {
//     return;
//   }
//   console.log(target);    
//   const { source } = target.dataset;
//   const { index } = target.dataset;
//   console.log(target.tagName, index, source); 
    
// // const imgIndex = target.dataset.index;
// // console.log(imgIndex);
// // console.log(galleryItems[imgIndex].original); 
        
//   const instance = basicLightbox.create(`<img src="${source}" width="800" height="600">`);
//   //   {
  
// 	// 	onShow: (instance) => window.addEventListener('onShow', instance),
// 	// 	onClose: (instance) => window.removeEventListener('onClose', instance)
// 	// } );
//   //  instance.show((instance) => console.log('finished show()', instance));
//    instance.show(); 
  
//   //  Закрытие модалки клавиш. 'Escape'
//  document.addEventListener("keydown", keydownEscape); 
      
// function keydownEscape(evt) {
//         console.log("Keydown: ", evt.code);
//   if (evt.code === 'Escape' || !instance) {
//           instance.close();
//           // instance = null;
//         }; 
//       };       
// };

// gallery.addEventListener("click", handleClick);  
        

  
    
     
