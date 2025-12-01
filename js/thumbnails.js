import { generatePhotos } from './photos-data.js';
import { openBigPicture } from './big-picture.js';


const picturesContainerElement = document.querySelector('.pictures');
const photoTemplateElement = document.querySelector('#picture').content;
const fragment = document.createDocumentFragment();

const photos = generatePhotos();

photos.forEach((photo) => {
  const photoElement = photoTemplateElement.cloneNode(true);

  const imgElement = photoElement.querySelector('.picture__img');
  imgElement.src = photo.url;
  imgElement.alt = photo.description;

  photoElement.querySelector('.picture__likes').textContent = photo.likes;
  photoElement.querySelector('.picture__comments').textContent = photo.comments.length;

  imgElement.addEventListener('click', () => openBigPicture(photo));

  fragment.appendChild(photoElement);
});

picturesContainerElement.appendChild(fragment);
