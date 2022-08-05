

export const parameters = {
    formElement: '.popup__form',
    formInput: '.popup__textarea',
    buttonElement: '.popup__button',
    activeButtonClass: 'popup__button_valid',
    inactiveButtonClass: 'popup__button_invalid',
    inputErrorClass: 'popup__error',
    inputErrorClassActive: 'popup__error_active'
  }

  export default class Card {
    constructor(name, image, selector){
      this._name = name;
      this._image = image 
      this._selector = selector
    }
    _getElement (){
      const cardElement = 
      document.querySelector(this._selector)
      .content
      .querySelector('.card')
      .cloneNode('true'); 

      this._element = cardElement;
    }
  _setEventListeners(){
    this._element.querySelector('.card__like-button').addEventListener('click',()=>{ this._likeToggle})
    this._element._querySelector('.card__delete').addEventListener('click', function () {
      this._element.remove();
      this._image.addEventListener('click',()=>{this._openBigImage})
      })
  }
  _likeToggle(){
    this._element.querySelector('.card__like-button').classList.toggle('.card__Like-button_toggle')
  }
  _openBigImage(){
  bigImage.src=this._image.src;
  bigImage.alt=this._image.textContent;
  bigImageTitle.textContent=this._element.querySelector('.popup__title').textContent;
  openPopup(popupBigImage);
  }
  
  generateCard(){
    this._element = this._getElement
    this._image.src = this._link;
    this._image.textContent = this._name.textContent
     return this._element
  }


  }
