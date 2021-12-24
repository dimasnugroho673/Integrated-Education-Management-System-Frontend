import React, { Component } from "react";

class BookList extends Component {

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
        <h5 className="mb-1">{this.props.data.book.bookTitle}</h5>
        <small className="text-muted">{this.props.data.book.publicationYear}</small>
        <p className="mb-1">{this.props.data.book.bookPublisher}</p>
      </div>
    );
  }
}

export default BookList;
