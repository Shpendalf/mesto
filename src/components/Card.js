export class Card {
  constructor(
    data,
    selector,
    openPopupImage,
    openPopupDel,
    uId,
    likeAdd,
    likeRemove
  ) {
    this.elementId = data._id;
    this._selector = selector;
    this._openPopupImage = openPopupImage;
 
    this._openPopupDel = openPopupDel;
    this.userId = data.owner._id;
    this._name = data.name;
    this._image = data.link;
    this._likeAdd = likeAdd;
    this._likeRemove = likeRemove;
    this._likes = data.likes;
    this._element = this._getElement();
    this._likesCount = this._element.querySelector(".card__like-count");
    this._cardImage = this._element.querySelector(".card__image");
    this._likeButton = this._element.querySelector(".card__like-button");
    this._deleteBtn = this._element.querySelector(".card__delete");
    this._isLiked = () => !!this._likes.find(e=> e._id === uId) 
    this._isMine = this.userId === uId;
  }

  _updateLikesView() {
    this._likesCount.textContent = this._likes.length;
   
    if (this._isLiked()) {
        this._likeButton.classList.add('card__like-button_toggle')
    } else {
        this._likeButton.classList.remove('card__like-button_toggle')
    }
} 

  _getElement() {
    const cardElement = document
      .querySelector(this._selector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._cardImage = this._element.querySelector(".card__image");
    this._cardImage.src = this._image;
    this._cardImage.alt = this._name;
    this._element.querySelector(".card__title").textContent = this._name;
    this._likesCount.textContent = this._likes.length;
    this._setEventListeners();

    if (!this._isMine) {
      this._deleteBtn.remove();
    }
    if (this._isLiked()) {
      this._likeButton.classList.add("card__like-button_toggle");
    }
    return this._element;
  }
  _openBigImage = () => {
    this._openPopupImage({ link: this._image, name: this._name });
  };
  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  setLikes(data) {
    this._likes = data.likes;
    this._updateLikesView();
} 
 

  _setEventListeners() {
    this._cardImage.addEventListener("click", this._openBigImage);
    this._likeButton.addEventListener("click", () => {
      if (!this._isLiked()) {
        this._likeAdd(this);
      } else {
        this._likeRemove(this);
      }
    });
    this._deleteBtn.addEventListener("click", () => {
      this._openPopupDel(this);
    });
  }
}
