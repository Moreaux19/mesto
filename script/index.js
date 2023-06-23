const editPopupButton = document.querySelector('.profile__edit-button');
const nameProfile = document.querySelector('.profile__name');
const descriptionProfile = document.querySelector('.profile__description');
const editPopup = document.querySelector('.popup');
const closePopupButton = editPopup.querySelector('.popup__close-button');
const popupForm = editPopup.querySelector('.popup__form');
const nameInput = popupForm.querySelector('#name-input');
const descriptionInput = popupForm.querySelector('#description-input');

editPopupButton.addEventListener('click', function () {
  editPopup.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent;
  descriptionInput.value = descriptionProfile.textContent;
});

closePopupButton.addEventListener('click', function () {
  editPopup.classList.remove('popup_opened');
});

popupForm.addEventListener('submit', function (event) {
  event.preventDefault();

  nameProfile.textContent = nameInput.value;
  descriptionProfile.textContent = descriptionInput.value;
  editPopup.classList.remove('popup_opened');
});
