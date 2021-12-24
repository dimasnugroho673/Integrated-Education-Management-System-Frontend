import React, { Component } from "react";

class ToolList extends Component {

  formatter = new Intl.DateTimeFormat('id-ID', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  });

  render() {

    return (
      <div className="list-group-item list-group-item-action flex-column align-items-start">
        <p><span className="badge badge-info">
          Batas Pengembalian: {this.formatter.format(new Date(this.props.data.deadline))}
        </span></p>
        <h5 className="mb-1">{this.props.data.tool.toolName}</h5>
        <p className="mb-1">
          {this.formatter.format(new Date(this.props.data.date))}
        </p>
      </div>
    );
  }
}

export default ToolList;
