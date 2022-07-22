const parameters = {
  formElement: '.popup__form',
  formInput: '.popup__textarea',
  buttonElement: '.popup__button',
  activeButtonClass: 'popup__button_valid',
  inactiveButtonClass: 'popup__button_invalid',
  inputErrorClass: 'popup__error',
  inputErrorClassActive: 'popup__error_active'
}
const showInputError = (errorElement) => {
  errorElement.classList.add(inputErrorClass);
  errorElement.classList.add(inputErrorClassActive);
}

const hideInputError = (errorElement) => {
  errorElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(inputErrorClassActive)
  errorElement.textContent = ''
}

function validateInput(input) {
  const errorElement = input.parentNode.querySelector(`#${input.id}-error`)
  errorElement.textContent = input.validationMessage

  if (!input.validity.valid) {
    showInputError(errorElement)
  } else {
    hideInputError(errorElement)
  }
}

const setEventListeners = function (form,formInput,inactiveButtonClass, formInput, buttonElement, activeButtonClass) {
  const submitButton = form.querySelector(buttonElement);
  const inputList = Array.from(form.querySelectorAll(formInput))
  inputList.forEach(function (input) {
    input.addEventListener('input', function () {
      validateInput(input)
      validateForm(form, inactiveButtonClass, buttonElement, activeButtonClass, submitButton)
    })
  })
}

const enableValidation = ({ formElement, inactiveButtonClass, formInput, buttonElement, activeButtonClass, inputErrorClass, inputErrorClassActive }) => {
  const formList = Array.from(document.querySelectorAll(formElement))
  formList.forEach((form) => {

    form.addEventListener('submit', function (evt) {
      evt.preventDefault()
    })
    setEventListeners(form,formInput)
  })
}

function validateForm(form, inactiveButtonClass, submitButton, activeButtonClass) {
 
  if (form.checkValidity()) {
    submitButton.removeAttribute('disabled')
    submitButton.classList.add(activeButtonClass)
    submitButton.classList.remove(inactiveButtonClass)
  } else {
    submitButton.setAttribute('disabled', true)
    submitButton.classList.remove(activeButtonClass)
    submitButton.classList.add(inactiveButtonClass)

  }

}

enableValidation(parameters);


