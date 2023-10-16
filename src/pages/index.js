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
const openImagePopup = (name, link) => {
  popupWithImage.open(name, link);
};

const cardsSection = new Section(
  {
    items: initialCards,
    renderer: item => {
      cardsSection.addItem(createCard(item));
    }
  },
  elements
);

const popupAddCard = new PopupWithForm({
  popupSelector: '#popup-element',
  submitForm: formData => {
    const data = { name: formData[imageNameInput.name], link: formData[imageUrlInput.name] };
    cardsSection.addItem(createCard(data));
    popupAddCard.close();
  }
});

const popupEditProfile = new PopupWithForm({
  popupSelector: '#popup-profile',
  submitForm: formData => {
    userInfo.setUserInfo(formData.name, formData.description);
    popupEditProfile.close();
  }
});

const createCard = el => {
  const card = new Card(el, '#element-template', openImagePopup);
  return card.getView();
};

const openEditPopup = () => {
  const userElement = userInfo.getUserInfo();
  nameInput.value = userElement.name;
  descriptionInput.value = userElement.description;
  popupEditProfile.open();
};

const validateForm = (config, form) => {
  const formValidator = new FormValidator(config, form);
  formValidator.enableValidation();
};

validateForm(validationConfig, popupProfileForm);
validateForm(validationConfig, popupAddCardForm);

cardsSection.renderItems();

addPopupButton.addEventListener('click', () => {
  popupAddCard.open();
});

editPopupButton.addEventListener('click', openEditPopup);

popupAddCard.setEventListeners();

popupEditProfile.setEventListeners();
