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
  constructor(url = "employee/") {
    this.url = url;
    this.Data = [];
  }

  Get(params, callback) {
    Api.Get(this.url, params, response => {
      if (callback) {
        if (response.Data) {
          this.Data = Mapper.mapList(Employee, EmployeeSchema, response.Data);
        }
        this.Error = response.Error;
        callback(this);
      }
    });
  }
}

export class EmployeeViewModel {
  constructor(url = "employee/") {
    this.url = url;
    this.Data = {};
    this.Error = "";
  }

  Get(id, params, callback) {
    Api.Get(`${this.url}/${id}`, params, response => {
      if (callback) {
        if (response.Data) {
          this.Data = Mapper.mapOne(Employee, EmployeeSchema, response.Data);
        }
        this.Error = response.Error;
        callback(this);
      }
    });
  }

  Post(data, callback) {
    data = Mapper.unmap(EmployeeSchema, data);
    Api.Post(this.url, data, response => {
      if (callback) {
        if (response.Data) {
          this.Data = Mapper.mapOne(Employee, EmployeeSchema, response.Data);
        }
        this.Error = response.Error;
        callback(this);
      }
    });
  }

  Patch(id, data, callback) {
    data = Mapper.unmap(EmployeeSchema, data);
    Api.Patch(`${this.url}/${id}`, data, response => {
      if (callback) {
        if (response.Data) {
          this.Data = Mapper.mapOne(Employee, EmployeeSchema, response.Data);
        }
        this.Error = response.Error;
        callback(this);
      }
    });
  }

  Delete(id, params, callback) {
    Api.Delete(`${this.url}/${id}`, params, response => {
      if (callback) {
        this.Data = response.Data;
        this.Error = response.Error;
        callback(this);
      }
    });
  }
}
