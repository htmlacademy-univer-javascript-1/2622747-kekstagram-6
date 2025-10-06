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

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getRandomMessage = (messages) => {
  const countMessages = getRandomInteger(1, 2);
  if (countMessages === 1) {
    return getRandomArrayElement(messages);
  }
  const first = getRandomArrayElement(messages);
  let second = getRandomArrayElement(messages);
  while (first === second) {
    second = getRandomArrayElement(messages);
  }
  return `${first} ${second}`;
};

let commentId = 1;
const createComment = () => ({
  id: commentId++,
  avatar: `img/avatar-${getRandomInteger(1,6)}.svg`,
  message: getRandomMessage(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const generateComments = () => {
  const count = getRandomInteger(0, 30);
  const comments = [];
  for (let i = 0; i < count; i++) {
    const comment = createComment();
    comments.push(comment);
  }
  return comments;
};

const createPhoto = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: DESCRIPTIONS[id-1],
  likes: getRandomInteger(15, 200),
  comments: generateComments()
});

const generatePhotos = (count) => {
  const photos = [];
  for (let i = 1; i <= count; i++) {
    const photo = createPhoto(i);
    photos.push(photo);
  }
  return photos;
};

const arrayPhotos = generatePhotos(COUNT_PHOTOS);
// eslint-disable-next-line no-console
console.log(arrayPhotos);

