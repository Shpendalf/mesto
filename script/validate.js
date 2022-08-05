const parameters = {
  formElement: '.popup__form',
  formInput: '.popup__textarea',
  buttonElement: '.popup__button',
  activeButtonClass: 'popup__button_valid',
  inactiveButtonClass: 'popup__button_invalid',
  inputErrorClass: 'popup__error',
  inputErrorClassActive: 'popup__error_active'
}
const showInputError = (errorElement, { inputErrorClass, inputErrorClassActive }) => {
  errorElement.classList.add(inputErrorClass);
  errorElement.classList.add(inputErrorClassActive);
}

const hideInputError = (errorElement, { inputErrorClass, inputErrorClassActive }) => {
  errorElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(inputErrorClassActive)
  errorElement.textContent = ''
}

function validateInput(input, rest) {
  const errorElement = input.parentNode.querySelector(`#${input.id}-error`)
  errorElement.textContent = input.validationMessage

  if (!input.validity.valid) {
    showInputError(errorElement, rest)
  } else {
    hideInputError(errorElement, rest)
  }
}

const setEventListeners = function (form, { formInput, ...rest }) {
  const inputList = Array.from(form.querySelectorAll(formInput))

  inputList.forEach(function (input) {
    input.addEventListener('input', function () {
      validateInput(input, rest)
      validateForm(form, rest)
    })
  })
}

const enableValidation = (parameters) => {
  const { formElement, ...rest } = parameters
  const formList = Array.from(document.querySelectorAll(formElement))

  formList.forEach((form) => {

    form.addEventListener('submit', function (evt) {
      evt.preventDefault()
    })
    setEventListeners(form, rest)
  })
}

const disableButton = (submitButton, { activeButtonClass, inactiveButtonClass }) => {
  submitButton.setAttribute('disabled', true)
  submitButton.classList.remove(activeButtonClass)
  submitButton.classList.add(inactiveButtonClass)
}

function validateForm(form, { activeButtonClass, inactiveButtonClass, buttonElement }) {
  console.log(form);
  const submitButton = form.querySelector(buttonElement)

  if (form.checkValidity(submitButton, { activeButtonClass, inactiveButtonClass })) {
    submitButton.removeAttribute('disabled')
    submitButton.classList.add(activeButtonClass)
    //submitButton.classList.remove(inactiveButtonClass)
  } else {
     submitButton.classList.add(inactiveButtonClass)
    disableButton(submitButton, { activeButtonClass, inactiveButtonClass })
  }

}

enableValidation(parameters);







function resetForm(popup, parameters) {
  const button = popup.querySelector(parameters.buttonElement);
  const errors = Array.from(popup.querySelectorAll(`.${parameters.inputErrorClass}`));
  const inputs = Array.from(popup.querySelectorAll(parameters.formInput));

  if (button) {
    button.classList.add(parameters.inactiveButtonClass);
    button.disabled = true;
    button.classList.remove(parameters.activeButtonClass)

  }

  errors.forEach((error) => {
    error.classList.remove(parameters.inputErrorClassActive);

  })

  inputs.forEach((input) => {
    input.value = '';
  })
}




