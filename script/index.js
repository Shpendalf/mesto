const openButton = document.querySelector('.profile__edit-button')
const popupClass = document.querySelector('.popup')
const closeButton = document.querySelector('.popup__close')

openButton.addEventListener('click', openPopup)
closeButton.addEventListener('click', closePopup)

function openPopup(event){
    event.preventDefault()
    popupClass.classList.add('popup_open')
    }
function closePopup(){
    popupClass.classList.remove('popup_open')
}    





/*const infoSend = document.querySelector('.popup__save')
const profileContainer = document.querySelector('.profile__wrapper')
const profName = document.querySelector('.popup__textarea-name')
const profStatus = document.querySelector('.popup__textarea-status')
function addInfo(evt) {
    evt.preventDefault();
    profileContainer.innerHTML= `
    <div class="profile__button-block">
    <p class="profile__name">${profName.value} </p>
    <button class="profile__edit-button"></button>
  </div>
  <p class="profile__status"> ${profStatus.value}</p>`;
  profName.value =' ';
  profStatus.value= ' ';
  }
  

profileContainer.addEventListener(submit,addInfo)
infoSend.addEventListener('click' ,addInfo)*/

const infoSend = document.querySelector('.popup__save');
const textName = document.querySelector ('.popup__textarea-name');
const profName = document.querySelector('.profile__name');
const textStatus = document.querySelector('.popup__textarea-status')
const profStatus = document.querySelector('.profile__status')
const formElement= document.querySelector('.profile__wrapper')

function textChange(evt){
    evt.preventDefault();
    
    profName.textContent=textName.value;
    profStatus.textContent=textStatus.value;
    textName.value="";
    textStatus.value="";
    textName.placeholder=profName.textContent;
    textStatus.placeholder=profStatus.textContent;
    profName.value="";
    profStatus.value=""   

}
infoSend.addEventListener('click' ,textChange)

formElement.addEventListener('submit', textChange); 






