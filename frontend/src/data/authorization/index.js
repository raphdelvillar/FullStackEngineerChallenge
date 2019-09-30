import Api from "../api/api";
import Mapper from "../api/mapper";

export class Authorization {
    ID;
    Username;
    Password;
    Status;
}

export class AuthorizationViewModel {
    constructor(url = "") {
        this.url = url;
        this.Authorization = {};
    }

    Post(data, callback) {
        data = Mapper.unmap(AuthorizationSchema, data);
        Api.Post(this.url, data, response => {
            if (callback) {
                this.Authorization = Mapper.mapOne(
                    Authorization,
                    AuthorizationSchema,
                    response
                );
                callback(this);
            }
        })
    }
}