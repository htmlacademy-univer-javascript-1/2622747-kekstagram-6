import { generatePhotos } from './photosDataGeneration.js';

const picturesContainer = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content;
const fragment = document.createDocumentFragment();

const photos = generatePhotos();

photos.forEach(({url, description, likes, comments}) => {
  const photoElement = photoTemplate.cloneNode(true);

  const img = photoElement.querySelector('.picture__img');
  img.src = url;
  img.alt = description;

  photoElement.querySelector('.picture__likes').textContent = likes;

  photoElement.querySelector('.picture__coments').textContent = comments.length;

  fragment.appendChild(photoElement);
});

picturesContainer.appendChild(fragment);


