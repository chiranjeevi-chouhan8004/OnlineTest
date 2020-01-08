import React, { Component } from "react";
import moment from "moment";
import "./NavBar.css";

const data = [
  {
    id: 1,
    title: "Request from Indu",
    updated_at: "2015-08-15 12:27:01 -0600",
    created_at: "2015-08-12 08:27:01 -0600",
    status: "Denied"
  },
  {
    id: 2,
    title: "Request from Glen",
    updated_at: "2015-07-22 11:27:01 -0600",
    created_at: "2015-07-15 12:27:01 -0600",
    status: "Approved"
  },
  {
    id: 3,
    title: "Request from Kiran",
    updated_at: "2015-07-22 11:27:01 -0600",
    created_at: "2015-06-15 13:27:01 -0600",
    status: "Pending"
  },
  {
    id: 4,
    title: "Request from Jerry",
    updated_at: "2015-07-15 13:27:01 -0600",
    created_at: "2015-07-14 14:27:01 -0600",
    status: "Pending"
  },
  {
    id: 5,
    title: "Request from Francis",
    updated_at: "2015-08-22 11:27:01 -0600",
    created_at: "2015-07-29 15:27:01 -0600",
    status: "Approved"
  },
  {
    id: 6,
    title: "Request from Kate",
    updated_at: "2015-07-29 14:27:01 -0600",
    created_at: "2015-07-15 10:27:01 -0600",
    status: "Denied"
  },
  {
    id: 7,
    title: "Request from Michael",
    updated_at: "2015-06-15 12:27:01 -0600",
    created_at: "2015-06-13 18:27:01 -0600",
    status: "Denied"
  },
  {
    id: 8,
    title: "Request from AJ",
    updated_at: "2015-09-22 11:10:01 -0600",
    created_at: "2015-07-15 11:27:01 -0600",
    status: "Approved"
  },
  {
    id: 9,
    title: "Request from Kate",
    updated_at: "2015-09-13 11:18:01 -0600",
    created_at: "2015-09-10 06:27:01 -0600",
    status: "Approved"
  },
  {
    id: 10,
    title: "Request from Kate",
    updated_at: "2015-05-12 08:27:01 -0600",
    created_at: "2015-04-15 06:27:01 -0600",
    status: "Pending"
  },
  {
    id: 11,
    title: "Request from Kate",
    updated_at: "2015-07-28 09:27:01 -0600",
    created_at: "2015-07-17 05:27:01 -0600",
    status: "Approved"
  },
  {
    id: 12,
    title: "Request from Ale",
    updated_at: "2015-07-22 10:27:01 -0600",
    created_at: "2015-07-18 15:27:01 -0600",
    status: "Pending"
  },
  {
    id: 13,
    title: "Request from Christy",
    updated_at: "2015-04-22 19:27:01 -0600",
    created_at: "2015-03-15 16:27:01 -0600",
    status: "Pending"
  },
  {
    id: 14,
    title: "Request from Surjadeep",
    updated_at: "2015-07-01 11:27:01 -0600",
    created_at: "2015-06-29 17:27:01 -0600",
    status: "Approved"
  },
  {
    id: 15,
    title: "Request from Vasanth",
    updated_at: "2015-07-02 11:27:01 -0600",
    created_at: "2015-07-01 18:27:01 -0600",
    status: "Approved"
  },
  {
    id: 16,
    title: "Request from Ramesh",
    updated_at: "2015-01-22 16:27:01 -0600",
    created_at: "2014-12-25 11:27:01 -0600",
    status: "Denied"
  },
  {
    id: 17,
    title: "Request from Jim",
    updated_at: "2015-10-22 17:27:01 -0600",
    created_at: "2015-10-15 13:27:01 -0600",
    status: "Approved"
  },
  {
    id: 18,
    title: "Request from Dileep",
    updated_at: "2015-08-18 18:27:01 -0600",
    created_at: "2015-07-11 12:27:01 -0600",
    status: "Denied"
  },
  {
    id: 19,
    title: "Request from Kumar",
    updated_at: "2015-06-22 19:27:01 -0600",
    created_at: "2015-05-28 16:27:01 -0600",
    status: "Approved"
  },
  {
    id: 20,
    title: "Request from Kumar",
    updated_at: "2015-02-14 08:27:01 -0600",
    created_at: "2015-01-02 12:27:01 -0600",
    status: "Approved"
  }
];

export default class Requests extends Component {
  state = {
    title: "Requests",
    filterByStatus: "Filter by Status",
    tableTitle: [
      {
        id: 1,
        tableHeaderName: "Title"
      },
      {
        id: 2,
        tableHeaderName: "Status"
      },
      {
        id: 3,
        tableHeaderName: "Created"
      },
      {
        id: 4,
        tableHeaderName: "Updated"
      },
      {
        id: 5,
        tableHeaderName: "Delete"
      }
    ],
    filterData: [
      {
        id: 1,
        filter: "All"
      },
      {
        id: 2,
        filter: "Approved"
      },
      {
        id: 3,
        filter: "Pending"
      },
      {
        id: 4,
        filter: "Denied"
      }
    ],
    value: "",
    filterdropdown: data
  };

  editHandler = () => {};

  deleteItemHandler = i => {
    const datas = this.state.filterdropdown;
    datas.splice(i, 1);
    this.setState({
      datas: this.state.filterdropdown
    });
  };

  onChangeHandler = async e => {
    let n1 = e.target.value;
    if (n1 === "All") {
      this.setState({
        filterdropdown: data,
        value: n1
      });
    } else {
      let result = data.filter(val => {
        return val.status == n1;
      });
      this.setState({
        filterdropdown: result,
        value: n1
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <h3 style={{ fontSize: "1.2em", fontWeight: "100" }}>
            {this.state.title}
          </h3>
        </div>
        <div
          style={{
            background: "#d1d1d1",
            padding: "1rem",
            borderRadius: "4px"
          }}
        >
          <div
            style={{
              display: "inline-block",
              marginRight: "1rem"
            }}
          >
            <p style={{ fontSize: "1.2em" }}>{this.state.filterByStatus}</p>
          </div>
          <div
            style={{
              display: "inline-block"
            }}
          >
            <select
              value={this.state.value}
              onChange={this.onChangeHandler}
              style={{
                padding: "0.5rem",
                border: "1px solid #d1d1d1",
                borderRadius: "4px",
                fontSize: "1em"
              }}
            >
              {this.state.filterData.map((data, i) => {
                return <option>{data.filter}</option>;
              })}
            </select>
          </div>
        </div>

        <div>
          <table>
            <tr>
              {this.state.tableTitle.map(data => {
                return <th>{data.tableHeaderName}</th>;
              })}
            </tr>
            {this.state.filterdropdown
              .sort(function(a, b) {
                return new Date(b.updated_at) - new Date(a.updated_at);
              })
              .map((data, i) => {
                return (
                  <tr>
                    <td style={{ fontSize: "1.2em", fontWeight: "100" }}>
                      {data.title}
                    </td>
                    <td
                      onClick={() => this.editHandler}
                      style={{
                        fontSize: "1.2em",
                        fontWeight: "100",
                        color:
                          data.status === "Approved"
                            ? "green"
                            : data.status === "Pending"
                            ? "blue"
                            : "red"
                      }}
                    >
                      {data.status}
                    </td>
                    <td style={{ fontSize: "1.2em", fontWeight: "100" }}>
                      {moment(data.created_at).format("YYYY-MM-DD")}
                    </td>
                    <td style={{ fontSize: "1.2em", fontWeight: "100" }}>
                      {moment(data.updated_at).format("YYYY-MM-DD")}
                    </td>
                    <td
                      onClick={() => this.deleteItemHandler(i)}
                      style={{
                        cursor: "pointer",
                        color: "blue",
                        fontSize: "1.2em",
                        fontWeight: "100"
                      }}
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
          </table>
        </div>
      </div>
    );
  }
}
