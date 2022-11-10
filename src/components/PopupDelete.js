import Popup from "./Popup.js"

export default class PopupDelete extends Popup{
    constructor(selector){
        super(selector)
        this._formElement = this._popupElement.querySelector(".popup__form");
        this._button = this._popupElement.querySelector(".popup__save");
    }
openPopup(deleteCallback){
        super.openPopup()
        this._deleteCallback = deleteCallback
 }
setEventListeners(){
    super.setEventListeners();
    this._formElement.addEventListener('submit',(e)=>{
        e.preventDefault();
        this._deleteCallback();
        this.closePopup();
    })

}

}