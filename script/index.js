const editPopupButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close-button');
const savePopupButton = document.querySelector('.popup__save-button');
const nameProfile = document.querySelector('.profile__name');
const descriptionProfile = document.querySelector('.profile__description');
const nameInput = document.querySelector('#name-input');
const descriptionInput = document.querySelector('#description-input');
const popupForm = document.querySelector('.popup__form');

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

editPopupButton.addEventListener('click', function () {
  openPopup(editPopup);
});

closePopupButton.addEventListener('click', function () {
  closePopup(editPopup);
});

nameInput.value = nameProfile.textContent;
descriptionInput.value = descriptionProfile.textContent;

popupForm.addEventListener('submit', function (event) {
  event.preventDefault();
  nameProfile.textContent = nameInput.value;
  descriptionProfile.textContent = descriptionInput.value;
  closePopup(editPopup);
});
