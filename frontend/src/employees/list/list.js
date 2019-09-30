import React from "react";

import { Table, Avatar } from "antd";

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
    api.Employee("list").Get({}, response => {
      this.setState({
        data: response.Employees,
        filteredData: response.Employees,
        loading: false
      });
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
        dataIndex: "name",
        key: "name",
        sorter: (a, b) => a.name.length - b.name.length
      },
      {
        title: "Designation",
        dataIndex: "designation",
        key: "designation",
        sorter: (a, b) => a.designation.length - b.designation.length
      },
      {
        title: "Gender",
        dataIndex: "gender",
        key: "gender",
        sorter: (a, b) => a.gender.length - b.gender.length
      },
      {
        title: "Join Date",
        dataIndex: "joinDate",
        key: "joinDate",
        sorter: (a, b) => a.joinDate.length - b.joinDate.length
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
