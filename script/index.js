const profileButtonOpen = document.querySelector('.profile__edit-button')
const popupClass = document.querySelectorAll('.popup')
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
const cardTemplate = document.querySelector('.card-template').content;
const popupBigImage = document.querySelector('.popup_bigimage');
const bigImageClose = document.querySelector('.popup__close-bigimg')
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

const prependToContainer = (container, element) => {
  container.prepend(element);
}

const renderCards = () => readyCards.forEach(function (element) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image')
  renderCard(element.link, element.name);
  cardImage.alt = element.name

})
renderCards();

const openPopup = (popup) => {
  popup.classList.add('popup_open')
  }

function openBigImageHandler(e) {
  const text = e.target.parentNode.querySelector('.card__title').textContent;
  openPopupImg(e.target.src, text);
}

function renderCard(sourceValue, titleValue) {
 
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image')
  cardImage.src = sourceValue;
  cardElement.querySelector('.card__title').textContent = titleValue
  cardImage.alt = titleValue;

  cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_toggle');
  });
  cardElement.querySelector('.card__delete').addEventListener('click', function () {
    cardElement.remove();

  });

  cardImage.addEventListener('click', openBigImageHandler)

  prependToContainer(cardsContainer, cardElement);
}

function openProfilePopup() {
  openPopup(popupProfile);
  nameInput.value = ''
  jobInput.value = ''
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

}

function openPopupAdd(event) {
  openPopup(popupAddImg);
}

function openPopupImg(src, text) {
  openPopup(popupBigImage);
  const bigImage = popupBigImage.querySelector('.popup__image')
  bigImage.src = src;
  bigImage.alt = text;
  popupBigImage.querySelector('.popup__title').textContent = text;
}

function closePopup() {
  const activePopups = document.querySelectorAll('.popup_open');
  activePopups.forEach(function (element) {
    element.classList.remove('popup_open');
  });
}

function changeProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  profileName.value = "";
  profileJob.value = "";
  closePopup(popupProfile)
}

const formImg = document.querySelector('.popup__textarea_link')
const formText = document.querySelector('.popup__textarea_img-title')

function submitCard(evt) {
  evt.preventDefault();
  renderCard(formImg.value, formText.value)
  closePopup(popupBigImage);
  formImg.value = '';
  formText.value = '';
};

formElementImg.addEventListener('submit', submitCard);
formElementProfile.addEventListener('submit', changeProfile);
profileButtonOpen.addEventListener('click', openProfilePopup)
popupAddBtn.addEventListener('click', openPopupAdd)
profileButtonClose.addEventListener('click', closePopup)
buttonAddImgClose.addEventListener('click', closePopup)
bigImageClose.addEventListener('click', closePopup)








