import React from "react";
import moment from "moment";
import { navigateToUrl } from "single-spa";
import { Table, Avatar, Button, Icon } from "antd";

import { decodeToken } from "../../utils/token";

import api from "../../data";

export default class TableView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filteredData: [],
      loading: true
    };
  }

  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    console.log(decodeToken())
    api.Employee("list", "employee/list-employee").Get({}, response => {
      if (response.Error == null) {
        this.setState({
          data: response.Data,
          filteredData: response.Data.filter(data => data.ID !== decodeToken().employee_id),
          loading: false
        });
      }
    });
  };

  render() {
    let { filteredData, loading } = this.state;
    let employees = filteredData
      ? filteredData.map(m => {
          m.key = m.ID;
          return m;
        })
      : [];
    const columns = [
      {
        title: "",
        dataIndex: "",
        render: data => {
          <Avatar size={64} icon="user" />;
        }
      },
      {
        title: "Name",
        dataIndex: "FullName",
        key: "FullName",
        sorter: (a, b) => a.FullName.length - b.FullName.length
      },
      {
        title: "Designation",
        dataIndex: "Designation",
        key: "Designation",
        sorter: (a, b) => a.Designation.length - b.Designation.length
      },
      {
        title: "Email",
        dataIndex: "Email",
        key: "Email",
        sorter: (a, b) => a.Email.length - b.Email.length
      },
      {
        title: "Gender",
        dataIndex: "Gender",
        key: "Gender",
        sorter: (a, b) => a.Gender.length - b.Gender.length,
        render: data => {
          if (data === "Male") {
            return <span style={{ color: "blue" }}>{data}</span>;
          } else {
            return <span style={{ color: "red" }}>{data}</span>;
          }
        }
      },
      {
        title: "Join Date",
        dataIndex: "JoinDate",
        key: "JoinDate",
        sorter: (a, b) => a.JoinDate.length - b.JoinDate.length,
        render: data => {
          return <span>{moment.unix(data).format("MM/DD/YYYY")}</span>;
        }
      },
      {
        title: "Action",
        key: "action",
        render: data => {
          if (decodeToken().role === "Administrator") {
            return (
              <Button
                type="link"
                onClick={() => navigateToUrl(`/employees/edit/${data.ID}`)}
                style={{ fontSize: 15 }}
              >
                <Icon type="form" /> Update
              </Button>
            );
          }
          return <span style={{ color: "red" }}>N/A</span>;
        }
      }
    ];
    return (
      <Table
        style={{ marginTop: 20 }}
        columns={columns}
        dataSource={employees}
      />
    );
  }
}
