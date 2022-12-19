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
const profile = new UserInfo ('.profile__name' , '.profile__status', '.profile__avatar');
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



function popupImgCallback (data) {
   newImgPopup.buttonLoading(true);
   newApi.createCards(data)
   .then((res)=>{
    renderer(res)
   })
   .catch((err)=>
   console.log(err)
   )
   .finally(()=>
   newImgPopup.buttonLoading(false))
 
  }
  
function renderer(data){
  const readyCard = constructCard(data);
  cardsHolder.setItem(readyCard);
}
const cardsHolder = new Section(renderer,'.elements') ;
newApi.getData().then(([userData,initialCards])=>{
  const arr = initialCards.reverse().slice(0,12)
  const data = userData 
  profile.getUserId(userData._id);
  console.log(profile.uId)
  profile.setUserInfo(data)
  cardsHolder.renderItems(arr)
 
   
}

)
const newAvatarPopup = new PopupWithForm('.popup_avatar',(data) => {
  newAvatarPopup.buttonLoading(true)

  newApi.editAvatar(data.userPic)
  .then(()=>{
   
    profile.setImage(data.userPic);
    newAvatarPopup.closePopup();
  })
  .catch((error) => {
    console.log(error ,"Ошибочка получилась")
  })
  
  
})
 

const newProfilePopup = new PopupWithForm('.popup_profile',  (profileValues) => {
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
});
const newImgPopup= new PopupWithForm('.popup_img',popupImgCallback);

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

function constructCard(data) {
  const readyCard = new Card(data,

    '.card-template',

      () => {
        picPopup.openPopup({
              name: data.name,
              link: data.link
          })
      },

     
      () => {
        popupDelete.openPopup(
    
              () => {
                newApi.removeCard(readyCard.elementId)
                .then(()=>{
                  readyCard._deleteCard();
          
                })
                .catch((error) => {
                  console.log("Ошибка",error)
                })
              })
      },

     profile.uId,
     
      
      () => {
          newApi.newLike(readyCard.elementId)
              .then((res) => {
                readyCard.setLike(res.likes.length);
           
              })
              .catch((error) => {
                  console.log(error)
              })
      },

     
      () => {
          newApi.newDislike(readyCard.elementId)
              .then((res) => {
                readyCard.setDisLike(res.likes.length);
                 
              })
              .catch((error) => {
                  console.log(error)
              })
      }
  );
  return readyCard.generateCard();
}











