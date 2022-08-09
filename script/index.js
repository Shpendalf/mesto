import { Card } from "./card.js"
import { parameters } from "./consts.js"
import  FormValidator  from "./FormValidator.js"


const profileButtonOpen = document.querySelector('.profile__edit-button')
const popupClasses = document.querySelectorAll('.popup')
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
const popupBigImage = document.querySelector('.popup_bigimage');
const bigImageClose = document.querySelector('.popup__close-bigimg')
const bigImage = popupBigImage.querySelector('.popup__image')
const bigImageTitle = popupBigImage.querySelector('.popup__title')
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

const profileValidate = new FormValidator(parameters, formElementProfile);
const imgValidate = new FormValidator(parameters, formElementImg);
profileValidate.enableValidation();
imgValidate.enableValidation();


function prependCard(e){
  cardsContainer.prepend(e)
}




export const openPopup = (popup) => {
 
  popup.classList.add('popup_open');
  document.addEventListener('keydown', closeOnKeydown)
  //submitButtons.forEach((button) => {
  // disableButton(button, parameters)
  // })


}
 
function constructCard(item){
  const readyCard = new Card(item,'.card-template');
  const card= readyCard.generateCard();
  return card;
  }

readyCards.forEach(function(item){
  const i = constructCard(item)
  prependCard(i);

})
function createCard() {
  const card = {
      link:formLink.value,
      
      name:formTitle.value,
  };
  return card;
};








  // function renderCard(){
   
    //const readyCard = new Card (createCard(),'.card-template');
    //const card = readyCard.generateCard();
    //prependCard(card)
  //}
   


const closePopup = (popup) => {
  popup.classList.remove('popup_open');
  document.removeEventListener('keydown', closeOnKeydown)

}

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
function submitCard(evt) {
  const card = createCard()
  const createdCard = constructCard(card)
  evt.preventDefault()
  prependCard(createdCard);
  closePopup(popupAddImg)
 
};




function closeOnclick(e) {
  if (e.target !== e.currentTarget) return;
  else { closePopup(e.currentTarget) }
}

formElementImg.addEventListener('submit', submitCard)
formElementProfile.addEventListener('submit', changeProfile);
profileButtonOpen.addEventListener('click', () => { 
  openProfilePopup()
 
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
   
})
popupAddBtn.addEventListener('click', () => { 
  openPopupAdd(), 
  imgValidate.resetForm()
  
})
profileButtonClose.addEventListener('click', () => { closePopup(popupProfile),profileValidate.resetForm() })
buttonAddImgClose.addEventListener('click', () => { closePopup(popupAddImg) })
bigImageClose.addEventListener('click', () => { closePopup(popupBigImage) })
popupBigImage.addEventListener('click', closeOnclick)
popupProfile.addEventListener('click', closeOnclick)
popupAddImg.addEventListener('click', closeOnclick)


