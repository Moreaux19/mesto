import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { openPopup, closePopup } from './utils.js';

// функция закрытия всех попапов по нажатию кнопки закрытия
closeButton.forEach(button => {
  const buttonsPopup = button.closest('.popup'); // нашли родителя с нужным классом
  button.addEventListener('click', () => closePopup(buttonsPopup)); // закрыли попап
});

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

const cardClassCreate = data => {
  return new Card(data);
};

// функция передачи сетки изображений в код
function renderElement(data, container) {
  const card = cardClassCreate(data);
  container.prepend(card.getView());
}

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

const validateCardCreate = (config, form) => {
  // переменная с массивом форм
  return new FormValidator(config, form);
};

const validateCard = (config, form) => {
  const card = validateCardCreate(config, form);
  card.enableValidation();
};

validateCard(validationConfig, popupProfileForm);
validateCard(validationConfig, popupElementForm);
