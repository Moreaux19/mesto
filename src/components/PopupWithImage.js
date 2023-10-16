import Popup from './Popup.js';

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupFullImage = this._popup.querySelector('.popup__full-image');
    this._popupImageText = this._popup.querySelector('.popup__image-text');
  }

  open(name, link) {
    // открытие изображения
    super.open();
    this._popupFullImage.src = link;
    this._popupFullImage.alt = name;
    this._popupImageText.textContent = name;
  }
}

export default PopupWithImage;
