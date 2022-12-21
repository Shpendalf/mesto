import "./index.css";
import PopupWithForm from "../components/PopupWithForm.js";
import { Card } from "../components/Card.js";
import { parameters } from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import Api from "../components/Api.js";
import PopupDelete from "../components/PopupDelete";
import { API_CONFIG } from "../utils/constants.js";
const profileButtonOpen = document.querySelector(".profile__edit-button");
const popupUserPicOpen = document.querySelector(".profile__avatar-wrapper");
const profileButtonClose = document.querySelector(".popup__close-profile");
const formElementProfile = document.querySelector(".popup__form-profile");
const formElementImg = document.querySelector(".popup__form-img");
const formElementUserPic = document.querySelector(".popup__form-avatar");
const popupAddBtn = document.querySelector(".profile__add-button");
const buttonAddImgClose = document.querySelector(".popup__close-img");
const popupBigImage = ".popup_bigimage";

const popupDelete = new PopupDelete(".popup_delete");

const picPopup = new PopupWithImage(popupBigImage);
popupDelete.setEventListeners();
const profile = new UserInfo(
  ".profile__name",
  ".profile__status",
  ".profile__avatar"
);

const api = new Api(API_CONFIG);
const profileValidate = new FormValidator(parameters, formElementProfile);
const imgValidate = new FormValidator(parameters, formElementImg);
const avatarValidate = new FormValidator(parameters, formElementUserPic);
profileValidate.enableValidation();
imgValidate.enableValidation();
avatarValidate.enableValidation();

function handleSubmitFormAddCard(data) {
  ImgPopup.buttonLoading(true);
  api
    .createCard(data)
    .then((res) => {
      renderCard(res);
      ImgPopup.closePopup()
    })
    .catch((err) => console.log(err))
    .finally(() => ImgPopup.buttonLoading(false));
    
}

function renderCard(data) {
  const readyCard = constructCard(data);
  cardsHolder.setItem(readyCard);
}
const cardsHolder = new Section(renderCard, ".elements");
api.getData().then(([userData, initialCards]) => {

  const data = userData;
  profile.getUserId(userData._id);
  profile.setUserInfo(data);
  //слайс делаю, чтобы не забивать всю страницу, вдруг карточек будет слишком много//
  cardsHolder.renderItems(initialCards.reverse());
});
const avatarPopup = new PopupWithForm(".popup_avatar", (data) => {
  avatarPopup.buttonLoading(true);

  api
    .editAvatar(data.userPic)
    .then(() => {
      profile.setImage(data.userPic);
      avatarPopup.closePopup();
    })
    .catch((error) => {
      console.log(error, "Ошибочка получилась");
    })
    .finally(() => ImgPopup.buttonLoading(false));
    
    
});

const profilePopup = new PopupWithForm(".popup_profile", (profileValues) => {
  profilePopup.buttonLoading(true);
  const newData = {
    name: profileValues.profileName,
    about: profileValues.jobName,
  };

  api
    .setUserInfo(newData)

    .then((data) => {
      profile.setUserInfo(data);
      profilePopup.closePopup();
    })
    .catch((err) => console.log(err))
    .finally(() => profilePopup.buttonLoading(false));
    profilePopup.closePopup()
});
const ImgPopup = new PopupWithForm(".popup_img", handleSubmitFormAddCard);

avatarPopup.setEventListeners();
profileButtonOpen.addEventListener("click", () => {
   //Метод не очищает поля, он сбрасывает ошибки и  состояние кнопки, так что, он не дублирует сброс поля форм из closePopup и при его выключении, собственно оно крякнется.//
  profileValidate.resetErrors();

  profilePopup.setValues(profile.getUserInfo());

  profilePopup.openPopup();
});
profilePopup.setEventListeners();

profileButtonClose.addEventListener("click", () =>
  profilePopup.closePopup()
);

popupAddBtn.addEventListener("click", () => {
   //Метод не очищает поля, он сбрасывает ошибки и  состояние кнопки, так что, он не дублирует сброс форм//
  imgValidate.resetErrors();

  ImgPopup.openPopup();
});

buttonAddImgClose.addEventListener("click", () => {
  ImgPopup.closePopup();
});
ImgPopup.setEventListeners();

picPopup.setEventListeners();
popupUserPicOpen.addEventListener("click", () => {
  //Метод не очищает поля, он сбрасывает ошибки и  состояние кнопки, так что, он не дублирует сброс форм//
  avatarValidate.resetErrors();
  avatarPopup.openPopup();
});

function constructCard(data) {
  const readyCard = new Card(
    data,

    ".card-template",

    () => {
      picPopup.openPopup({
        name: data.name,
        link: data.link,
      });
    },

    () => {
      popupDelete.openPopup(() => {
        api
          .removeCard(readyCard.elementId)
          .then(() => {
            readyCard.deleteCard();
            popupDelete.closePopup();
          })
          .catch((error) => {
            console.log("Ошибка", error);
          })
          
      });
    },

    profile.uId,

    () => {
      api
        .newLike(readyCard.elementId)
        .then((res) => {
          console.log(res)
          readyCard.setLikes(res);
          
        })
        .catch((error) => {
          console.log(error);
        });
    },

    () => {
      api
        .newDislike(readyCard.elementId)
        .then((res) => {
          readyCard.setLikes(res);
          console.log(res)
        
        })
        .catch((error) => {
          console.log(error);
        });
    }
  );
  return readyCard.generateCard();
}
