import React, { Component } from "react";

class BookList extends Component {

  render() {

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
        <h5 className="mb-1">{this.props.data.bookDesc}</h5>
        <small className="text-muted">{this.props.data.bookEdition}</small>
        <p className="mb-1">{this.props.data.bookWriter}</p>
      </div>
    );
  }
}

export default BookList;
