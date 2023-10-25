import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import UserAvatar from '../components/UserAvatar.js';
import Api from '../components/Api.js';
import PopupDelete from '../components/PopupDelete.js';
import './index.css';
import {
  elements,
  editPopupButton,
  addPopupButton,
  popupProfileForm,
  nameInput,
  descriptionInput,
  popupAddCardForm,
  optionsApi,
  profileAvatar,
  avatarForm,
  validationConfig
} from '../utils/constants.js';

const api = new Api(optionsApi);

const cardsSection = new Section(createCard, elements);

const userInfo = new UserInfo({
  profileNameSelector: '.profile__name',
  profileDescriptionSelector: '.profile__description'
});

const userAvatar = new UserAvatar(profileAvatar);

const popupAddCard = new PopupWithForm({
  popupSelector: '#popup-element',
  submitForm: submitAddForm
});

const popupEditProfile = new PopupWithForm({
  popupSelector: '#popup-profile',
  submitForm: submitEditForm
});

const popupEditAvatar = new PopupWithForm({
  popupSelector: '#popup-edit-avatar',
  submitForm: submitAvatarForm
});

const popupWithImage = new PopupWithImage('#popup-image');

const popupDelete = new PopupDelete('#popup-delete', null);

//функция создания карточки
function createCard(data) {
  const card = new Card(
    data,
    '#element-template',
    openImagePopup,
    () => {
      api.setLikes(data._id, card.isLiked());
      console.log();
    },
    handleDeleteFunction,
    userInfo.getUserInfo().id
  );
  return card.getView();
}

function handleLikeFunction() {}

//функция редактирования профиля
function submitEditForm(formData) {
  const name = formData['name'];
  const about = formData['description'];
  popupEditProfile.showPreloader();
  api
    .editProfile(name, about)
    .then(res => {
      userInfo.setUserInfo(res);
      popupEditProfile.close();
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => popupEditProfile.showPreloader(false));
}

//функция редактирования аватара
function submitAvatarForm(inputs) {
  const avatarUrl = inputs['avatar-url'];
  popupEditAvatar.showPreloader();
  api
    .editAvatar(avatarUrl)
    .then(data => {
      userAvatar.setAvatar(data.avatar);
      popupEditAvatar.close();
    })
    .catch(err => console.log(err))
    .finally(() => popupEditAvatar.showPreloader(false));
}

//функция добавления изображения
function submitAddForm(inputs) {
  const imageName = inputs['image-name'];
  const imageUrl = inputs['image-url'];
  popupAddCard.showPreloader();
  api
    .addNewCard(imageName, imageUrl)
    .then(data => {
      const card = createCard(data);
      cardsSection.addItem(card);
      popupAddCard.close();
    })
    .catch(err => console.log(err))
    .finally(() => popupAddCard.showPreloader(false));
}

//функция открытия изображения
function openImagePopup(name, link) {
  popupWithImage.open(name, link);
}

//функция открытия попапа профиля
function openEditPopup() {
  const userElement = userInfo.getUserInfo();
  nameInput.value = userElement.name;
  descriptionInput.value = userElement.about;
  popupEditProfile.open();
}

//функция удаления попапа
function handleDeleteFunction(card) {
  popupDelete.open();
  popupDelete.submitFunction(() => {
    api
      .deleteCard(card._id)
      .then(() => {
        card.handleDeleteButton();
        popupDelete.close();
      })
      .catch(err => console.log(err));
  });
}

//функция валидации формы
function validateForm(config, form) {
  const formValidator = new FormValidator(config, form);
  formValidator.enableValidation();
}

validateForm(validationConfig, popupProfileForm);
validateForm(validationConfig, popupAddCardForm);
validateForm(validationConfig, avatarForm);

cardsSection.renderItems([]);

addPopupButton.addEventListener('click', () => {
  popupAddCard.open();
});

editPopupButton.addEventListener('click', openEditPopup);

profileAvatar.addEventListener('click', () => {
  popupEditAvatar.open();
});

popupAddCard.setEventListeners();

popupEditProfile.setEventListeners();

popupWithImage.setEventListeners();

popupEditAvatar.setEventListeners();

popupDelete.setEventListeners();

Promise.all(
  [
    api
      .getUser()
      .then(user => {
        userInfo.setUserInfo(user);
        userAvatar.setAvatar(user.avatar);
        const backgroundImage = `url(${user.avatar})`;
        profileAvatar.computedStyleMap.backgroundImage = backgroundImage;
      })
      .catch(err => console.log(err))
  ],
  api
    .getAllCards()
    .then(cards => {
      const { id: userId } = userInfo.getUserInfo();
      cards.reverse().forEach(card => {
        const cardEl = createCard(card);
        cardsSection.addItem(cardEl);
      });
      cardsSection.renderItems([]);
    })
    .catch(err => console.log(err))
);
