// класс с валидацией
class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._disabledButtonClass = config.disabledButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._inputs = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._button = this._formElement.querySelector(this._submitButtonSelector);
  }

  // спрятать текст ошибки
  _hideInputError(input) {
    const span = this._formElement.querySelector(`#${input.id}-error`);
    span.textContent = '';
    input.classList.remove(this._inputErrorClass);
  }

  // показать текст ошибки
  _showInputError(input) {
    input.classList.add(this._inputErrorClass);
    const span = this._formElement.querySelector(`#${input.id}-error`);
    span.textContent = input.validationMessage;
    span.classList.add(this._errorClass);
  }

  // функция проверки валидность
  _isValid(input) {
    if (!input.validity.valid) {
      // если невалидна показываем ошибку
      this._showInputError(input);
    } else {
      // если валидна прячем ошибку
      this._hideInputError(input);
    }
  }

  // функция активации кнопки
  _activateButton() {
    this._button.classList.remove(this._disabledButtonClass);
    this._button.disabled = false;
  }

  // функция деактивации кнопки
  _deactivateButton() {
    this._button.classList.add(this._disabledButtonClass);
    this._button.disabled = true;
  }

  // функция проверки валидности инпутов
  _hasInvalidValue() {
    return this._inputs.some(input => !input.validity.valid);
  }

  // функция активации кнопки при валидации
  _toggleButtonState() {
    if (this._hasInvalidValue(this._inputs)) {
      this._deactivateButton(this._button);
    } else {
      this._activateButton(this._button);
    }
  }

  // функция поиска всех инпутов внутри формы
  _setEventListeners() {
    this._toggleButtonState();
    this._formElement.addEventListener('reset', () => {
      this._deactivateButton();
    });

    // перебор массива с проверкой на валидность
    this._inputs.forEach(input => {
      input.addEventListener('input', () => {
        this._isValid(input);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}

export default FormValidator;
