import PopupWithForm from "./PopupWithForm.js"
import { Card } from "./Card.js"
import { parameters } from "./consts.js"
import  FormValidator  from "./FormValidator.js"
import PopupWithImage from "./PopupWithImage.js"
import UserInfo from "./UserInfo.js"

import Section from './Section.js'
const profileButtonOpen = document.querySelector('.profile__edit-button')
const popupClasses = document.querySelectorAll('.popup')
const popupClass = document.querySelector('.popup')
const popupProfile = document.querySelector('.popup_profile')
const popupAddImg = document.querySelector('.popup_img')
const profileButtonClose = document.querySelector('.popup__close-profile')
const formElementProfile = document.querySelector('.popup__form-profile');
const formElementImg = document.querySelector('.popup__form-img')
const nameInput = document.querySelector('.popup__textarea_type_name');
const profileName = document.querySelector('.profile__name');
const jobInput = document.querySelector('.popup__textarea_type_status');
const profileJob = document.querySelector('.profile__status');
const popupAddBtn = document.querySelector('.profile__add-button');
const buttonAddImgClose = document.querySelector('.popup__close-img');
const container = document.querySelector('.main');
const cardsContainer = container.querySelector('.elements');
const cardTemplate = document.querySelector('.card-template');
const popupBigImage = ('.popup_bigimage');
const bigImageClose = document.querySelector('.popup__close-bigimg')
//const bigImage = popupBigImage.querySelector('.popup__image')
//const bigImageTitle = popupBigImage.querySelector('.popup__title')
const submitButtons = document.querySelectorAll('.popup__button')
const formTitle = document.querySelector('.popup__textarea_img-title')
const formLink = document.querySelector('.popup__textarea_link')

const readyCards = [{

  name: 'Архыз',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
},
{
  name: 'Челябинская область',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
},
{
  name: 'Иваново',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
},
{
  name: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
},
{
  name: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
},
{
  name: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}
];
const profile = new UserInfo ('profile__name', 'profile__status')
const profileValidate = new FormValidator(parameters, formElementProfile);
const imgValidate = new FormValidator(parameters, formElementImg);
profileValidate.enableValidation();
imgValidate.enableValidation();

const picPopup = new PopupWithImage (popupBigImage);

const popupProfileCallback = (target) =>{
  profile.setUserInfo(target)
}
const popupImgCallback =(data) =>{
  renderer(data)
 
}


const newProfilePopup = new PopupWithForm({popupCallback:popupProfileCallback,selector:'.popup_profile'});
const newImgPopup= new PopupWithForm({popupCallback:popupImgCallback,selector:'.popup_img'});
newProfilePopup._getInputValues();
newImgPopup._getInputValues();
newProfilePopup.setEventListeners()
newImgPopup.setEventListeners()
//function prependCard(e){
  //cardsContainer.prepend(e)
//}
picPopup.setEventListeners()
function constructCard(item){
  const readyCard = new Card(item,'.card-template',picPopup.openPopup.bind(picPopup));
  const card= readyCard.generateCard();
  return card;
  }
function renderer(item){
  const generatedCard = constructCard(item);
  cardsHolder.setItem(generatedCard);
  console.log(item)
}

const cardsHolder = new Section({data:readyCards,renderer },'.elements') ;
cardsHolder.renderItems();

export const openPopup = (popup) => {
 
  popup.classList.add('popup_open');
  document.addEventListener('keydown', closeOnKeydown)
  //submitButtons.forEach((button) => {
  // disableButton(button, parameters)
  // })


}
 


//readyCards.forEach(function(item){
  //const i = constructCard(item)
  //prependCard(i);

//})
function createCard() {
  const card = {
      link:formLink.value,
      
      name:formTitle.value,
  }
  return card;
};








  // function renderCard(){
   
    //const readyCard = new Card (createCard(),'.card-template');
    //const card = readyCard.generateCard();
    //prependCard(card)
  //}
   


//const closePopup = (popup) => {
  //popup.classList.remove('popup_open');
  //document.removeEventListener('keydown', closeOnKeydown)

//}

const closeOnKeydown = (e) => {

  if (e.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_open')
    closePopup(openedPopup)
  }
}



  //cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
   // evt.target.classList.toggle('card__like-button_toggle');
  //});
  //cardElement.querySelector('.card__delete').addEventListener('click', function () {
   // cardElement.remove();

  //});

 // cardImage.addEventListener('click', openBigImage)
 // return cardElement
//}
//function renderCard(sourceValue, titleValue) {
 // const cardElement = createCard(sourceValue, titleValue)
 // prependToContainer(cardsContainer, cardElement);
//}

function openProfilePopup() {
  openPopup(popupProfile);
  
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  
}

function openPopupAdd(event) {
  openPopup(popupAddImg);
}


function changeProfile(evt) {
  evt.preventDefault()
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile)
 
}
//function submitCard(evt) {
  //const card = createCard()
  //const createdCard = constructCard(card)
  //evt.preventDefault()
  //prependCard(createdCard);
  
  //closePopup(popupAddImg);
//  
//};




function closeOnclick(e) {
  if (e.target !== e.currentTarget) return;
  else { closePopup(e.currentTarget) }
}

//formElementImg.addEventListener('submit', submitCard)
//formElementProfile.addEventListener('submit', changeProfile);
profileButtonOpen.addEventListener('click', () => { 
  openProfilePopup()
 
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
   
})
popupAddBtn.addEventListener('click', () => { 
  openPopupAdd(), 
  imgValidate.resetForm()
  formLink.value ='',
      
  formTitle.value= ''
})
//profileButtonClose.addEventListener('click', () => { closePopup(popupProfile),profileValidate.resetForm() })
buttonAddImgClose.addEventListener('click', () => { closePopup(popupAddImg) })
//bigImageClose.addEventListener('click', () => { closePopup(popupBigImage) })
//popupBigImage.addEventListener('click', closeOnclick)
popupProfile.addEventListener('click', closeOnclick)
popupAddImg.addEventListener('click', closeOnclick)


