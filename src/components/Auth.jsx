class Auth {
    constructor() {
        const GetLocalToken = localStorage.getItem('token');
        if(GetLocalToken != null && GetLocalToken != ''){
            this.authenticated = true;
        }else{
            this.authenticated = false;
        }
    }
  
    login(cb) {
      this.authenticated = true;
      cb();
    }
  
    logout(cb) {
        localStorage.removeItem('token');
        this.authenticated = false;
        cb();
    }
  
    isAuthenticated() {
      return this.authenticated;
    }
  }
  
  export default new Auth();
  