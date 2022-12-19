export default class Api {
    constructor(config) {
      this._url = config.url;
      this._header = config.header;
    }
  _statusCheck(response){
      
      if (response.ok){
        return response.json()
      }
      return Promise.reject(new Error(response.status));
     
}
   

    _getInitialCards() {
        return fetch(`${this._url}/cards`, {
          method:'GET',
          headers: this._header
        })
        .then(this._statusCheck) 
        
       
    }
    newLike(id){
      return fetch(`${this._url}/cards/${id}/likes`, {
        method: 'PUT',
        headers:this._header,
    })
    .then(this._statusCheck) 
    }
    newDislike(id){
      return fetch(`${this._url}/cards/${id}/likes`, {
        method: 'DELETE',
        headers:this._header,
    })
    .then(this._statusCheck) 
    }
    _getOwnerInfo() {
      return fetch(`${this._url}/users/me`,{
        headers:this._header
      })
      .then(this._statusCheck) 
     }
     createCards({
      name,
      link
  }) {
      return fetch(`${this._url}/cards`, {
              method: 'POST',
              headers: this._header,
              body: JSON.stringify({
                  name,
                  link
              })
          })
          .then(this._statusCheck) 
  }

   removeCard(id){
    return fetch(`${this._url}/cards/${id}`,{
      method:'DELETE',
      headers: this._header,
     })
      .then(this._statusCheck) 
        
       
    }
    editAvatar(userPic){
      return fetch(`${this._url}/users/me/avatar`,{
        method:'PATCH',
        headers:this._header,
        body:JSON.stringify({
          'avatar':userPic
        })
      })
    }
    getData() {
      return Promise.all([this._getOwnerInfo(), this._getInitialCards()])
  }
    setInfo({name, about }) {
      return fetch(`${this._url}/users/me`, {
        method: 'PATCH',
        headers: this._header,
        body: JSON.stringify({name,about})
  })
      .then(this._statusCheck) 
    }

   
  }
 




