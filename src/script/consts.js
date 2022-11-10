export const profileButtonOpen = document.querySelector('.profile__edit-button')
export const popupClasses = document.querySelectorAll('.popup')
export const popupProfile = document.querySelector('.popup_profile')
export const popupAddImg = document.querySelector('.popup_img')
export const popupUserPic = document.querySelector('.popup_avatar')
export const profileButtonClose = document.querySelector('.popup__close-profile')
export const formElementProfile = document.querySelector('.popup__form-profile');
export const formElementImg = document.querySelector('.popup__form-img')
export const formElementUserPic =document.querySelector('.popup__form-avatar')
export const nameInput = document.querySelector('.popup__textarea_type_name');
export const profileName = document.querySelector('.profile__name');
export const jobInput = document.querySelector('.popup__textarea_type_status');
export const profileJob = document.querySelector('.profile__status');
export const popupAddBtn = document.querySelector('.profile__add-button');
export const buttonAddImgClose = document.querySelector('.popup__close-img');
export const container = document.querySelector('.main');
export const cardsContainer = container.querySelector('.elements');
export const cardTemplate = document.querySelector('.card-template').content;
export const popupBigImage = document.querySelector('.popup_bigimage');
export const bigImageClose = document.querySelector('.popup__close-bigimg')
export const bigImage = popupBigImage.querySelector('.popup__image')
export const bigImageTitle = popupBigImage.querySelector('.popup__title')
export const submitButtons = document.querySelectorAll('.popup__button')
//export const readyCards = [{

  //title: 'Архыз',
 // img: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//},
//{
 // title: 'Челябинская область',
  //img: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
//},
//{
  //title: 'Иваново',
  //img: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//},
//{
  //title: 'Камчатка',
  //img: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//},
//{
 // title: 'Холмогорский район',
  //img: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//},
//{
  //title: 'Байкал',
  //img: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//}
//];

export const parameters = {
    formElement: '.popup__form',
    formInput: '.popup__textarea',
    buttonElement: '.popup__button',
    activeButtonClass: 'popup__button_valid',
    inactiveButtonClass: 'popup__button_invalid',
    inputErrorClass: 'popup__error',
    inputErrorClassActive: 'popup__error_active'
  }