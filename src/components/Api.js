export default class Api {
    constructor(config) {
      this._url = config.url;
      this._token = config.token;
      this._header = config.header;
    }
  
    getInitialCards() {
        return fetch(this._url, {headers: this._header}).then(response => {
          if (response.ok){
            return response.json()
          }
          return Promise.reject(new Error(responce.status));
        })
        .catch(err => Promise.reject(err));
    } 
         

}