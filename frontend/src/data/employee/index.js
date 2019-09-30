import Api from "../api/api";
import Mapper from "../api/mapper";

import { EmployeeSchema } from "./employee.schema";

export class Employee {
    ID;
    FullName;
    Designation;
    Email;
    Gender;
    JoinDate;
    Reviews;
}

export class EmployeeListViewModel {
    constructor(url = "") {
        this.url = url;
        this.Employees = [];
    }

    Get(params, callback) {
        Api.Get(this.url, params, response => {
            if (callback) {
                this.Employee = Mapper.mapList(
                    Employee,
                    EmployeeSchema,
                    response.collection
                );
                callback(this);
            }
        });
    }
}

export class EmployeeViewModel {
    constructor(url = "") {
        this.url = url;
        this.Employee = {};
    }

    Get(id, params, callback) {
        Api.Get(`${this.url}/${id}`, params, response => {
            if (callback) {
                this.Employee = Mapper.mapOne(Employee, EmployeeSchema, response);
                callback(this);
            }
        });
    }

    Post(data, callback) {
        data = Mapper.unmap(EmployeeSchema, data);
        Api.Post(this.url, data, response => {
            if (callback) {
                this.Employee = Mapper.mapOne(
                    Employee,
                    EmployeeSchema,
                    response
                );
                callback(this);
            }
        });
    }

    Patch(id, data, callback) {
        data = Mapper.unmap(EmployeeSchema, data);
        Api.Patch(`${this.url}/${id}`, data, response => {
            if (callback) {
                this.Employee = Mapper.mapOne(
                    Employee,
                    EmployeeSchema,
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