import { resetDesign } from './photo-editing.js';

const uploadInputElement = document.querySelector('#upload-file');
const overlayElement = document.querySelector('.img-upload__overlay');
const bodyElement = document.body;
const closeButtonElement = document.querySelector('.img-upload__cancel');
const hashtagsInputElement = document.querySelector('.text__hashtags');
const descriptionInputElement = document.querySelector('.text__description');
const formElement = document.querySelector('.img-upload__form');

const pristine = new Pristine(formElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error',
});

const openForm = () => {
  resetDesign();
  overlayElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

  document.addEventListener('keydown', onEscPress);
};

uploadInputElement.addEventListener('change', () => {
  if (uploadInputElement.files.length > 0) {
    openForm();
  }
});

const resetForm = () => {
  formElement.reset();
  pristine.reset();
  uploadInputElement.value = '';
};

const closeForm = () => {
  overlayElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscPress);
  resetForm();
};

closeButtonElement.addEventListener('click', closeForm);

function onEscPress(evt) {
  if (evt.key === 'Escape') {
    if (document.activeElement === hashtagsInputElement
      || document.activeElement === descriptionInputElement) {
      return;
    }
    closeForm();
  }
}

formElement.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

const validateComment = (value) => value.length <= 140;

pristine.addValidator(
  descriptionInputElement,
  validateComment,
  'Комментарий не должен быть длиннее 140 символов'
);


const validateHashtags = (value) => {

  const hashtagsRegex = /^#[a-zA-Zа-яА-Я0-9]{1,19}$/;

  if (!value.trim()) {
    return true; }

  const tags = value.trim().split(/\s+/);

  if (tags.length > 5) {
    return false; }

  const lower = tags.map((t) => t.toLowerCase());
  if (new Set(lower).size !== tags.length) {
    return false; }

  return tags.every((tag) => hashtagsRegex.test(tag));
};

const hashtagsErrorMessage = (value) => {
  const hashtagsRegex = /^#[a-zA-Zа-яА-Я0-9]{1,19}$/;

  const tags = value.trim().split(/\s+/);

  if (tags.length > 5) {
    return 'Не более 5 хэштегов'; }

  const lower = tags.map((t) => t.toLowerCase());
  if (new Set(lower).size !== lower.length) {
    return 'Хэштеги повторяются'; }

  if (!tags.every((tag) => hashtagsRegex.test(tag))) {
    return 'Неверный формат хэштега';
  }

  return 'Ошибка в хэштегах';
};

pristine.addValidator(
  hashtagsInputElement,
  validateHashtags,
  hashtagsErrorMessage
);
