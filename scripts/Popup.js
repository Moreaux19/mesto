class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._closeButton = this._popupSelector.querySelector('.popup__close-button');
  }

  open() {
    this._popupSelector.classList.add('popup_opened');
    window.addEventListener('keydown', this._handleEscClose.bind(this));
    this._popupSelector.addEventListener('click', this.setEventListeners.bind(this));
  }

  close() {
    this._popupSelector.classList.remove('popup_opened');
    window.removeEventListener('keydown', this._handleEscClose.bind(this));
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._closeButton.addEventListener('click', () => this.close());
    this._popupSelector.addEventListener('click', evt => {
      if (evt.target === evt.currentTarget) {
        this.close();
      }
    });
  }
}

export default Popup;
