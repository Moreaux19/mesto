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

const image = document.querySelector('#element-image');
const text = document.querySelector('#element-text');
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
