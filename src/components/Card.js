
import { bigImage, popupBigImage } from '../script/consts.js';
import { bigImageTitle } from "../script/consts.js";


export class Card {
  constructor(data, selector ,openPopupImage) {
    this._openPopupImage = openPopupImage
    this._name = data.title;
    this._image = data.img;

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

  generateCard() {
    this._element = this._getElement();
    this._cardImage =this._element.querySelector('.card__image')
    this._cardImage.src = this._image
    this._cardImage.alt = this._name
    this._element.querySelector('.card__title').textContent = this._name
    this._setEventListeners();


    return this._element
  }

  //_openBigImage() {
   // bigImage.src = this._image
    //bigImageTitle.textContent = this._name
    //bigImage.alt = this._name
    //openPopup(popupBigImage);
    
  //}
  _openBigImage = () => {
    this._openPopupImage({link:this._image,name: this._name})
    console.log(this._image)
    console.log(this._name)
  }
  _setEventListeners() {
    this._likeButton = this._element.querySelector('.card__like-button')
    this._likeButton.addEventListener('click', () => { this._likeToggle(); })
    this._element.querySelector('.card__delete').addEventListener('click', () => { this._deleteCard(); })
    this._cardImage.addEventListener('click', this._openBigImage)
  }
  _likeToggle() {
    this._likeButton.classList.toggle('card__like-button_toggle')
  }
  _deleteCard() {
    this._element.remove();
  }






}
