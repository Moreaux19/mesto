class Card {
  constructor(
    data,
    templateSelector,
    handleCardClick,
    handleLikeClick,
    handleDeleteClick,
    currentUserId
  ) {
    this._name = data.name;
    this._link = data.link;
    this._id = data.id;
    this._likes = data.likes;
    this._isLiked = data.isLiked;
    this._owner = data.owner;
    // this._ownerId = this._owner._id;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;
    this._currentUserId = currentUserId;
  }

  // выбор класса шаблона для фотокарточки
  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._templateSelector)
      .content.querySelector('.element')
      .cloneNode(true);
    // this._deleteButtonEl = cardTemplate.querySelector('.element__trash-button');
    // if (this._ownerId !== this._currentUserId) {
    //   this._deleteButtonEl.style.display = 'none';
    // }
    return cardTemplate;
  }

  // находим все элементы в одном свойстве
  _getElements() {
    this._image = this._newCard.querySelector('#element-image');
    this._text = this._newCard.querySelector('#element-text');
    this._likeButton = this._newCard.querySelector('.element__button');
    this._deleteButton = this._newCard.querySelector('.element__trash-button');
    this._likesNumber = this._newCard.querySelector('.element__likes');
  }

  // выбор названия и ссылки изображения из массива
  _setData() {
    this._text.textContent = this._name;
    this._image.src = this._link;
    this._image.alt = `Изображение: ${this._name}`;
  }

  // слушатель удаления изображения
  handleDeleteButton() {
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
    this._deleteButton.addEventListener('click', this.handleDeleteButton.bind(this));
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
    this._setData();
    this._setListeners();
    return this._newCard;
  }
}
export default Card;
