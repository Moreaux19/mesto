import Popup from './Popup.js';

class PopupWithForm extends Popup {
  constructor({ popupSelector, submitForm }) {
    super(popupSelector);

    this._submitForm = submitForm;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._saveButton = this._form.querySelector('.popup__save-button');
    this._button = this._saveButton.textContent;
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
    this._form.reset();
  }

  showPreloader(isLoading = true) {
    isLoading
      ? (this._saveButton.textContent = 'Сохранение...')
      : (this._saveButton.textContent = this._button);
  }

  getName() {
    return this._form.getAttribute('name');
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', evt => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
    });
  }
}

export default PopupWithForm;
