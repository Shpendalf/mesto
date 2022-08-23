export default class UserInfo {
    constructor(selectorName, selectorJob) {
        this._name = document.querySelector(selectorName);
        this._job = document.querySelector(selectorJob);
     }
    
     setUserInfo ({name, job}) {   
        this._name.textContent = name;
        this._job.textContent = job;
    }

    getUserInfo () {
        return {
            name: this._name.textContent,
            job: this._job.textContent
        }     
    }
    
   

   
}