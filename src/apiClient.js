import axios from "axios";
const url = "https://eventslauraandsarah-app.herokuapp.com/";

export class ApiClient {
  constructor(tokenProvider,logoutHandler){
    this.tokenProvider = tokenProvider;
    this.logoutHandler = logoutHandler;
  }


  authenticatedCall(method,url,data){
    return axios({
      method,
      url,
      headers: {
        authorization: this.tokenProvider
      },
      data,
    }).catch((error) => {
      if(error.response.status === 403) {
        this.logoutHandler();
        return Promise.reject()
      } else {
      throw error;
    }
    });
  }

  apiCall(method, url, data) {
    return axios({
      method,
      url,
      data,
    }).catch((error) => {
      throw error;
    });
  }

  login(username,password) {
    return this.apiCall("post",url + "auth/",{userName: username, password:password});
  }

  getEvents() {
    return this.authenticatedCall("get", url);
  }

  addEvent(name, location, summary, date, timeofevent) {
    return this.authenticatedCall("post", url, { name, location, summary, date, timeofevent });
  }

  removeEvent(id) {
    return this.authenticatedCall("delete", `${url}${id}`);
  }

  updateEvent(id, name, location, summary, date, timeofevent) {
    return this.authenticatedCall("put", `${url}${id}`, { name, location, summary, date, timeofevent });
  }
}
