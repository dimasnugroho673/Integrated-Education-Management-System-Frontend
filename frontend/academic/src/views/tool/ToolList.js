import React, { Component } from "react";

class ToolList extends Component {

  render() {

    let date = this.props.data.date;
    const dateArray = date.split("-");
    let deadline = this.props.data.deadline;
    const deadlineArray = deadline.split("-");

    return (
      <div className="list-group-item list-group-item-action flex-column align-items-start">
        <p><span className="badge badge-info">
          Batas Pengembalian: {
            new Intl.DateTimeFormat('id-ID', {
              month: 'long',
              day: '2-digit',
              year: 'numeric',
            }).format(new Date(deadlineArray[2], deadlineArray[1] - 1, deadlineArray[0]))}
        </span></p>
        <h5 className="mb-1">{this.props.data.deviceDesc}</h5>
        <p className="mb-1">
          {new Intl.DateTimeFormat('id-ID', {
            month: 'long',
            day: '2-digit',
            year: 'numeric',
          }).format(new Date(dateArray[2], dateArray[1] - 1, dateArray[0]))}
        </p>
      </div>
    );
  }
}

export default ToolList;
