
export class Validate{
  constructor(parameters, validateForm){
    this._parameters = parameters;
    this._validateForm = validateForm;
  }
 


_showInputError(errorElement,  inputErrorClass, inputErrorClassActive ){
  errorElement.classList.add(inputErrorClass);
  errorElement.classList.add(inputErrorClassActive);
}

 _hideInputError (errorElement,  inputErrorClass, inputErrorClassActive ){
  errorElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(inputErrorClassActive)
  errorElement.textContent = ''
}

_validateInput(input, parameters){
  const errorElement = input.parentNode.querySelector(`#${input.id}-error`)
  errorElement.textContent = input.validationMessage

  if (!input.validity.valid) {
    _showInputError(errorElement, parameters)
  } else {
    _hideInputError(errorElement, parameters)
  }
}

_setEventListeners (form,  formInput, parameters) {
  const inputList = Array.from(form.querySelectorAll(formInput))

  inputList.forEach(function (input) {
    input.addEventListener('input', function () {
      _validateInput(input, parameters)
      _validateForm(form, parameters)
    })
  })
}



_disableButton(submitButton,  activeButtonClass, inactiveButtonClass ){
  submitButton.setAttribute('disabled', true)
  submitButton.classList.remove(activeButtonClass)
  submitButton.classList.add(inactiveButtonClass)
}

_validateForm(form,  activeButtonClass, inactiveButtonClass, buttonElement ) {
  console.log(form);
  const submitButton = form.querySelector(buttonElement)

  if (form.checkValidity(submitButton,  activeButtonClass, inactiveButtonClass )) {
    submitButton.removeAttribute('disabled')
    submitButton.classList.add(activeButtonClass)
    //submitButton.classList.remove(inactiveButtonClass)
  } else {
     submitButton.classList.add(inactiveButtonClass)
    _disableButton(submitButton,  activeButtonClass, inactiveButtonClass )
  }
 
}
enableValidation(){
  const parameters = this._parameters
  const formList = Array.from(document.querySelectorAll(parameters.formElement))

  formList.forEach((form) => {

    form.addEventListener('submit', function (evt) {
      evt.preventDefault()
    })
    this._setEventListeners(this._validateForm, this._parameters)
  })
}
}






