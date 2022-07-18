const parameters = {
  formElement: '.popup__form',
  formInput: '.popup__textarea',
  buttonElement: '.popup__button',
  activeButtonClass: 'popup__button_valid',
  inactiveButtonClass: 'popup__button_invalid',
  inputErrorClass: 'popup__error',
  inputErrorClassActive: 'popup__error_active'
}

const enableValidation = ({ formElement, activeButtonClass, inactiveButtonClass, inputErrorClass, inputErrorClassActive, ...rest }) => {
  const formList = Array.from(document.querySelectorAll(formElement))
  formList.forEach((formElement) => {
    formElement.addEventListener('input', handlerInputForm)
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault()
    })
    function validateForm(form) {
      const submitButton = form.querySelector('.popup__button');
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
    const showInputError = (e) => {
      e.classList.add(inputErrorClass);
      e.classList.add(inputErrorClassActive);
    }

    const hideInputError = (e) => {
      e.classList.remove(inputErrorClass);
      e.classlist.remove(inputErrorClassActive);
      errorElement.textContent = ('')
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
    function handlerInputForm(e) {
      const curentForm = e.currentTarget;
      validateForm(curentForm);
      validateInput(e.target)
    }
  })
}
enableValidation(parameters);
