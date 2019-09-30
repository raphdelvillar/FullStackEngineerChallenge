import Api from "../api/api";
import Mapper from "../api/mapper";

import { AuthorizationSchema } from "./authorization.schema";

export class Authorization {
  Username;
  Password;
}

export class AuthorizationViewModel {
  constructor(url = "authorization/") {
    this.url = url;
    this.Data = {};
    this.Error = "";
  }

  Post(data, callback) {
    data = Mapper.unmap(AuthorizationSchema, data);
    Api.Post(this.url, data, response => {
      if (callback) {
        if (response.Data) {
          this.Data = response.Data;
        }
        this.Error = response.Error;
        callback(this);
      }
    });
  }
}
