export default class Api {
    constructor(config) {
      this._url = config.url;
      this._header = config.header;
    }
  
    getInitialCards() {
        return fetch(`${this._url}/cards`, {headers: this._header},)
        .then(response => {
         
          if (response.ok){
            return response.json()
          }
          return Promise.reject(new Error(response.status));
        })
        .catch(err => Promise.reject(err));
    } 
   createCards(name,link){
    return fetch(`${this._url}/cards`,{
      method:'POST',
      headers: this._header,
      body: JSON.stringify(name,link)},)
        .then(response => {
         
          if (response.ok){
            return response.json()
          }
          return Promise.reject(new Error(response.status));
        })
        .catch(err => Promise.reject(err));
   }    
   deleteCard(id){
    return fetch(`${this._url}/cards/${cardId}`,{
      method:'DELETE',
      headers: this._header,
      body: JSON.stringify(name,link)},)
        .then(response => {
         
          if (response.ok){
            return response.json()
          }
          return Promise.reject(new Error(response.status));
        })
        .catch(err => Promise.reject(err));
   }  

}