export default class Api {
  constructor(config) {
    this._url = config.url;
    this._header = config.header;
  }
  _checkResponse(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(response.status));
  }

  _getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: "GET",
      headers: this._header,
    }).then(this._checkResponse);
  }
  newLike(id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: "PUT",
      headers: this._header,
    }).then(this._checkResponse);
  }
  newDislike(id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: "DELETE",
      headers: this._header,
    }).then(this._checkResponse);
  }
  _getOwnerInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._header,
    }).then(this._checkResponse);
  }
  createCard({ name, link }) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._header,
      body: JSON.stringify({
        name,
        link,
      }),
    }).then(this._checkResponse);
  }

  removeCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: "DELETE",
      headers: this._header,
    }).then(this._checkResponse);
  }
  editAvatar(userPic) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._header,
      body: JSON.stringify({
        avatar: userPic,
      }),
    }) 
    .then(this._checkResponse)  
  }
  getData() {
    return Promise.all([this._getOwnerInfo(), this._getInitialCards()]);
  }
  setUserInfo({ name, about }) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._header,
      body: JSON.stringify({ name, about }),
    }).then(this._checkResponse);
  }
}
