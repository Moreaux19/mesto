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
    this._text = this._newCard.querySelector('#element-text');
    this._text.textContent = this._name;
    this._image = this._newCard.querySelector('#element-image');
    this._image.src = this._link;
    this._image.alt = `Изображение: ${this._name}`;
  }

  // слушатель удаления изображения
  _handleDeleteButton() {
    this._newCard.remove();
    this._newCard = null;
  }

  // слушатель кнопки лайка
  _handleLikeButton() {
    this._likeButton = this._newCard.querySelector('.element__button');
    this._likeButton.classList.toggle('element__button_active');
  }

  _handleOpenImage() {
    this._imagePopup = document.querySelector('#popup-image');
    this._text = this._newCard.querySelector('#element-text');
    this._text.textContent = this._name;
    this._image = this._newCard.querySelector('#element-image');

    openPopup(this._imagePopup);

    this._popupFullImage.src = this._image.src;
    this._popupFullImage.alt = this._image.alt;
    this._popupImageText.textContent = this._text.textContent;
  }

  // все слушатели
  _setListeners() {
    // удаление изображения
    this._deleteButton = this._newCard.querySelector('.element__trash-button');
    this._deleteButton.addEventListener('click', this._handleDeleteButton.bind(this));

    // кнопка лайка
    this._likeButton = this._newCard.querySelector('.element__button');
    this._likeButton.addEventListener('click', this._handleLikeButton.bind(this));

    // открытие изображения
    this._image = this._newCard.querySelector('#element-image');
    this._image.addEventListener('click', this._handleOpenImage.bind(this));
  }

  getView() {
    this._newCard = this._getTemplate();
    this._setData();
    this._setListeners();
    return this._newCard;
  }
}

export default Card;
