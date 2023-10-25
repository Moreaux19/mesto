import Popup from './Popup.js';

class PopupDelete extends Popup {
  constructor(popupSelector, submitForm = null) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._deleteButton = this._popupForm.querySelector('.popup__delete-button');
  }

  submitFunction(callback) {
    this._submitForm = callback;
  }

  setEventListeners() {
    super.setEventListeners();
    this._deleteButton.addEventListener('click', () => {
      this._submitForm();
    });
  }
}

export default PopupDelete;
