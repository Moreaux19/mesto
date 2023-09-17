import Card from './Card.js';
// import Popup from './Popup';

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

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  disabledButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__error'
};

// POPUP CLASS
// функция закрытия всех попапов по нажатию кнопки закрытия
closeButton.forEach(button => {
  const buttonsPopup = button.closest('.popup'); // нашли родителя с нужным классом
  button.addEventListener('click', () => closePopup(buttonsPopup)); // закрыли попап
});

// POPUP EDIT CLASS
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

//POPUP ADD CLASS
// открытие окна добавления изображения
addPopupButton.addEventListener('click', function () {
  openPopup(addPopup);
});

// добавление картинки
popupElementForm.addEventListener('submit', function (event) {
  event.preventDefault();
  renderElement({ name: imageNameInput.value, link: imageUrlInput.value }, elements);
  popupElementForm.reset();
  closePopup(addPopup);
});

//CARD CLASS
// создание сетки изображений
function createElement(value) {
  // const newElement = element.cloneNode(true);
  // const text = newElement.querySelector('#element-text');
  // text.textContent = value.name;
  // const image = newElement.querySelector('#element-image');
  // image.src = value.link;
  // image.alt = `Изображение: ${value.name}`;

  // // открытие изображения
  // image.addEventListener('click', function () {
  //   openPopup(imagePopup);

  //   popupFullImage.src = image.src;
  //   popupFullImage.alt = image.alt;
  //   popupImageText.textContent = text.textContent;
  // });

  return newElement;
}

// функция передачи сетки изображений в код
function renderElement(data, container) {
  const card = new Card(data);
  container.prepend(card.getView());
}

// загрузка массива
initialCards.forEach(function (item) {
  renderElement(item, elements);
});

enableValidation(validationConfig);
