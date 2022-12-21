export default class UserInfo {
  constructor(selectorName, selectorJob, selectorAvatar) {
    this._name = document.querySelector(selectorName);
    this._job = document.querySelector(selectorJob);
    this._avatar = document.querySelector(selectorAvatar);
  }

  setUserInfo({ name, about, avatar }) {
    this._name.textContent = name;
    this._job.textContent = about;
    this._avatar.src = avatar;
  }

  getUserInfo() {
    return {
      profileName: this._name.textContent,
      jobName: this._job.textContent,
    };
  }

  getUserId(uId) {
    uId ? (this.uId = uId) : console.log("Ошибка");
    console.log(uId);
  }

  setImage(avatar) {
    this._avatar.src = avatar;
  }
}
