// класс для открытия попапов
class Popup {
  constructor(popup, popupClass) {
    this.popup = popup;
    this.class = popupClass;
  }

  // функция открытия попапа
  openPopup() {
    // this.popup.classList.add('popup_opened');
    this.popup.classList.add(this.popupClass);
    window.addEventListener('keydown', this._escapeButtonClose);
    this.popup.addEventListener('click', this._overlayZoneClose);
  }

  // функция закрытия попапа
  closePopup() {
    // this.popup.classList.remove('popup_opened');
    this.popup.classList.remove(this.popupClass);
    window.removeEventListener('keydown', this._escapeButtonClose);
    this.popup.removeEventListener('click', this._overlayZoneClose);
  }

  // функция закрытия попапа по клавише Esc
  _escapeButtonClose(evt) {
    const popup = document.querySelector(`.${this.popupClass}`);
    if (evt.key === 'Escape' && popup) {
      closePopup();
    }
  }

  // функция закрытия попапа по клику на оверлей
  _overlayZoneClose(evt) {
    const popup = evt.target;
    if (popup === evt.currentTarget) {
      closePopup();
    }
  }
}

export default Popup;
