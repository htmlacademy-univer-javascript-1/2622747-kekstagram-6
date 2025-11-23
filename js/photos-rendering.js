import { generatePhotos } from './photos-data-generation.js';

const picturesContainerElement = document.querySelector('.pictures');
const photoTemplateElement = document.querySelector('#picture').content;
const fragment = document.createDocumentFragment();

const photos = generatePhotos();

photos.forEach(({url, description, likes, comments}) => {
  const photoElement = photoTemplateElement.cloneNode(true);

  const imgElement = photoElement.querySelector('.picture__img');
  imgElement.src = url;
  imgElement.alt = description;

  photoElement.querySelector('.picture__likes').textContent = likes;

  photoElement.querySelector('.picture__coments').textContent = comments.length;

  fragment.appendChild(photoElement);
});

picturesContainerElement.appendChild(fragment);
