const editPopupButton = document.querySelector('.profile__edit-button');
const nameProfile = document.querySelector('.profile__name');
const descriptionProfile = document.querySelector('.profile__description');
const editPopup = document.querySelector('#popup-profile');
const closePopupButtonProfile = editPopup.querySelector('#popup-close-button-profile');
const popupProfileForm = editPopup.querySelector('#popup-profile-form');
const nameInput = popupProfileForm.querySelector('#name-input');
const descriptionInput = popupProfileForm.querySelector('#description-input');

const addPopupButton = document.querySelector('.profile__add-button');
const addPopup = document.querySelector('#popup-element');
const closePopupButtonEl = addPopup.querySelector('#popup-close-button-element');
const popupElementForm = addPopup.querySelector('#popup-element-form');
const imageNameInput = popupElementForm.querySelector('#image-name-input');
const imageUrlInput = popupElementForm.querySelector('#image-url-input');

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

editPopupButton.addEventListener('click', function () {
  nameInput.value = nameProfile.textContent;
  descriptionInput.value = descriptionProfile.textContent;
  editPopup.classList.add('popup_opened');
});

closePopupButtonProfile.addEventListener('click', function () {
  editPopup.classList.remove('popup_opened');
});

popupProfileForm.addEventListener('submit', function (event) {
  event.preventDefault();

  nameProfile.textContent = nameInput.value;
  descriptionProfile.textContent = descriptionInput.value;
  editPopup.classList.remove('popup_opened');
});

addPopupButton.addEventListener('click', function () {
  addPopup.classList.add('popup_opened');
});

closePopupButtonEl.addEventListener('click', function () {
  addPopup.classList.remove('popup_opened');
});
