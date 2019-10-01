import Api from "../api/api";

export class DashboardViewModel {
  constructor(url = "dashboard/") {
    this.url = url;
    this.Data = {};
    this.Error = "";
  }

  Get(params, callback) {
    Api.Get(this.url, params, response => {
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
