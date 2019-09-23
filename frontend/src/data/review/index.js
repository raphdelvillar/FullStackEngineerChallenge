import Api from "../api/api";
import Mapper from "../api/mapper";

import { ReviewSchema } from "./review.schema";

export class Review {
    ID;
    Rating;
    Comment;
}

export class ReviewListViewModel {
    constructor(url = "") {
        this.url = url;
        this.Reviews = [];
    }

    Get(params, callback) {
        Api.Get(this.url, params, response => {
            if (callback) {
                this.Revies = Mapper.mapList(
                    Review,
                    ReviewSchema,
                    response.collection
                );
                callback(this);
            }
        })
    }
}

export class ReviewViewModel {
    constructor(url = "") {
        this.url = url;
        this.Review = {};
    }

    Get(id, params, callback) {
        Api.Get(`${this.url}/${id}`, params, response => {
            if (callback) {
                this.Review = Mapper.mapOne(Review, ReviewSchema, response);
                callback(this);
            }
        });
    }

    Post(data, callback) {
        data = Mapper.unmap(ReviewSchema, data);
        Api.Post(this.url, data, response => {
            if (callback) {
                this.Review = Mapper.mapOne(
                    Review,
                    ReviewSchema,
                    response
                );
                callback(this);
            }
        });
    }

    Patch(id, data, callback) {
        data = Mapper.unmap(ReviewSchema, data);
        Api.Patch(`${this.url}/${id}`, data, response => {
            if (callback) {
                this.Review = Mapper.mapOne(
                    Review,
                    ReviewSchema,
                    response
                );
                callback(this);
            }
        })
    }

    Delete(id, params, callback) {
        Api.Delete(`${this.url}/${id}`, params, response => {
            if (callback) {
                callback(response);
            }
        })
    }
}