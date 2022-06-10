const openButton = document.querySelector('.profile__edit-button')
const popupClass = document.querySelector('.popup')
const closeButton = document.querySelector('.popup__close')

openButton.addEventListener("click", () => {
    popupClass.style.display = "flex";
})

closeButton.addEventListener("click", () => {
    popupClass.style.display = "none";
})

const infoSend = document.querySelector('.popup__save')
let text = document.querySelector('.popup__textarea-name').textContent;
function textExp(){
   
    document.querySelector('.profile__name').innerHtml= text;
    text.value=''
}
infoSend.addEventListener('click' ,textExp)