import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
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
  popupAddCardForm
} from '../utils/constants.js';
import './index.css';

const userInfo = new UserInfo({
  profileNameSelector: '.profile__name',
  profileDescriptionSelector: '.profile__description'
});

const popupWithImage = new PopupWithImage('#popup-image');
popupWithImage.setEventListeners();
const popupFullImageOpen = (name, link) => {
  popupWithImage.open(name, link);
};

const sectionClass = new Section(
  {
    items: initialCards,
    renderer: item => {
      sectionClass.addItem(cardCreate(item));
    }
  },
  elements
);

const popupAddClass = new PopupWithForm({
  popupSelector: '#popup-element',
  submitForm: formData => {
    const data = { name: formData[imageNameInput.name], link: formData[imageUrlInput.name] };
    sectionClass.addItem(cardCreate(data));
    popupAddClass.close();
  }
});

const popupEditClass = new PopupWithForm({
  popupSelector: '#popup-profile',
  submitForm: formData => {
    userInfo.setUserInfo(formData.name, formData.description);
    popupEditClass.close();
  }
});

const cardCreate = el => {
  const card = new Card(el, '#element-template', popupFullImageOpen);
  return card.getView();
};

const openEditPopup = () => {
  const userElement = userInfo.getUserInfo();
  nameInput.value = userElement.name;
  descriptionInput.value = userElement.description;
  popupEditClass.open();
};

const validateForm = (config, form) => {
  const formValidator = new FormValidator(config, form);
  formValidator.enableValidation();
};

validateForm(validationConfig, popupProfileForm);
validateForm(validationConfig, popupAddCardForm);

sectionClass.renderItems();

addPopupButton.addEventListener('click', () => {
  popupAddClass.open();
});

editPopupButton.addEventListener('click', openEditPopup);

popupAddClass.setEventListeners();

popupEditClass.setEventListeners();
