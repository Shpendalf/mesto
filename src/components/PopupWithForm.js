import Popup from "./Popup.js"

export default class PopupWithForm extends Popup{
    constructor({selector,  popupCallback}){
        super(selector);
    this.popupCallback = popupCallback;
  
    this._inputs = Array.from(this._selector.querySelectorAll(".popup__textarea"))
   
   
}

_getInputValues(){
    this._values = {};
    this._inputs.forEach (input=>{this._values[input.name] = input.value})
    
    return this._values;
}
openPopup(){
    super.openPopup();
    
}

closePopup(){
   
    
    
    
    super.closePopup();
     
}

setEventListeners(){
    super.setEventListeners();
    
    this._formElement = this._selector.querySelector(".popup__form");
    this._formElement.addEventListener('submit',(e) => {
        e.preventDefault();
        this.popupCallback(this._getInputValues());
         this.closePopup()
        })
    
}

}