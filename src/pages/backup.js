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
const popupUserPicOpen = document.querySelector('.profile__avatar-wrapper')
const profileButtonClose = document.querySelector('.popup__close-profile')
const formElementProfile = document.querySelector('.popup__form-profile');
const formElementImg = document.querySelector('.popup__form-img')
const formElementUserPic = document.querySelector('.popup__form-avatar')
const popupAddBtn = document.querySelector('.profile__add-button');
const buttonAddImgClose = document.querySelector('.popup__close-img');
const popupBigImage = ('.popup_bigimage');


const popupDelete =new PopupDelete ('.popup_delete');

const picPopup = new PopupWithImage (popupBigImage);
popupDelete.setEventListeners();
const profile = new UserInfo ('.profile__name' , '.profile__status','.profile__avatar');
const API_CONFIG ={
  url:'https://mesto.nomoreparties.co/v1/cohort-54',
 
  header: {
    'Content-Type':'application/json',
    authorization: '6917eef1-c60d-42ac-9940-6a24a3f42d99'
  }
}
const newApi = new Api(API_CONFIG);
const profileValidate = new FormValidator(parameters, formElementProfile);
const imgValidate = new FormValidator(parameters, formElementImg);
const avatarValidate = new FormValidator(parameters, formElementUserPic)
profileValidate.enableValidation();
imgValidate.enableValidation();
avatarValidate.enableValidation()


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
  profile.setUserInfo(data)
  cardsHolder.renderItems(arr)
 
   
}

)
const newAvatarPopup = new PopupWithForm({popupCallback:(data) => {
  newAvatarPopup.buttonLoading(true)

  newApi.editAvatar(data.userPic)
  .then(()=>{
   
    profile.setImage(data.userPic);
    newAvatarPopup.closePopup();
  })
  .catch((error) => {
    console.log(error ,"Ошибочка получилась")
  })
  
  
},selector:'.popup_avatar'})
 

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

newProfilePopup.setEventListeners()
newImgPopup.setEventListeners()

picPopup.setEventListeners()
popupUserPicOpen.addEventListener('click',()=>{
  avatarValidate.resetForm();
  newAvatarPopup.openPopup();
})

function constructCard(data){

  const readyCard = new Card(data,'.card-template',
  ()=>{
  picPopup.openPopup({
    name:data.name,
    link:data.link,
   
  })},
  ()=>{ popupDelete.openPopup(
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
   


  profile.getUserId(data._id),
 
  
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

    
  return readyCard.generateCard()
  }









