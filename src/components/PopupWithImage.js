import Popup from './Popup.js';

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupFullImage = this._popup.querySelector('.popup__full-image');
    this._popupImageText = this._popup.querySelector('.popup__image-text');
    this._image = document.querySelector('#element-image');
    this._text = document.querySelector('#element-text');
  }

  // open() {
  //   super.open();
  //   this._popupFullImage.src = this._image.src;
  //   this._popupFullImage.alt = this._image.alt;
  //   this._popupImageText.textContent = this._text.textContent;
  // }

  open(name, link) {
    // открытие изображения
    super.open();
    this._popupFullImage.src = link;
    this._popupFullImage.alt = name;
    this._popupImageText.textContent = name;
    console.log(name);
  }
}

export default PopupWithImage;
