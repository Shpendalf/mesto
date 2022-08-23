import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector);
       
        this._selector = document.querySelector(selector); 
        this._popupImage =  this._selector.querySelector('.popup__image');
        this._popupTitle = this._selector.querySelector('.popup__title');
        console.log(this._popupImage)
  
    }
    openPopup = ({link, name}) => {
    
        this._popupImage.src = link;
        this._popupImage.alt = name;
        this._popupTitle.textContent = name;
        
        super.openPopup();
     
    }
}