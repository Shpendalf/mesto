export default class UserInfo {
    constructor(selectorName, selectorJob, selectorUserpic) {
        this._name = document.querySelector(selectorName);
        this._job = document.querySelector(selectorJob);
        this._userPic = document.querySelector(selectorUserpic);
     }
    
     setUserInfo ({name, about, avatar}) {   
        
        this._name.textContent = name;
        this._job.textContent = about;
        this._userPic.src = avatar;
    }

    getUserInfo () {
        
        return {
            profileName : this._name.textContent,
            jobName : this._job.textContent
        }     
    }
    getUserId(){
        return this._id
    }
   setImage({avatar}) {
    this._userPic.src = avatar   
     console.log(this._userPic.src)
     console.log(avatar)
   }

   
}