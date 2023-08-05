function enableValidation(config) {
  // переменная с массивом форм
  const forms = Array.from(document.querySelectorAll(config.formSelector));

  forms.forEach(form => {
    setEventListeners(form, config);
  });
}

// функция поиска всех инпутов внутри формы
const setEventListeners = (form, config) => {
  // переменная с массивом инпутов
  const inputs = Array.from(form.querySelectorAll(config.inputSelector));
  const button = form.querySelector(config.submitButtonSelector);

  toggleButtonState(inputs, button, config);
  form.addEventListener('reset', () => {
    deactivateButton(button, config);
  });

  // перебор массива с проверкой на валидность
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      isValid(form, input, config);
      toggleButtonState(inputs, button, config);
    });
  });
};

// функция активации кнопки при валидации
const toggleButtonState = (inputs, button, config) => {
  if (hasInvalidValue(inputs)) {
    deactivateButton(button, config);
  } else {
    activateButton(button, config);
  }
};

// функция проверки валидности инпутов
const hasInvalidValue = inputs => {
  return inputs.some(input => !input.validity.valid);
};

// функция деактивации кнопки
const deactivateButton = (button, config) => {
  button.classList.add(config.disabledButtonClass);
  button.disabled = true;
};

// функция активации кнопки
const activateButton = (button, config) => {
  button.classList.remove(config.disabledButtonClass);
  button.disabled = false;
};

// функция проверки валидность
const isValid = (form, input, config) => {
  if (!input.validity.valid) {
    // если невалидна показываем ошибку
    showInputError(form, input, config);
  } else {
    // если валидна прячем ошибку
    hideInputError(form, input, config);
  }
};

// показать текст ошибки
const showInputError = (form, input, config) => {
  input.classList.add(config.inputErrorClass);
  const span = form.querySelector(`#${input.id}-error`);
  span.textContent = input.validationMessage;
  span.classList.add(config.errorClass);
};

// спрятать текст ошибки
const hideInputError = (form, input, config) => {
  const span = form.querySelector(`#${input.id}-error`);
  span.textContent = '';
  input.classList.remove(config.inputErrorClass);
};
