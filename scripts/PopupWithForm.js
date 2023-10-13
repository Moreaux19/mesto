import Popup from './Popup.js';

class PopupWithForm extends Popup {
  constructor({ popupSelector, submitForm }) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._inputSelector = popupSelector.querySelector('.popup__form');
    this._inputList = this._inputSelector.querySelectorAll('.popup__input');
    // this._inputList = this._inputSelector.querySelectorAll('.popup__input');
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputList.forEach(input => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }

  close() {
    super.close();
    this._inputSelector.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._inputSelector.addEventListener('submit', evt => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
    });
  }
}

export default PopupWithForm;
