import { galleryItems } from './gallery-items.js';
// Change code below this line
const instance = basicLightbox.create(`
	<h1>Dynamic Content</h1>
	<p>You can set the content of the lightbox with JS.</p>
  <img src="" />
`);

const createGalleryItemMarkup = ({ preview, description, original }) => {
  return `<li class="gallery__item">
  <a
    class="gallery__link"
    href = '${original}'
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </li>`;
};
const galleryList = document.querySelector('.gallery');
const galleryMarkup = galleryItems.map(createGalleryItemMarkup).join('');
galleryList.insertAdjacentHTML('afterbegin', galleryMarkup);

console.log(galleryMarkup);
const galleryItem = document.querySelector('.gallery');
galleryItem.addEventListener('click', ongalleryItemClick);

function ongalleryItemClick(evt) {
  if (!evt.target.classList.contains('gallery__item')) {
    return;
  }
  evt.preventDefault();
  instance.show();
}
