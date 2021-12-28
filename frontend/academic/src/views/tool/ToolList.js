import React, { Component } from "react";

class ToolList extends Component {

  formatter = new Intl.DateTimeFormat('id-ID', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  });

  render() {

    return (
      <div className="list-group-item list-group-item-action flex-column align-items-start mb-3" style={{ borderRadius: '15px', boxShadow: '0px 0px 3px 1px rgba(0, 0, 0, 0.1)' }}>
        <p><span className="badge badge-info pl-3 pr-3 pt-1 pb-1 rounded-pill shadow-sm">
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
