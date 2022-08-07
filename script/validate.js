export default class Validate{
  constructor(parameters, validateForm){
    this._parameters = parameters;
    this._validateForm = validateForm;
  }
 


_showInputError(errorElement, ){
  errorElement.classList.add(this._parameters.inputErrorClass);
  errorElement.classList.add(this._parameters.inputErrorClassActive);
}

 _hideInputError (errorElement,   ){
  errorElement.classList.remove(this._parameters.inputErrorClass);
  errorElement.classList.remove(this._parameters.inputErrorClassActive);
  errorElement.textContent = '';
}

 _validateInput(input, parameters){
  const errorElement = input.parentNode.querySelector(`#${input.id}-error`);
  errorElement.textContent = input.validationMessage;

  if (!input.validity.valid) {
    this._showInputError(errorElement,  parameters );
  } else {
    this._hideInputError(errorElement,  parameters );
  }
}
_validateForm(form,  parameters) {
  console.log(form);
  const submitButton = form.querySelector(parameters.buttonElement)

  if (form.checkValidity(submitButton,  parameters )) {
    submitButton.removeAttribute('disabled')
    submitButton.classList.add(parameters.activeButtonClass)
    //submitButton.classList.remove(inactiveButtonClass)
  } else {
     submitButton.classList.add(parameters.inactiveButtonClass)
    this._disableButton(submitButton,  parameters )
  }
 
}
_setEventListeners (form,   parameters) {
  const inputList = Array.from(form.querySelectorAll(parameters.formInput))
  inputList.forEach((input)=>{
     input.addEventListener('input',() => {
     this._validateInput(input, parameters);
     this._validateForm(form, parameters);
    })
  })
}


_disableButton(submitButton,  parameters ){
  submitButton.setAttribute('disabled', true)
  submitButton.classList.remove(parameters.activeButtonClass)
  submitButton.classList.add(parameters.inactiveButtonClass)
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






