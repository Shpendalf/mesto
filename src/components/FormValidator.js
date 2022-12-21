export default class FormValidator {
  constructor(parameters, checkForm) {
    this._parameters = parameters;
    this._checkForm = checkForm;
  }

  toggleButtonState() {
    if (this._checkForm.checkValidity()) {
      this._activeButton();
    } else {
      this._inactiveButton();
    }
  }

  _activeButton() {
    this._submitButton.disabled = false;
    this._submitButton.classList.add(this._parameters.activeButtonClass);
    this._submitButton.classList.remove(this._parameters.inactiveButtonClass);
  }
  _inactiveButton() {
    this._submitButton.disabled = true;
    this._submitButton.classList.add(this._parameters.inactiveButtonClass);
    this._submitButton.classList.remove(this._parameters.activeButtonClass);
  }

  resetErrors () {
    this._inactiveButton();

    this._inputList.forEach((input) => {
      const errorElement = this._checkForm.querySelector(`#${input.id}-error`);
      this._hideInputError(errorElement);
    });
  }
  _showInputError(errorElement) {
    errorElement.classList.add(this._parameters.inputErrorClassActive);
  }

  _hideInputError(errorElement) {
    errorElement.classList.remove(this._parameters.inputErrorClassActive);
    errorElement.textContent = "";
  }

  _validateInput(input) {
    const errorElement = this._checkForm.querySelector(`#${input.id}-error`);
    errorElement.textContent = input.validationMessage;

    if (!input.validity.valid) {
      this._showInputError(errorElement);
    } else {
      this._hideInputError(errorElement);
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(
      this._checkForm.querySelectorAll(this._parameters.formInput)
    );
    this._submitButton = this._checkForm.querySelector(
      this._parameters.buttonElement
    );
    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._validateInput(input);
        this.toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListeners();

  }
}
