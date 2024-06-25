class Card {
  constructor(
    data,
    templateSelector,
    handleCardClick,
    handleLikeClick,
    handleDeleteClick,
    currentUserId
  ) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._likes = data.likes;
    this._owner = data.owner;
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
    this._deleteButtonEl = cardTemplate.querySelector('.element__trash-button');
    if (this._owner._id !== this._currentUserId) {
      this._deleteButtonEl.style.display = 'none';
    }
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
    this._el = this._deleteButton.closest('.element');
    console.log(this._el);
    this._el.remove();
    this._el = null;
  }

  // слушатель кнопки лайка
  _handleLikeButton() {
    this._likeButton.classList.toggle('element__button_active');
    this._handleLikeClick(this.isLiked);
  }

  _openImagePopup() {
    this._handleCardClick(this._name, this._link);
  }

  updateLikesNumber(data) {
    this._likes = data.likes;
    this._likesNumber.textContent = this._likes.length;
    return this._likesNumber.textContent;
  }

  _setLikesData(data) {
    this.updateLikesNumber(data);
    if (this.isLiked()) {
      this._likeButton.classList.add('element__button_active');
    } else {
      this._likeButton.classList.remove('element__button_active');
    }
  }

  isLiked() {
    return this._data.likes.some(user => {
      return user._id === this._currentUserId;
    });
  }

  _handleDeleteClick() {
    this._handleDeleteClick();
  }

  // все слушатели
  _setListeners() {
    // кнопка лайка
    // this._likeButton.addEventListener('click', this._handleLikeButton.bind(this));
    this._likeButton.addEventListener('click', this._handleLikeClick.bind(this));
    // удаление изображения
    this._deleteButton.addEventListener('click', () => this._handleDeleteClick(this));
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
    this._setLikesData(this._data);
    return this._newCard;
  }
}
export default Card;
