import './index.css'
import PopupWithForm from "../components/PopupWithForm.js"
import { Card } from "../components/Card.js"
import { parameters } from "../script/consts.js"
import  FormValidator  from "../components/FormValidator.js"
import PopupWithImage from "../components/PopupWithImage.js"
import UserInfo from "../components/UserInfo.js"
import Section from '../components/Section.js'
import Api  from "../components/Api.js"
import PopupDelete from '../components/PopupDelete'
const profileButtonOpen = document.querySelector('.profile__edit-button')
const popupClasses = document.querySelectorAll('.popup')
const popupClass = document.querySelector('.popup')
const popupProfile = document.querySelector('.popup_profile')
const popupAddImg = document.querySelector('.popup_img')
const popupUserPicOpen = document.querySelector('.profile__avatar-wrapper')
const profileButtonClose = document.querySelector('.popup__close-profile')
const formElementProfile = document.querySelector('.popup__form-profile');
const formElementImg = document.querySelector('.popup__form-img')
const formElementUserPic = document.querySelector('.popup__form-avatar')
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

const popupDelete =new PopupDelete ('.popup_delete');
popupDelete.setEventListeners();
const profile = new UserInfo ('.profile__name' , '.profile__status','.profile__avatar');
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
const avatarValidate = new FormValidator(parameters, formElementUserPic)
profileValidate.enableValidation();
imgValidate.enableValidation();
avatarValidate.enableValidation()
console.log(imgValidate)
console.log(avatarValidate)
const picPopup = new PopupWithImage (popupBigImage);

function popupProfileCallback (profileValues){
  newProfilePopup.buttonLoading(true)
  const newData ={name: profileValues.profileName, 
                  about: profileValues.jobName}
                 

  newApi.setInfo(newData)
  
    .then((data) => {
      profile.setUserInfo(data)
      newProfilePopup.closePopup();
    })
    .catch(err => console.log(err))
    .finally(() => newProfilePopup.buttonLoading(false))
}
const popupImgCallback =(data) =>{
  
  renderer(data)

}
function renderer(item){
  const generatedCard = constructCard(item);
  cardsHolder.setItem(generatedCard);
}
const cardsHolder = new Section(renderer,'.elements') ;
newApi.getData().then(([initialCards,userData])=>{
  const arr = initialCards.reverse().slice(0,12)
  const data = userData 
  console.log(arr)
  profile.setUserInfo(data)
 
  cardsHolder.renderItems(arr)
 
   
}

)
const newAvatarPopup = new PopupWithForm({popupCallback:popupAvatarCallback,selector:'.popup_avatar'})
function popupAvatarCallback (i){
  newAvatarPopup.buttonLoading(true)
  //newAvatarPopup.buttonLoading(true) 
  newApi.editAvatar(i.userPic)
  .then(()=>{
    newAvatarPopup.closePopup();
    profile.setImage(i.userPic);
    
  })
  .catch((error) => {
    console.log(error ,"Ошибочка получилась")
  })
  
  
}

const newProfilePopup = new PopupWithForm({popupCallback:popupProfileCallback,selector:'.popup_profile'});
const newImgPopup= new PopupWithForm({popupCallback:popupImgCallback,selector:'.popup_img'});

newAvatarPopup.setEventListeners();
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
popupUserPicOpen.addEventListener('click',()=>{
  avatarValidate.resetForm();
  newAvatarPopup.openPopup();
})

function constructCard(data){
  console.log(data)
  const readyCard = new Card(data,'.card-template',
  ()=>{
  picPopup.openPopup.bind(picPopup),
  ()=>{
  
},
    popupDelete.openPopup(
    ()=>{
      newApi.removeCard(readyCard.elementId)
      .then(()=>{
        readyCard._deleteCard();

      })
      .catch((error) => {
        console.log("Ошибка",error)
      })
    })
},

  profile.getUserId(),
  ()=>{
    newApi.newLike(readyCard.elementId)
    .then((res)=>{
      readyCard.likes(res.likes)
    })
    .catch((error) => {
      console.log("Ошибка",error)
    })
  },
()=>{
  newApi.newDislike(readyCard.elementId)
  .then((res)=>{
    readyCard.likes(res.likes)
  })
  .catch((error) => {
    console.log("Ошибка",error)
  })
}
);

  const card= readyCard.generateCard();
  return card;
  }









