export const editPopupButton = document.querySelector('.profile__edit-button');
export const addPopupButton = document.querySelector('.profile__add-button');
export const closeButton = document.querySelectorAll('.popup__close-button');
export const editPopup = document.querySelector('#popup-profile');
export const popupProfileForm = editPopup.querySelector('#popup-profile-form');
export const nameInput = popupProfileForm.querySelector('#name-input');
export const descriptionInput = popupProfileForm.querySelector('#description-input');
export const addPopup = document.querySelector('#popup-element');
export const popupElementForm = addPopup.querySelector('#popup-element-form');
export const imageNameInput = popupElementForm.querySelector('#image-name-input');
export const imageUrlInput = popupElementForm.querySelector('#image-url-input');
export const elements = document.querySelector('.elements');
export const image = document.querySelector('#element-image');
export const text = document.querySelector('#element-text');

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  disabledButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__error'
};

export const initialCards = [
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
