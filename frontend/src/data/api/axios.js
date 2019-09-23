import axios from "axios";

export default class Axios {
  constructor() {
    let instance = axios.create();

    instance.interceptors.request.use(
      function(config) {
        // handle before request
        if (localStorage.getItem("token")) {
          config.headers["Authorization"] = `Bearer ${
            JSON.parse(localStorage.getItem("token")).access_token
          }`;
        }
        return config;
      },
      function(error) {
        // handle request error
        console.log("handle global error");
        return Promise.reject(error);
      }
    );

    instance.interceptors.response.use(
      function(response) {
        return response;
      },
      function(err) {
        if (!err.response) {
          return Promise.reject(err);
        }
        if (!err.response.config.disableErrorNotification) {
          return Promise.reject(err);
        }
        return Promise.reject(err);
      }
    );

    return instance;
  }
}