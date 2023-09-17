import Card from './Card.js';
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

// создание сетки изображений
// function createElement(value) {
//   const newElement = element.cloneNode(true);
//   const text = newElement.querySelector('#element-text');
//   text.textContent = value.name;
//   const image = newElement.querySelector('#element-image');
//   image.src = value.link;
//   image.alt = `Изображение: ${value.name}`;

//   // // удаление изображения
//   // const deleteElementButton = newElement.querySelector('.element__trash-button');
//   // deleteElementButton.addEventListener('click', function () {
//   //   newElement.remove();
//   // });

//   // // кнопка лайка
//   // const likeElementButton = newElement.querySelector('.element__button');
//   // likeElementButton.addEventListener('click', function () {
//   //   likeElementButton.classList.toggle('element__button_active');
//   // });

//   // открытие изображения
//   image.addEventListener('click', function () {
//     openPopup(imagePopup);

//     popupFullImage.src = image.src;
//     popupFullImage.alt = image.alt;
//     popupImageText.textContent = text.textContent;
//   });

//   return newElement;
// }

// функция передачи сетки изображений в код
function renderElement(data, container) {
  // const newElement = createElement(data);
  const card = new Card(data);
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

enableValidation(validationConfig);
