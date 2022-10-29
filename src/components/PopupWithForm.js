import Popup from "./Popup.js"

export default class PopupWithForm extends Popup{
    constructor({selector,  popupCallback, newApi}){
        super(selector);
    this.popupCallback = popupCallback;
    this._formElement = this._popupElement.querySelector(".popup__form");
    this._inputs = Array.from(this._popupElement.querySelectorAll(".popup__textarea"))
    this._api = newApi;
   
}

_getInputValues(){
    this._values = {};
    this._inputs.forEach (input=>{this._values[input.name] = input.value})
    
    return this._values;
}

setValues (data) {
    Object.keys(data).forEach (key => {
        const addinputs = this._inputs.find(item => item.name == key);
        addinputs.value = data[key]
    })
}
openPopup(){
    super.openPopup();
    
}

closePopup(){
   
    
    
    
    super.closePopup();
    this._formElement.reset()
}

setEventListeners(){
    super.setEventListeners();
    

    this._formElement.addEventListener('submit',(e) => {
        e.preventDefault();
        this.popupCallback(this._getInputValues());
         this.closePopup()
        })
    
}

}