import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export class ChnagePassword extends Component {
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

        const token = localStorage.getItem("lms-sess-key");
        if (!token) {
            return <Redirect to="/auth/login" />;
        }

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
                        <h1>Rubah Password</h1>
                        {/* <div class="section-header-breadcrumb">
                            <div class="breadcrumb-item">Buku</div>
                        </div> */}
                    </div>

                    <div className="section-body">
                        <div className="row">
                            {/* mobile only */}

                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                                        <div className="card card-primary">

                                            <div className="card-body">
                                                <div>Untuk melindungi akun, pastikan password anda :
                                                    <ul>
                                                        <li>Lebih dari 6 karakter</li>
                                                        <li>Tidak menggunakan NIM anda</li>
                                                        <li>Menggunakan kombinasi angka, huruf, dan simbol</li>
                                                        <li>Tidak menggunakan password yang telah bocor pada website <b><a href="https://haveibeenpwned.com/">have i been pwned</a></b></li>
                                                    </ul>
                                                </div>
                                                <div className="form-group">
                                                    <div className="d-block">
                                                        <label
                                                            htmlFor="password"
                                                            className="control-label"
                                                        >
                                                            Password Lama
                                                        </label>
                                                    </div>
                                                    <input
                                                        id="password"
                                                        type="password"
                                                        className="form-control"
                                                        name="password"
                                                        tabIndex="2"
                                                        required
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <div className="d-block">
                                                        <label
                                                            htmlFor="password"
                                                            className="control-label"
                                                        >
                                                            Password Baru
                                                        </label>
                                                    </div>
                                                    <input
                                                        id="password"
                                                        type="password"
                                                        className="form-control"
                                                        name="password"
                                                        tabIndex="2"
                                                        required
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <div className="d-block">
                                                        <label
                                                            htmlFor="password"
                                                            className="control-label"
                                                        >
                                                            Ulangi Password Baru
                                                        </label>
                                                    </div>
                                                    <input
                                                        id="password"
                                                        type="password"
                                                        className="form-control"
                                                        name="password"
                                                        tabIndex="2"
                                                        required
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary btn-lg btn-block"
                                                        tabIndex="4"
                                                    >
                                                        Ganti Password
                                                    </button>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*  */}
                        </div>
                    </div>
                </section >
            </div >
        );
    }
}

export default ChnagePassword
