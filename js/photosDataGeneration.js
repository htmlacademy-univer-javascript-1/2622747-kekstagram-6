import {getRandomArrayElement, getRandomInteger} from './utils.js';
import { NAMES, MESSAGES, DESCRIPTIONS } from './consts.js';

const COUNT_PHOTOS = 25;

const getRandomMessage = (messages) => {
  const countMessages = getRandomInteger(1, 2);
  if (countMessages === 1) {
    return getRandomArrayElement(messages);
  }
  const firstMessage = getRandomArrayElement(messages);
  let secondMessage = getRandomArrayElement(messages);
  while (firstMessage === secondMessage) {
    secondMessage = getRandomArrayElement(messages);
  }
  return `${firstMessage} ${secondMessage}`;
};

let commentId = 1;
const createComment = () => ({
  id: commentId++,
  avatar: `img/avatar-${getRandomInteger(1,6)}.svg`,
  message: getRandomMessage(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const generateComments = () => Array.from({length: getRandomInteger(0, 30)}, createComment);

const createPhoto = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: DESCRIPTIONS[id-1],
  likes: getRandomInteger(15, 200),
  comments: generateComments()
});

const generatePhotos = () => Array.from({length: COUNT_PHOTOS},  (_, index) => createPhoto(index + 1));
export{generatePhotos};
