const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__error_active');
  };
  
  const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));
  
  fieldsetList.forEach((fieldSet) => {
    setEventListeners(fieldSet);
  }); 
    });
  };
      
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__error');
    errorElement.classList.remove('popup__error_active');
    errorElement.textContent = '';
  };
  
  const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };
  
  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__textarea'));
    const buttonElement = formElement.querySelector('.popup__textarea');
  
    // чтобы проверить состояние кнопки в самом начале
    toggleButtonState(inputList, buttonElement);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        // чтобы проверять его при изменении любого из полей
        toggleButtonState(inputList, buttonElement);
      });
    });
  }; 
   
  function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  }); 
  }
  function toggleButtonState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__button_invalid');
  } else {
    buttonElement.classList.remove('popup__button_valid');
  } 
  }
  
  enableValidation();
  