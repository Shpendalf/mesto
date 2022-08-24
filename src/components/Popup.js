export default class Popup{
    constructor(selector){
        this._selector = document.querySelector(selector);
        this._closeOnKeydown = this._closeOnKeydown.bind(this)
        this.closeOnclick = this.closeOnclick.bind(this)
        
        this.setEventListeners();
        console.log(this._selector)
    }
 
     
     _closeOnKeydown = (e) => {

        if (e.key === 'Escape') {
            e.preventDefault();
            this.closePopup(); 
        }
      }
      closeOnclick = (e) => {
        console.log(e.target)
        if ( (e.target  === e.currentTarget) || (e.target.classList.contains('popup__close'))){
          this.closePopup() 
        } ;
      
      } 
      openPopup  () {
        console.log(this._selector)
        this._selector.classList.add('popup_open');
        document.addEventListener('keydown', this._closeOnKeydown)

    }

     closePopup  () {
     
        this._selector.classList.remove('popup_open')
        document.removeEventListener('keydown',this._closeOnKeydown)
     }
       


      setEventListeners(){
 
        this._selector.addEventListener('click', this.closeOnclick)

      }
      
}
