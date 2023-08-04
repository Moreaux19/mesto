function enableValidation(config) {
  //показать текст ошибки
  const showInputError = (form, input) => {
    input.classList.add(config.inputErrorClass);
    const span = form.querySelector(`#${input.id}-error`);
    span.textContent = input.validationMessage;
    span.classList.add(config.errorClass);
  };

  //спрятать текст ошибки
  const hideInputError = (form, input) => {
    const span = form.querySelector(`#${input.id}-error`);
    span.textContent = '';
    input.classList.remove(config.inputErrorClass);
  };

  const isValid = (form, input) => {
    if (!input.validity.valid) {
      //если невалидна показываем ошибку
      showInputError(form, input);
    } else {
      //если валидна прячем ошибку
      hideInputError(form, input);
    }
  };

  //функция проверки валидности инпутов
  const hasInvalidValue = inputs => {
    return inputs.some(input => !input.validity.valid);
  };
  //функция активации кнопки при валидации
  const toggleButtonState = (inputs, button) => {
    if (hasInvalidValue(inputs)) {
      button.classList.add(config.disabledButtonClass);
      button.disabled = true;
    } else {
      button.classList.remove(config.disabledButtonClass);
      button.disabled = false;
    }
  };

  //функция поиска всех инпутов внутри формы
  const setEventListeners = form => {
    //переменная с массивом инпутов
    const inputs = Array.from(form.querySelectorAll(config.inputSelector));
    const button = form.querySelector(config.submitButtonSelector);

    toggleButtonState(inputs, button);

    //перебор массива с проверкой на валидность
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        isValid(form, input);
        toggleButtonState(inputs, button);
      });
    });
  };
  //переменная с массивом форм
  const forms = Array.from(document.querySelectorAll(config.formSelector));

  forms.forEach(form => {
    setEventListeners(form);
  });
}
