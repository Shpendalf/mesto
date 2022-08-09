export default class FormValidator{
  constructor(parameters, checkForm){
    this._parameters = parameters;
    this._checkForm = checkForm;
  }
_toggleButtonState(button, isActive,) {
  if (isActive) {
    
      button.disabled = false;
      button.classList.add(this._parameters.activeButtonClass)
      button.classList.remove(this._parameters.inactiveButtonClass)
  } else {
      button.disabled = true;
      button.classList.add(this._parameters.inactiveButtonClass)
      button.classList.remove(this._parameters.activeButtonClass)
  }
}

resetForm( ){
  
  this._inputList.forEach((input) => {
    input.value = '';
  })

}
_showInputError(errorElement, ){
  
  errorElement.classList.add(this._parameters.inputErrorClassActive);
}

 _hideInputError (errorElement,   ){
  
  errorElement.classList.remove(this._parameters.inputErrorClassActive);
  errorElement.textContent = '';
}

 _validateInput(input, ){
  const errorElement = this._checkForm.querySelector(`#${input.id}-error`);
  errorElement.textContent = input.validationMessage;

  if (!input.validity.valid) {
    this._showInputError(errorElement,  );
  } else {
    this._hideInputError(errorElement,  );
  }
}
//_validateForm(form,  parameters){

 // const submitButton = form.querySelector(parameters.buttonElement)
 // _toggleButtonState(submitButton, isActive)
  //if (form.checkValidity(submitButton,  parameters )) {
    
  //  submitButton.classList.add(parameters.activeButtonClass)
   // submitButton.classList.remove(inactiveButtonClass)
  //} else {
   //  submitButton.classList.add(parameters.inactiveButtonClass)
   // this._disableButton(submitButton,  parameters )
  //}
 
//}

_setEventListeners ( ) {
  this._inputList = Array.from(this._checkForm.querySelectorAll(this._parameters.formInput))
  const submitButton = this._checkForm.querySelector(this._parameters.buttonElement)
  this._inputList.forEach((input)=>{
     input.addEventListener('input',() => {
     this._validateInput(input, this._parameters);
    // this._validateForm(form, this._parameters);
     this._toggleButtonState(submitButton, this._checkForm.checkValidity(),this._parameters);
    })
  })
}

enableValidation(){
    
    this._setEventListeners()
    //this._checkForm.addEventListener('submit', (event) => {    
  // event.preventDefault();
  //})
 }
}




