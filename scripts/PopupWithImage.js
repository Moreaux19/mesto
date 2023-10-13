import Popup from './Popup.js';

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupFullImage = this._popupSelector.querySelector('.popup__full-image');
    this._popupImageText = this._popupSelector.querySelector('.popup__image-text');
    this._image = document.querySelector('#element-image');
    this._text = document.querySelector('#element-text');
  }

  open() {
    // открытие изображения
    super.open();
    this._popupFullImage.src = this._image.src;
    this._popupFullImage.alt = this._image.alt;
    this._popupImageText.textContent = this._text.textContent;
  }
}

export default PopupWithImage;
