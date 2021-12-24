import React, { Component } from "react";
import BookList from "./BookList";
import { Redirect } from "react-router-dom";
import axios from "axios";

export class Book extends Component {
    constructor() {
        super();
        this.state = {
            dataReady: false,
            books: [],
        };
    }

    componentDidMount() {
        const key = localStorage.getItem("lms-sess-key");
        axios.defaults.headers.common['Authorization'] = `Bearer ${key}`
        axios
            .get("https://mock-api-integrated-lms.herokuapp.com/api/v1/loans/book?isFinished=false")
            .then((result) => {
                console.log(result)
                this.setState({
                    books: result.data.data,
                    dataReady: true,
                });
            });
    }

    render() {
        const books = this.state.books;

        const token = localStorage.getItem("lms-sess-key");
        if (!token) {
            return <Redirect to="/login" />;
        }

        if (this.state.dataReady === false) {
            return (
                <div className="main-content">
                    <section className="section">
                        <div className="section-header">
                            {/* <div className="bg-primary rounded wrapper-icon-page-title">
                                <span
                                    className="iconify icon-page-title"
                                    data-icon="uil:book"
                                    data-inline="false"
                                ></span>
                            </div> */}
                            <h1>Peminjaman Buku</h1>
                            {/* <div class="section-header-breadcrumb">
                            <div class="breadcrumb-item">Buku</div>
                        </div> */}
                        </div>

                        <div className="section-body">
                            <div className="row">
                                {/* mobile only */}

                                <div className="col-md-12">
                                    <div>
                                        <h6>LIST PEMINJAMAN BUKU</h6>
                                    </div>
                                    <div>
                                        <p>
                                            Berikut ini adalah daftar buku yang kamu pinjam, harap
                                            mengembalikan buku sebelum jatuh tempo.
                                        </p>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-center text-primary">
                                                        <div className="spinner-border" role="status">
                                                            <span className="sr-only">Loading...</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*  */}
                            </div>
                        </div>
                    </section>
                </div>
            );
        } else {
            if (books.length === 0) {
                return (
                    <div className="main-content">
                        <section className="section">
                            <div className="section-header">
                                {/* <div className="bg-primary rounded wrapper-icon-page-title">
                                    <span
                                        className="iconify icon-page-title"
                                        data-icon="uil:book"
                                        data-inline="false"
                                    ></span>
                                </div> */}
                                <h1>Peminjaman Buku</h1>
                                {/* <div class="section-header-breadcrumb">
                            <div class="breadcrumb-item">Buku</div>
                        </div> */}
                            </div>

                            <div className="section-body">
                                <div className="row">
                                    {/* mobile only */}

                                    <div className="col-md-12">
                                        <div>
                                            <h6>LIST PEMINJAMAN BUKU</h6>
                                        </div>
                                        <div>
                                            <p>
                                                Berikut ini adalah daftar buku yang kamu pinjam, harap
                                                mengembalikan buku sebelum jatuh tempo.
                                            </p>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h6 className="text-center mt-4">
                                                            Data Buku yang Dipinjam Belum Tersedia.
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  */}
                                </div>
                            </div>
                        </section>
                    </div>
                );
            } else {
                return (
                    <div className="main-content">
                        <section className="section">
                            <div className="section-header">
                                {/* <div className="bg-primary rounded wrapper-icon-page-title">
                                    <span
                                        className="iconify icon-page-title"
                                        data-icon="uil:book"
                                        data-inline="false"
                                    ></span>
                                </div> */}
                                <h1>Peminjaman Buku</h1>
                                {/* <div class="section-header-breadcrumb">
                            <div class="breadcrumb-item">Buku</div>
                        </div> */}
                            </div>

                            <div className="section-body">
                                <div className="row">
                                    {/* mobile only */}

                                    <div className="col-md-12">
                                        <div>
                                            <h6>LIST PEMINJAMAN BUKU</h6>
                                        </div>
                                        <div>
                                            <p>
                                                Berikut ini adalah daftar buku yang kamu pinjam, harap
                                                mengembalikan buku sebelum jatuh tempo.
                                            </p>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="list-group">
                                                    {books.map((book, iBook) => {
                                                        return (
                                                            <BookList
                                                                key={book.msgid}
                                                                data={book}
                                                                number={iBook + 1}
                                                            />
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  */}
                                </div>
                            </div>
                        </section>
                    </div>
                );
            }
        }
    }
}

export default Book
