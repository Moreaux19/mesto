export const elements = document.querySelector('.elements');
export const editPopupButton = document.querySelector('.profile__edit-button');
export const addPopupButton = document.querySelector('.profile__add-button');
export const editPopup = document.querySelector('#popup-profile');
export const popupProfileForm = editPopup.querySelector('#popup-profile-form');
export const nameInput = popupProfileForm.querySelector('#name-input');
export const descriptionInput = popupProfileForm.querySelector('#description-input');
export const addPopup = document.querySelector('#popup-element');
export const popupAddCardForm = addPopup.querySelector('#popup-element-form');
export const profileAvatar = document.querySelector('#profile-avatar');
export const avatarPopup = document.querySelector('#popup-edit-avatar');
export const avatarForm = avatarPopup.querySelector('#avatar-form');

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

export const optionsApi = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-77',
  headers: {
    authorization: '6509c90e-d66c-4b62-a862-55254e2f046d',
    'Content-Type': 'application/json'
  }
};
