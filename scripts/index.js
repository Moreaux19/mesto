import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';

const sectionClassCreate = ({ items, renderer }, containerSelector) => {
  return new Section({ items, renderer }, containerSelector);
};

const cardClassCreate = (data, templateSelector, handleCardClick) => {
  return new Card(data, templateSelector, handleCardClick);
};

const popupFullImageClassCreate = popupSelector => {
  return new PopupWithImage(popupSelector);
};

const popupWithFormClassCreate = ({ popupSelector, submitForm }) => {
  return new PopupWithForm({ popupSelector, submitForm });
};

const validateFormCreate = (config, form) => {
  return new FormValidator(config, form);
};

const userInfoClass = new UserInfo({
  profileName: nameProfile,
  profileDescription: descriptionProfile
});

const popupWithImage = () => {
  const popupFullImage = popupFullImageClassCreate(imagePopup);
  return popupFullImage.open();
};

const sectionClass = sectionClassCreate(
  {
    items: initialCards,
    renderer: item => {
      sectionClass.addItems(cardClassCreate(item, '#element-template', popupWithImage).getView());
    }
  },
  elements
);
sectionClass.renderItems();

const popupAddClass = popupWithFormClassCreate({
  popupSelector: addPopup,
  submitForm: () => {
    const data = { name: imageNameInput.value, link: imageUrlInput.value };
    const card = cardClassCreate(data, '#element-template', popupWithImage);
    sectionClass.addItems(card);
    popupAddClass.close();
  }
});

addPopupButton.addEventListener('click', () => {
  popupAddClass.open();
});
popupAddClass.setEventListeners();

const popupEditClass = new PopupWithForm({
  popupSelector: editPopup,
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
  const card = validateFormCreate(config, form);
  card.enableValidation();
};

validateForm(validationConfig, popupProfileForm);
validateForm(validationConfig, popupElementForm);
