import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';

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
