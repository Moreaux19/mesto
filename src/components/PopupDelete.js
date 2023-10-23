import Popup from './Popup.js';

class PopupDelete extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._deleteButton = this._popup.querySelector('.popup__delete-button');
  }

  open(submitForm) {
    this._submitHandler = submitForm;
    console.log(submitForm);
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
    this._deleteButton.addEventListener('click', () => {
      Promise.resolve(this._submitHandler())
        .then(() => {
          super.close();
        })
        .catch(error => {
          console.log(error);
        });
    });
  }
}

export default PopupDelete;
