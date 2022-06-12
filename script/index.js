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

const openButton = document.querySelector('.profile__edit-button')
const popupClass = document.querySelector('.popup')
const closeButton = document.querySelector('.popup__close')
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__textarea_type_name');
const profName = document.querySelector('.profile__name');
const jobInput = document.querySelector('.popup__textarea_type_status')
const profStatus = document.querySelector('.profile__status')



function openPopup(event) {
  popupClass.classList.add('popup_open')
  nameInput.value = ''
  jobInput.value = ''
  nameInput.value = profName.textContent;
  jobInput.value = profStatus.textContent;

}
function closePopup() {
  popupClass.classList.remove('popup_open')
}



function textChange(evt) {
  evt.preventDefault();

  profName.textContent = nameInput.value;
  profStatus.textContent = jobInput.value;

  profName.value = "";
  profStatus.value = ""
  popupClass.classList.remove('popup_open')
}
formElement.addEventListener('submit', textChange)


openButton.addEventListener('click', openPopup)
closeButton.addEventListener('click', closePopup)






