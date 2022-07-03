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
const popupProfile = document.querySelector('.popup_profile')
const popImg = document.querySelector ('.popup_img')
const closeButton = document.querySelector('.popup__close')
const formElement = document.querySelector('.popup__form-profile');
const formElementImg = document.querySelector('.popup__form-img')
const nameInput = document.querySelector('.popup__textarea_type_name');
const profName = document.querySelector('.profile__name');
const jobInput = document.querySelector('.popup__textarea_type_status');
const profStatus = document.querySelector('.profile__status');
const popupAddBtn =document.querySelector('.profile__add-button');
const closeButtonImg = document.querySelector('.popup__close-img');
const container = document.querySelector('.main');
const cardsContainer = container.querySelector('.elements');
const cardTemplate = document.querySelector('.card-template').content;
const cardListElement = cardTemplate.cloneNode(true);
const popupBigImage =  document.querySelector('.popup_bigimage');
const BigImageClose = document.querySelector('.popup__close-Bigimg')



const readyCards = [ {
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

readyCards.forEach (function (element) {

  addCard(element.link,element.name);
  // cardListElement.querySelector(`.card__title`).textContent = element.name;
  // cardListElement.querySelector(`.card__image`).src = element.link;

  //  cardsContainer.append(cardListElement);
})

function openBigImageHandler(e) {
  // console.log(e.target.src);
  let text  = e.target.parentNode.querySelector('.card__title').textContent;
    // console.log(text);
  popupImgOpen(e.target.src, text);
}

function addCard(sourceValue, titleValue) {

  var cardElement = cardTemplate.querySelector('.card').cloneNode(true);
   cardElement.querySelector('.card__image').src = sourceValue;
 cardElement.querySelector('.card__title').textContent = titleValue

  cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_toggle');
  });
  cardElement.querySelector('.card__delete').addEventListener('click', function (e) {
    e.target.closest('.card').remove();

  });

  cardElement.querySelector('.card__image').addEventListener('click', openBigImageHandler)



  cardsContainer.prepend(cardElement);

}


function openPopup(event) {
  popupProfile.classList.add('popup_open')
  popupProfile.classList.remove('popup_close')
  nameInput.value = ''
  jobInput.value = ''
  nameInput.value = profName.textContent;
  jobInput.value = profStatus.textContent;

}
function popAddOpen(event){
  popImg.classList.add('popup_open')
  popImg.classList.remove('popup_close')
}

function popupImgOpen(src, text){
  popupBigImage.classList.add('popup_open');
  popupBigImage.classList.remove('popup_close');
  popupBigImage.querySelector('.popup__image').src = src;
  popupBigImage.querySelector('.popup__title').textContent = text;
   
  }

function closePopup() {
  
  popupProfile.classList.add('popup_close')
  popImg.classList.add('popup_close')
  popupClass.classList.add('popup_close')
  popupBigImage.classList.add('popup_close')
  }



function textChange(evt) {
  evt.preventDefault();

  profName.textContent = nameInput.value;
  profStatus.textContent = jobInput.value;

  profName.value = "";
  profStatus.value = "";
  popupClass.classList.remove('popup_open')
}


 const formImg = document.querySelector('.popup__textarea_img') 
 const formText = document.querySelector('.popup__textarea_title')

  function submitCard(evt){
  evt.preventDefault();
  popImg.classList.remove('popup_close')
  addCard(formImg.value, formText.value)
  formImg.value='';
  formText.value='';
 };

 formElementImg.addEventListener('submit', submitCard);
 
 










  


openButton.addEventListener('click',openPopup)
popupAddBtn.addEventListener('click',popAddOpen)
closeButton.addEventListener('click', closePopup)
closeButtonImg.addEventListener('click',closePopup)
BigImageClose.addEventListener('click', closePopup)








