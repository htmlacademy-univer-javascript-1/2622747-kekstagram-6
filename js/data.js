import {getRandomArrayElement} from './utils.js';
import { getRandomInteger } from './utils.js';

const NAMES = [
  'Влад',
  'Денис',
  'Соня',
  'Даша',
  'Миша',
  'Ваня'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Отдых у воды',
  'Вперед на пляж',
  'Отдых у моря',
  'Отдыхаю на пляже',
  'Забавный обед',
  'Любимая машина',
  'Завтрак',
  'Освежающие напитки',
  'Самолет в небе',
  'Прихожая',
  'Идем отдыхать',
  'Классная машина',
  'Поужинали',
  'Котик',
  'Новые домашние тапки',
  'Голубое небо',
  'Выступление',
  'Ретро',
  'Классные тапки',
  'Пятизвездочный отель',
  'Любимый завтрак',
  'Закат на море',
  'Новый друг',
  'Крутейшие выступление',
  'Поход в джунгли'
];

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
