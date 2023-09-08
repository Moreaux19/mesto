import Card from './Card.js';

const editPopupButton = document.querySelector('.profile__edit-button');
const nameProfile = document.querySelector('.profile__name');
const descriptionProfile = document.querySelector('.profile__description');
const editPopup = document.querySelector('#popup-profile');
const popupProfileForm = editPopup.querySelector('#popup-profile-form');
const nameInput = popupProfileForm.querySelector('#name-input');
const descriptionInput = popupProfileForm.querySelector('#description-input');

const addPopupButton = document.querySelector('.profile__add-button');
const addPopup = document.querySelector('#popup-element');
const popupElementForm = addPopup.querySelector('#popup-element-form');
const imageNameInput = popupElementForm.querySelector('#image-name-input');
const imageUrlInput = popupElementForm.querySelector('#image-url-input');

const template = document.querySelector('#element-template').content;
const elements = document.querySelector('.elements');
const element = template.querySelector('.element');

const imagePopup = document.querySelector('#popup-image');
const popupFullImage = imagePopup.querySelector('.popup__full-image');
const popupImageText = imagePopup.querySelector('.popup__image-text');
const closeButton = document.querySelectorAll('.popup__close-button');
const popupClass = document.querySelectorAll('.popup');

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  disabledButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__error'
};

// функция закрытия всех попапов по нажатию кнопки закрытия
closeButton.forEach(button => {
  const buttonsPopup = button.closest('.popup'); // нашли родителя с нужным классом
  button.addEventListener('click', () => closePopup(buttonsPopup)); // закрыли попап
});

// функция открытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
  window.addEventListener('keydown', escapeButtonClose);
  popup.addEventListener('click', overlayZoneClose);
}

// функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  window.removeEventListener('keydown', escapeButtonClose);
  popup.removeEventListener('click', overlayZoneClose);
}

// функция закрытия попапа по клавише Esc
function escapeButtonClose(evt) {
  const popup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape' && popup) {
    closePopup(popup);
  }
}

// функция закрытия попапа по клику на оверлей
function overlayZoneClose(evt) {
  const popup = evt.target;
  if (popup === evt.currentTarget) {
    closePopup(popup);
  }
}

// открытие окна редактирования профиля
editPopupButton.addEventListener('click', function () {
  nameInput.value = nameProfile.textContent;
  descriptionInput.value = descriptionProfile.textContent;
  openPopup(editPopup);
});

// редактирование профиля
popupProfileForm.addEventListener('submit', function (event) {
  event.preventDefault();

  nameProfile.textContent = nameInput.value;
  descriptionProfile.textContent = descriptionInput.value;
  closePopup(editPopup);
});

// открытие окна добавления изображения
addPopupButton.addEventListener('click', function () {
  openPopup(addPopup);
});

// создание сетки изображений
function createElement(value) {
  const newElement = element.cloneNode(true);
  const text = newElement.querySelector('#element-text');
  text.textContent = value.name;
  const image = newElement.querySelector('#element-image');
  image.src = value.link;
  image.alt = `Изображение: ${value.name}`;

  // удаление изображения
  const deleteElementButton = newElement.querySelector('.element__trash-button');
  deleteElementButton.addEventListener('click', function () {
    newElement.remove();
  });

  // кнопка лайка
  const likeElementButton = newElement.querySelector('.element__button');
  likeElementButton.addEventListener('click', function () {
    likeElementButton.classList.toggle('element__button_active');
  });

  // открытие изображения
  image.addEventListener('click', function () {
    openPopup(imagePopup);

    popupFullImage.src = image.src;
    popupFullImage.alt = image.alt;
    popupImageText.textContent = text.textContent;
  });

  return newElement;
}

// функция передачи сетки изображений в код
function renderElement(data, container) {
  const newElement = createElement(data);
  const card = new Card(data);
  container.prepend(card.getView());
}

// function renderElement(data, container) {
//   const newElement = createElement(data);
//   container.prepend(newElement);
// }

// загрузка массива
initialCards.forEach(function (item) {
  renderElement(item, elements);
});

// добавление картинки
popupElementForm.addEventListener('submit', function (event) {
  event.preventDefault();
  renderElement({ name: imageNameInput.value, link: imageUrlInput.value }, elements);
  popupElementForm.reset();
  closePopup(addPopup);
});

enableValidation(validationConfig);
