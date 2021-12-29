import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faSpinner } from '@fortawesome/free-solid-svg-icons'

export class ChangePassword extends Component {
    constructor() {
        super();
        this.state = {
            dataReady: false,
            oldpass: '',
            newpass: '',
            confirmnewpass: '',
            error: '',
            success: '',
            showOldPass: false,
            showNewPass: false,
            showConfirmNewPass: false,
            isSubmit: false,
            loadingProcess: false,
        };
    }

    submitLogin = () => {

        this.setState({ isSubmit: true });
        this.setState({ loadingProcess: true });

        if (this.state.oldpass == '' || this.state.newpass == '' || this.state.confirmnewpass == '') {
            this.setState({ loadingProcess: false });
            return false;
        } else {
            const data = {
                oldpasswd: this.state.oldpass,
                newpasswd: this.state.confirmnewpass
            }

            const key = localStorage.getItem("lms-sess-key");
            axios.defaults.headers.common['Authorization'] = `Bearer ${key}`
            axios.put(`${process.env.REACT_APP_API_ENDPOINT}/user/password`, data)
                .then(result => {
                    if (result.data.status !== 'error') {
                        this.setState({ loadingProcess: false });
                        this.setState({ success: 'Password Berhasil Dirubah!' })
                    }
                })
                .catch(_ => {
                    this.setState({ loadingProcess: false });
                    this.setState({ error: 'Password Lama Salah!' })
                })
        }

    }

    changePointer = (e) => {
        e.target.style.cursor = 'pointer'
    }

    onChangeOldPass = (e) => {
        const value = e.target.value
        this.setState({ oldpass: value })
        this.setState({ error: '' })
    }

    onChangeNewPass = (e) => {
        const value = e.target.value
        this.setState({ newpass: value })
        this.setState({ error: '' })
    }

    onChangeConfirmNewPass = (e) => {
        const value = e.target.value
        this.setState({ confirmnewpass: value })
        this.setState({ error: '' })
    }

    handleShowOldPassword = () => {
        if (this.state.showOldPass == true) {
            this.setState({ showOldPass: false })
        } else {
            this.setState({ showOldPass: true })
        }
    }

    handleShowNewPassword = () => {
        if (this.state.showNewPass == true) {
            this.setState({ showNewPass: false })
        } else {
            this.setState({ showNewPass: true })
        }
    }

    handleShowConfirmNewPassword = () => {
        if (this.state.showConfirmNewPass == true) {
            this.setState({ showConfirmNewPass: false })
        } else {
            this.setState({ showConfirmNewPass: true })
        }
    }

    render() {

        const token = localStorage.getItem("lms-sess-key");
        if (!token) {
            return <Redirect to="/auth/login" />;
        }

        return (
            <div className="container-lg">
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

                                                    {this.state.error !== '' && (
                                                        <div class="alert alert-danger" role="alert" style={{ marginTop: "20px" }}>
                                                            {this.state.error}
                                                        </div>
                                                    )}

                                                    {this.state.success !== '' && (
                                                        <div class="alert alert-success" role="alert" style={{ marginTop: "20px" }}>
                                                            {this.state.success}
                                                        </div>
                                                    )}

                                                    <div className="form-group">

                                                        <div className="d-block">
                                                            <label
                                                                htmlFor="password"
                                                                className="control-label"
                                                            >
                                                                Password Lama
                                                            </label>
                                                        </div>

                                                        <div className="input-group mb-3">
                                                            <input
                                                                id="oldpassword"
                                                                type={this.state.showOldPass == true ? 'text' : 'password'}
                                                                className="form-control"
                                                                name="oldpassword"
                                                                tabIndex="2"
                                                                required
                                                                value={this.state.oldpass}
                                                                onChange={this.onChangeOldPass}
                                                            />

                                                            <div className="input-group-append" title="Show Password">
                                                                <span className="input-group-text bg-semi-white password-show-icon" onClick={this.handleShowOldPassword} onMouseOver={this.changePointer}>
                                                                    {this.state.showOldPass == false ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                                                                </span>
                                                            </div>

                                                            {this.state.isSubmit == true && this.state.oldpass == '' ? <div className="invalid-feedback" style={{ display: 'inherit' }}>
                                                                Password Lama Tidak Boleh Kosong!
                                                            </div> : null}
                                                        </div>

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

                                                        <div className="input-group mb-3">
                                                            <input
                                                                id="newpassword"
                                                                type={this.state.showNewPass == true ? 'text' : 'password'}
                                                                className="form-control"
                                                                name="newpassword"
                                                                tabIndex="2"
                                                                required
                                                                value={this.state.newpass}
                                                                onChange={this.onChangeNewPass}
                                                            />

                                                            <div className="input-group-append" title="Show Password">
                                                                <span className="input-group-text bg-semi-white password-show-icon" onClick={this.handleShowNewPassword} onMouseOver={this.changePointer}>
                                                                    {this.state.showNewPass == false ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                                                                </span>
                                                            </div>

                                                            {this.state.isSubmit == true && this.state.newpass == '' ? <div className="invalid-feedback" style={{ display: 'inherit' }}>
                                                                Password Baru Tidak Boleh Kosong!
                                                            </div> : null}

                                                        </div>

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

                                                        <div className="input-group mb-3">
                                                            <input
                                                                id="confirmnewpassword"
                                                                type={this.state.showConfirmNewPass == true ? 'text' : 'password'}
                                                                className="form-control"
                                                                name="confirmnewpassword"
                                                                tabIndex="2"
                                                                required
                                                                value={this.state.confirmnewpass}
                                                                onChange={this.onChangeConfirmNewPass}
                                                            />

                                                            <div className="input-group-append" title="Show Password">
                                                                <span className="input-group-text bg-semi-white password-show-icon" onClick={this.handleShowConfirmNewPassword} onMouseOver={this.changePointer}>
                                                                    {this.state.showConfirmNewPass == false ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                                                                </span>
                                                            </div>

                                                            {this.state.isSubmit == true && this.state.confirmnewpass == '' ? <div className="invalid-feedback" style={{ display: 'inherit' }}>
                                                                Konfirmasi Password Baru Tidak Boleh Kosong!
                                                            </div> : null}

                                                        </div>

                                                    </div>

                                                    <div className="form-group">

                                                        <button type="submit" className="btn btn-primary  btn-lg btn-block" onClick={this.submitLogin} tabIndex="4" > {this.state.loadingProcess == true && (
                                                            <i
                                                                className="fa fa-spinner fa-spin"
                                                                style={{ marginRight: "5px" }}
                                                            />
                                                        )} {this.state.loadingProcess == true ? 'Loading' : 'Ganti Password'} </button>

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
            </div>
        );
    }
}

export default ChangePassword
