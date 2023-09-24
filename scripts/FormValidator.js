// класс с валидацией
class FormValidator {
  constructor(config, formSelector) {
    this._config = config;
    this._formSelector = formSelector;
    // this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._disabledButtonClass = config.disabledButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
  }

  // спрятать текст ошибки
  _hideInputError(form, input) {
    const span = form.querySelector(`#${input.id}-error`);
    span.textContent = '';
    input.classList.remove(this._inputErrorClass);
  }

  // показать текст ошибки
  _showInputError(form, input) {
    input.classList.add(this._inputErrorClass);
    const span = form.querySelector(`#${input.id}-error`);
    span.textContent = input.validationMessage;
    span.classList.add(this._errorClass);
  }

  // функция проверки валидность
  _isValid(form, input) {
    if (!input.validity.valid) {
      // если невалидна показываем ошибку
      this._showInputError(form, input);
    } else {
      // если валидна прячем ошибку
      this._hideInputError(form, input);
    }
  }

  // функция активации кнопки
  _activateButton(button) {
    button.classList.remove(this._disabledButtonClass);
    button.disabled = false;
  }

  // функция деактивации кнопки
  _deactivateButton(button) {
    button.classList.add(this._disabledButtonClass);
    button.disabled = true;
  }

  // функция проверки валидности инпутов
  _hasInvalidValue(inputs) {
    return inputs.some(input => !input.validity.valid);
  }

  // функция активации кнопки при валидации
  _toggleButtonState(inputs, button) {
    if (this._hasInvalidValue(inputs)) {
      this._deactivateButton(button);
    } else {
      this._activateButton(button);
    }
  }

  // функция поиска всех инпутов внутри формы
  _setEventListeners(form) {
    // переменная с массивом инпутов
    const inputs = Array.from(form.querySelectorAll(this._inputSelector));
    const button = form.querySelector(this._submitButtonSelector);

    this._toggleButtonState(inputs, button);
    form.addEventListener('reset', () => {
      this._deactivateButton(button);
    });

    // перебор массива с проверкой на валидность
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        this._isValid(form, input);
        this._toggleButtonState(inputs, button);
      });
    });
  }

  enableValidation() {
    this._formSelector.forEach(form => {
      this._setEventListeners(form);
    });
    // this._setEventListeners(this._formSelector);
  }

  // enableValidation() {
  //   // переменная с массивом форм
  //   const forms = Array.from(document.querySelectorAll(this._formSelector));

  //   forms.forEach(form => {
  //     this._setEventListeners(form);
  //   });
  // }
}

export default FormValidator;
