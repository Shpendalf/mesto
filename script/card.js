import { openPopup } from "./index.js";
import { bigImage, popupBigImage }  from'./consts.js';
import { bigImageTitle } from "./consts.js";

 
  export class Card {
    constructor(data, selector){
      this._name = data.name;
      this._image = data.link; 
      
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
    
       this._element.querySelector('.card__image').src = this._image 
       this._element.querySelector('.card__title').textContent= this._name
      this._setEventListeners();
     
         
       return this._element
    }
    _openBigImage(){
      bigImage.src=this._element.querySelector('.card__image').src
 
      bigImageTitle.textContent=this._element.querySelector('.card__title').textContent;
      openPopup(popupBigImage);
      }
  _setEventListeners(){
    this._element.querySelector('.card__like-button').addEventListener('click',()=>{ this._likeToggle();})

    this._element.querySelector('.card__delete').addEventListener('click', () => {this._deleteCard();})
    this._element.querySelector('.card__image').addEventListener('click',()=>{this._openBigImage();})
    }
  _likeToggle(){
    this._element.querySelector('.card__like-button').classList.toggle('card__like-button_toggle')
  }
  _deleteCard(){
    this._element.remove();
  }
 
  
  
  


  }
