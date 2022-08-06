import { openPopup } from "./index.js";



  export class Card {
    constructor(data, selector){
      this._name = data.name;
      this._image = data.image; 
      this._alt = data.alt;
      this._selector = selector;
    }
  	_getElement() {
      const cardElement = document
        .querySelector(this._selector)
        .content
        .querySelector('.card')
        .cloneNode(true);
      return cardElement;
    }
    generateCard(){
      this._element = this._getElement();
      this._setEventListeners();
      this._image = this._element.querySelector('.card__image').src
      this._title = this._element.querySelector('.card__title').textContent
      this._alt = this._element.querySelector('.card__image').alt
      title.textContent = this._name.textContent
       return this._element
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
  
  


  }
