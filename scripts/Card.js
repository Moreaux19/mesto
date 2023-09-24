import { openPopup } from './utils.js';
// класс с функциями карточки(удаление, лайк)
class Card {
  constructor(data) {
    this._name = data.name;
    this._link = data.link;
  }

  // выбор класса шаблона для фотокарточки
  _getTemplate() {
    const cardTemplate = document
      .querySelector('#element-template')
      .content.querySelector('.element')
      .cloneNode(true);
    return cardTemplate;
  }

  // выбор названия и ссылки изображения из массива
  _setData() {
    const text = this._newCard.querySelector('#element-text');
    text.textContent = this._name;
    const image = this._newCard.querySelector('#element-image');
    image.src = this._link;
    image.alt = `Изображение: ${this._name}`;
  }

  // слушатель удаления изображения
  _handleDeleteButton() {
    this._newCard.remove();
    this._newCard = null;
  }

  // слушатель кнопки лайка
  _handleLikeButton() {
    const likeButton = this._newCard.querySelector('.element__button');
    likeButton.classList.toggle('element__button_active');
  }
  // все слушатели
  _setListeners() {
    // удаление изображения
    const deleteButton = this._newCard.querySelector('.element__trash-button');
    deleteButton.addEventListener('click', this._handleDeleteButton.bind(this));

    // кнопка лайка
    const likeButton = this._newCard.querySelector('.element__button');
    likeButton.addEventListener('click', this._handleLikeButton.bind(this));

    // открытие изображения
    const image = this._newCard.querySelector('#element-image');
    const imagePopup = document.querySelector('#popup-image');
    const popupFullImage = imagePopup.querySelector('.popup__full-image');
    const popupImageText = imagePopup.querySelector('.popup__image-text');
    const text = this._newCard.querySelector('#element-text');
    image.addEventListener('click', function () {
      openPopup(imagePopup);

      popupFullImage.src = image.src;
      popupFullImage.alt = image.alt;
      popupImageText.textContent = text.textContent;
    });
  }

  getView() {
    this._newCard = this._getTemplate();
    this._setData();
    this._setListeners();
    return this._newCard;
  }
}
export default Card;
