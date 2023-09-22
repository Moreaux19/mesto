// класс с валидацией
class FormValidator {
  constructor(config) {
    this.config = config;
  }

  // спрятать текст ошибки
  _hideInputError(form, input, config) {
    const span = form.querySelector(`#${input.id}-error`);
    span.textContent = '';
    input.classList.remove(this.config.inputErrorClass);
  }

  // показать текст ошибки
  _showInputError(form, input, config) {
    input.classList.add(this.config.inputErrorClass);
    const span = form.querySelector(`#${input.id}-error`);
    span.textContent = input.validationMessage;
    span.classList.add(this.config.errorClass);
  }

  // функция проверки валидность
  _isValid(form, input, config) {
    if (!input.validity.valid) {
      // если невалидна показываем ошибку
      this._showInputError(form, input, config);
    } else {
      // если валидна прячем ошибку
      this._hideInputError(form, input, config);
    }
  }

  // функция активации кнопки
  _activateButton(button, config) {
    button.classList.remove(this.config.disabledButtonClass);
    button.disabled = false;
  }

  // функция деактивации кнопки
  _deactivateButton(button, config) {
    button.classList.add(this.config.disabledButtonClass);
    button.disabled = true;
  }

  // функция проверки валидности инпутов
  _hasInvalidValue(inputs) {
    return inputs.some(input => !input.validity.valid);
  }

  // функция активации кнопки при валидации
  _toggleButtonState(inputs, button, config) {
    if (this._hasInvalidValue(inputs)) {
      this._deactivateButton(button, config);
    } else {
      this._activateButton(button, config);
    }
  }

  // функция поиска всех инпутов внутри формы
  _setEventListeners(form, config) {
    // переменная с массивом инпутов
    const inputs = Array.from(form.querySelectorAll(this.config.inputSelector));
    const button = form.querySelector(this.config.submitButtonSelector);

    this._toggleButtonState(inputs, button, config);
    form.addEventListener('reset', () => {
      this._deactivateButton(button, this.config);
    });

    // перебор массива с проверкой на валидность
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        this._isValid(form, input, this.config);
        this._toggleButtonState(inputs, button, this.config);
      });
    });
  }

  enableValidation(config) {
    // переменная с массивом форм
    console.log(this.config);
    const forms = Array.from(document.querySelectorAll(this.config.formSelector));

    forms.forEach(form => {
      this._setEventListeners(form, config);
    });
  }
}

export default FormValidator;
