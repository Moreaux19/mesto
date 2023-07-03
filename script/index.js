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

const template = document.querySelector('#element-template').content;
const elements = document.querySelector('.elements');
const element = template.querySelector('.element');

const imagePopup = document.querySelector('#popup-image');
const closePopupImageButton = imagePopup.querySelector('#popup-close-button-image');
const popupFullImage = imagePopup.querySelector('.popup__full-image');
const popupImageText = imagePopup.querySelector('.popup__image-text');

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

// открытие окна редактирования профиля
editPopupButton.addEventListener('click', function () {
  nameInput.value = nameProfile.textContent;
  descriptionInput.value = descriptionProfile.textContent;
  editPopup.classList.add('popup_opened');
});

// закрытие окна редактирования профиля
closePopupButtonProfile.addEventListener('click', function () {
  editPopup.classList.remove('popup_opened');
});

// редактирование профиля
popupProfileForm.addEventListener('submit', function (event) {
  event.preventDefault();

  nameProfile.textContent = nameInput.value;
  descriptionProfile.textContent = descriptionInput.value;
  editPopup.classList.remove('popup_opened');
});

// открытие окна добавления изображения
addPopupButton.addEventListener('click', function () {
  addPopup.classList.add('popup_opened');
});

// закрытие окна добавления изображения
closePopupButtonEl.addEventListener('click', function () {
  addPopup.classList.remove('popup_opened');
});

//создание сетки изображений
function createElement(value) {
  const newElement = element.cloneNode(true);
  const text = newElement.querySelector('#element-text');
  text.textContent = value.name;
  const image = newElement.querySelector('#element-image');
  image.src = value.link;
  image.alt = `Изображение: ${value.name}`;

  //удаление изображения
  const deleteElementButton = newElement.querySelector('.element__trash-button');
  deleteElementButton.addEventListener('click', function () {
    newElement.remove();
  });

  //кнопка лайка
  const likeElementButton = newElement.querySelector('.element__button');
  likeElementButton.addEventListener('click', function () {
    likeElementButton.classList.toggle('element__button_active');
  });

  //открытие изображения
  image.addEventListener('click', function () {
    imagePopup.classList.add('popup_opened');

    popupFullImage.src = image.src;
    popupFullImage.alt = image.alt;
    popupImageText.textContent = text.textContent;
  });

  //закрытие изображения
  closePopupImageButton.addEventListener('click', function () {
    imagePopup.classList.remove('popup_opened');
  });

  return newElement;
}

//функция передачи сетки изображений в код
function renderElement(data, container) {
  const newElement = createElement(data);
  container.prepend(newElement);
}

//загрузка массива
initialCards.forEach(function (item) {
  renderElement(item, elements);
});

//добавление картинки
popupElementForm.addEventListener('submit', function (event) {
  event.preventDefault();
  renderElement({ name: imageNameInput.value, link: imageUrlInput.value }, elements);
  popupElementForm.reset();
  addPopup.classList.remove('popup_opened');
});
