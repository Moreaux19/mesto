class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  // выбор класса шаблона для фотокарточки
  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._templateSelector)
      .content.querySelector('.element')
      .cloneNode(true);
    return cardTemplate;
  }

  // находим все элементы в одном свойстве
  _getElements() {
    this._image = this._newCard.querySelector('#element-image');
    this._text = this._newCard.querySelector('#element-text');
    this._likeButton = this._newCard.querySelector('.element__button');
    this._deleteButton = this._newCard.querySelector('.element__trash-button');
  }

  // выбор названия и ссылки изображения из массива
  _setData() {
    this._text.textContent = this._name;
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
    this._likeButton.classList.toggle('element__button_active');
  }

  _openImagePopup() {
    this._handleCardClick(this._name, this._link);
  }

  // все слушатели
  _setListeners() {
    // удаление изображения
    this._deleteButton.addEventListener('click', this._handleDeleteButton.bind(this));
    // кнопка лайка
    this._likeButton.addEventListener('click', this._handleLikeButton.bind(this));

    // открытие изображения
    this._image.addEventListener('click', () => {
      this._openImagePopup();
    });
  }

  getView() {
    this._newCard = this._getTemplate();
    this._getElements();
    // this._image = this._newCard.querySelector('#element-image');
    this._setData();
    this._setListeners();
    return this._newCard;
  }
}
export default Card;
