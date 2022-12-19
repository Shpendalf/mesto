export default class Popup{
    constructor(selector){
        this._popupElement = document.querySelector(selector);
        this._closeOnKeydown = this._closeOnKeydown.bind(this)
        this.closeOnclick = this.closeOnclick.bind(this)
        
     
    }
 
     
     _closeOnKeydown = (e) => {

        if (e.key === 'Escape') {
            e.preventDefault();
            this.closePopup(); 
        }
      }
      closeOnclick = (e) => {
      
        if ( (e.target  === e.currentTarget) || (e.target.classList.contains('popup__close'))){
          this.closePopup() 
        } ;
      
      } 
      openPopup  () {
       
        this._popupElement.classList.add('popup_open');
        document.addEventListener('keydown', this._closeOnKeydown)

    }

     closePopup  () {
     
        this._popupElement.classList.remove('popup_open')
        document.removeEventListener('keydown',this._closeOnKeydown)
     }
       


      setEventListeners(){
 
        this._popupElement.addEventListener('click', this.closeOnclick)

      }
      
}
