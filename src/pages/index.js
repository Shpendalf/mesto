import './index.css'
import PopupWithForm from "../components/PopupWithForm.js"
import { Card } from "../components/Card.js"
import { parameters } from "../script/consts.js"
import  FormValidator  from "../components/FormValidator.js"
import PopupWithImage from "../components/PopupWithImage.js"
import UserInfo from "../components/UserInfo.js"
import Section from '../components/Section.js'
import Api  from "../components/Api.js"
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


const profile = new UserInfo ('.profile__name' , '.profile__status');
const API_CONFIG ={
  url:'https://mesto.nomoreparties.co/v1/cohort-52',
 
  header: {
    'Content-Type':'application/json',
    authorization: '4e36934d-55ef-443b-ad3e-0396853ad963'
  }
}
const newApi = new Api(API_CONFIG);
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
const data = newApi.getInitialCards().then((data) => {
  console.log(data);
  const items = data.slice(0,12);
  return items
  
}) 
const getData = async() => {
  const i = await data;
  return i;

}
console.log(getData)

const newProfilePopup = new PopupWithForm({popupCallback:popupProfileCallback,selector:'.popup_profile'});
const newImgPopup= new PopupWithForm({popupCallback:popupImgCallback,selector:'.popup_img'});
profileButtonOpen.addEventListener('click', ()=> {
  profileValidate.resetForm()
 
    newProfilePopup.setValues(profile.getUserInfo())
   
    newProfilePopup.openPopup()
    
    })
    newProfilePopup.setEventListeners()

profileButtonClose.addEventListener('click',()=> newProfilePopup.closePopup())

popupAddBtn.addEventListener('click',() => {
  imgValidate.resetForm()
  

  newImgPopup.openPopup()})

buttonAddImgClose.addEventListener('click',() =>{newImgPopup.closePopup()
})
newImgPopup.setEventListeners()

//newProfilePopup.setEventListeners()
//newImgPopup.setEventListeners()

picPopup.setEventListeners()


function constructCard(item){
  const readyCard = new Card(item,'.card-template',picPopup.openPopup.bind(picPopup));
  const card= readyCard.generateCard();
  return card;
  }
function renderer(item){
  const generatedCard = constructCard(item);
  cardsHolder.setItem(generatedCard);
}

const cardsHolder = new Section({data:getData,renderer },'.elements', newApi) ;
cardsHolder.renderItems();



