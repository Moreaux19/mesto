import Popup from './Popup.js';

class PopupDelete extends Popup {
  constructor(popupSelector, submitForm = null) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._form = this._popup.querySelector('.popup__form');
  }

  submitFunction(callback) {
    this._submitForm = callback;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('click', () => {
      this._submitForm();
    });
  }
}

export default PopupDelete;
