const editPopupButton = document.querySelector('#edit-popup-button');
const editPopup = document.querySelector('#popup');
const closePopupButton = document.querySelector('#close-popup-button');
const savePopupButton = document.querySelector('#save-popup-button');
const nameProfile = document.querySelector('.profile__name');
const descriptionProfile = document.querySelector('.profile__description');
const nameInput = document.querySelector('#name-input');
const descriptionInput = document.querySelector('#description-input');
const popupForm = document.querySelector('.popup__form');

function openPopup(popup) {
  popup.classList.add('popup__visible');
}

function closePopup() {
  popup.classList.remove('popup__visible');
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
