import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupDelete from '../components/PopupDelete.js';
import './index.css';
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
  popupAddCardForm,
  optionsApi,
  nameElement,
  urlElement,
  inputName,
  inputDescription,
  profileAvatar,
  avatarForm
} from '../utils/constants.js';

const api = new Api(optionsApi);

const cardsSection = new Section(
  {
    items: initialCards,
    renderer: createCard
  },
  elements
);

const userInfo = new UserInfo(
  {
    profileNameSelector: '.profile__name',
    profileDescriptionSelector: '.profile__description'
  },
  profileAvatar
);

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

const popupDelete = new PopupDelete('.popup__delete-form');

//функция создания карточки
function createCard(data) {
  const card = new Card(
    data,
    '#element-template',
    openImagePopup,
    () => {
      api.setLikes(data.id, data.isLiked);
    },
    () =>
      popupDelete.open(() => {
        api
          .deleteCard(id)
          .then(() => {
            card.handleDeleteButton();
            popupDelete.close();
          })
          .catch(err => {
            console.log(err);
          });
      }),
    userInfo.getUserInfo().id
  );
  return card.getView();
}

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
    });
}

//функция редактирования аватара
function submitAvatarForm(inputs) {
  const avatarUrl = inputs['avatar-url'];
  popupEditAvatar.showPreloader();
  api
    .editAvatar(avatarUrl)
    .then(data => {
      userInfo.setUserInfo(data);
      popupEditAvatar.close();
    })
    .catch(err => console.log(err));
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
    .catch(err => console.log(err));
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

//функция валидации формы
function validateForm(config, form) {
  const formValidator = new FormValidator(config, form);
  formValidator.enableValidation();
}

validateForm(validationConfig, popupProfileForm);
validateForm(validationConfig, popupAddCardForm);
validateForm(validationConfig, avatarForm);

cardsSection.renderItems();

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

Promise.all([
  api
    .getUser()
    .then(user => {
      userInfo.setUserInfo(user);
      const backgroundImage = `url(${user.avatar})`;
      profileAvatar.computedStyleMap.backgroundImage = backgroundImage;
    })
    .catch(err => console.log(err))
]);

Promise.all([
  api
    .getAllCards()
    .then(cards => {
      cards.reverse().forEach(card => {
        const cardEl = createCard(card);
        cardsSection.addItem(cardEl);
      });
      cardsSection.renderItems();
    })
    .catch(err => console.log(err))
]);
