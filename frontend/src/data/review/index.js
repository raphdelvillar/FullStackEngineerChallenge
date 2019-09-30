import Api from "../api/api";
import Mapper from "../api/mapper";

import { ReviewSchema } from "./review.schema";

export class Review {
  ID;
  EmployeeID;
  ReviewedByID;
  Performances;
  Competencies;
  Rating;
  Comment;
}

export class ReviewListViewModel {
  constructor(url = "review/") {
    this.url = url;
    this.Data = [];
    this.Error = "";
  }

  Get(params, callback) {
    Api.Get(this.url, params, response => {
      if (callback) {
        if (response.Data) {
          this.Data = Mapper.mapList(Review, ReviewSchema, response.Data);
        }
        this.Error = response.Error;
        callback(this);
      }
    });
  }
}

export class ReviewViewModel {
  constructor(url = "review/") {
    this.url = url;
    this.Data = {};
    this.Error = "";
  }

  Get(id, params, callback) {
    Api.Get(`${this.url}/${id}`, params, response => {
      if (callback) {
        if (response.Data) {
          this.Data = Mapper.mapOne(Review, ReviewSchema, response.Data);
        }
        this.Error = response.Error;
        callback(this);
      }
    });
  }

  Post(data, callback) {
    data = Mapper.unmap(ReviewSchema, data);
    Api.Post(this.url, data, response => {
      if (callback) {
        if (response.Data) {
          this.Data = Mapper.mapOne(Review, ReviewSchema, response.Data);
        }
        this.Error = response.Error;
        callback(this);
      }
    });
  }

  Patch(id, data, callback) {
    data = Mapper.unmap(ReviewSchema, data);
    Api.Patch(`${this.url}/${id}`, data, response => {
      if (callback) {
        if (response.Data) {
          this.Data = Mapper.mapOne(Review, ReviewSchema, response.Data);
        }
        this.Error = response.Error;
        callback(this);
      }
    });
  }

  Delete(id, params, callback) {
    Api.Delete(`${this.url}/${id}`, params, response => {
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
