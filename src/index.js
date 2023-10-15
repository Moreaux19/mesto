import Card from './scripts/Card.js';
import FormValidator from './scripts/FormValidator.js';
import Section from './scripts/Section.js';
import PopupWithImage from './scripts/PopupWithImage.js';
import PopupWithForm from './scripts/PopupWithForm.js';
import UserInfo from './scripts/UserInfo.js';
import {
  editPopupButton,
  addPopupButton,
  nameInput,
  descriptionInput,
  imageNameInput,
  imageUrlInput,
  elements,
  validationConfig,
  initialCards,
  popupProfileForm,
  popupElementForm
} from './scripts/constants.js';
import './pages/index.css';

const userInfoClass = new UserInfo({
  profileName: '.profile__name',
  profileDescription: '.profile__description'
});

const popupWithImage = () => {
  const popupFullImage = new PopupWithImage('#popup-image');
  popupFullImage.setEventListeners();
  return popupFullImage.open();
};

const sectionClass = new Section(
  {
    items: initialCards,
    renderer: item => {
      sectionClass.addItems(new Card(item, '#element-template', popupWithImage).getView());
    }
  },
  elements
);
sectionClass.renderItems();

const popupAddClass = new PopupWithForm({
  popupSelector: '#popup-element',
  submitForm: () => {
    const data = { name: imageNameInput.value, link: imageUrlInput.value };
    const card = new Card(data, '#element-template', '#popup-image').getView();
    sectionClass.addItems(card);
    popupAddClass.close();
  }
});

addPopupButton.addEventListener('click', () => {
  popupAddClass.open();
});
popupAddClass.setEventListeners();

const popupEditClass = new PopupWithForm({
  popupSelector: '#popup-profile',
  submitForm: el => {
    userInfoClass.setUserInfo(el.name, el.description);
    popupEditClass.close();
  }
});

const openEditPopup = () => {
  const userElement = userInfoClass.getUserInfo();
  nameInput.value = userElement.name;
  descriptionInput.value = userElement.description;
  popupEditClass.open();
};
editPopupButton.addEventListener('click', openEditPopup);
popupEditClass.setEventListeners();

const validateForm = (config, form) => {
  const card = new FormValidator(config, form);
  card.enableValidation();
};

validateForm(validationConfig, popupProfileForm);
validateForm(validationConfig, popupElementForm);
