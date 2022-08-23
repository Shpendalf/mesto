export default class UserInfo {
    constructor(selectorName, selectorJob) {
        this._name = document.querySelector(selectorName);
        this._job = document.querySelector(selectorJob);
     }
    
     setUserInfo ({profileName, jobName}) {   
        this._name.textContent = profileName;
        this._job.textContent = jobName;
    }

    getUserInfo () {
        return {
            profileName : this._name.textContent,
            jobName : this._job.textContent
        }     
    }
    
   

   
}