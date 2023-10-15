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

  _popupImageOpen() {
    this._handleCardClick(this._link, this._name);
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
    this.image = this._newCard.querySelector('#element-image');
    this.image.addEventListener('click', () => {
      this._popupImageOpen();
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
