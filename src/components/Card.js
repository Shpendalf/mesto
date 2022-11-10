


export class Card {
  constructor(data, selector ,openPopupImage, openPopup, ownerId, likeAdd, likeRemove) {
    this._selector = selector;
    this._openPopup = openPopup
    this._openPopupImage = openPopupImage
    this._name = data.name;
    this._image = data.link;
    this.elementId = data._id;
    this._likes = data.likes;
    this.ownerId = ownerId;
    this.likeAdd = likeAdd;
    this.likeRemove = likeRemove;
    this._element = this._getElement();
    this._likes = data.likes;
    this._likeButton = this._element.querySelector('.card__like-button');
    this._likesCount =  this._element.querySelector('.card__like-count')
    
    this._deleteBtn = this._element.querySelector('.card__delete');
  }

  _isMine(){
    return this._likes.some((user)=>{return user._id === this.ownerId})

  }
   _isLiked(){
   
    if (this._isMine()===true){
      this.likeButton.classList.Add('card__like-button_toggle');
    } else {
      this._likeButton.classList.remove('card__like-button_toggle');
      
    }
    this._likesCount.textContent = this._likes.length;

 
}
 
checkID(){
    this._isLiked();
    if (this.ownerId !== this.id){
      this._deleteBtn.remove()
    }
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
    this.checkID();
    //this._likesnumber = this._element.querySelector('')
    this._cardImage =this._element.querySelector('.card__image')
    this._cardImage.src = this._image
    this._cardImage.alt = this._name
    this._element.querySelector('.card__title').textContent = this._name;
    
    this._setEventListeners();
    

    return this._element
  }

 
  _
  //likeCard(e){
   // this._likeButton.classList.add('card__like-button_toggle');
    //this._likecheck = true;
    //this._li
  //}
  //dislikeCard(e)
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
    this._cardImage.addEventListener('click', this._openBigImage)
    this._likeButton.addEventListener('click',this._isLiked)
    this._deleteBtn.addEventListener('click',this._openPopup)
  }
  
  _deleteCard() {
    this._element.remove();
    this._element.null()
  }






}
