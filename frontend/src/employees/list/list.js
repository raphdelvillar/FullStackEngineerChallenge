import React from "react";

import { Table } from "antd";

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredInfo: null,
            sortedInfo: null,
        }
    }

    handleChange(pagination, filters, sorter) {
        console.log('Various parameters', pagination, filters, sorter);
        this.setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    };

    render() {
        let { sortedInfo, filteredInfo } = this.state;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                filters: [],
                filteredValue: filteredInfo.name || null,
                onFilter: (value, record) => record.name.includes(value),
                sorter: (a, b) => a.name.length - b.name.length,
                sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
            },
            {
                title: 'Designation',
                dataIndex: 'designation',
                key: 'designation',
                filters: [],
                filteredValue: filteredInfo.designation || null,
                onFilter: (value, record) => record.designation.includes(value),
                sorter: (a, b) => a.designation.length - b.designation.length,
                sortOrder: sortedInfo.columnKey === 'designation' && sortedInfo.order,
            },
            {
                title: 'Gender',
                dataIndex: 'gender',
                key: 'gender',
                filters: [],
                filteredValue: filteredInfo.gender || null,
                onFilter: (value, record) => record.gender.includes(value),
                sorter: (a, b) => a.gender.length - b.gender.length,
                sortOrder: sortedInfo.columnKey === 'gender' && sortedInfo.order,
            },
            {
                title: 'Join Date',
                dataIndex: 'joinDate',
                key: 'joinDate',
                filters: [],
                filteredValue: filteredInfo.joinDate || null,
                onFilter: (value, record) => record.joinDate.includes(value),
                sorter: (a, b) => a.joinDate.length - b.joinDate.length,
                sortOrder: sortedInfo.columnKey === 'joinDate' && sortedInfo.order,
            },
        ];
        return (
            <Table style={{ marginTop: 20 }} columns={columns} dataSource={[]} onChange={this.handleChange} />
        )
    }
}