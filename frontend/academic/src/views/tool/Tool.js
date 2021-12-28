import React, { Component } from "react";
import ToolList from "./ToolList";
import axios from "axios";
import { Redirect } from "react-router-dom";

export class Tool extends Component {
    constructor() {
        super();
        this.state = {
            dataReady: false,
            tools: [],
        };
    }

    componentDidMount() {
        const key = localStorage.getItem("lms-sess-key");
        axios.defaults.headers.common['Authorization'] = `Bearer ${key}`
        axios
            .get(`${process.env.REACT_APP_API_ENDPOINT}/loans/tool`)
            .then((result) => {
                console.log(result)
                this.setState({
                    tools: result.data.data,
                    dataReady: true,
                });
            });
    }

    render() {
        const tools = this.state.tools;

        const token = localStorage.getItem("lms-sess-key");
        if (!token) {
            return <Redirect to="/auth/login" />;
        }

        if (this.state.dataReady === false) {
            return (
                <div className="container-xl">
                    <div className="main-content">
                        <section className="section">
                            <div className="section-header">
                                {/* <div className="bg-primary rounded wrapper-icon-page-title">
                                <span
                                    className="iconify icon-page-title"
                                    data-icon="uil:wrench"
                                    data-inline="false"
                                ></span>
                            </div> */}
                                <h1>Peminjaman Alat</h1>
                                {/* <div class="section-header-breadcrumb">
                            <div class="breadcrumb-item">Alat</div>
                        </div> */}
                            </div>

                            <div className="section-body">
                                <div className="row">
                                    {/* mobile only */}

                                    <div className="col-md-12">
                                        <div>
                                            <h6>LIST PEMINJAMAN ALAT</h6>
                                        </div>
                                        <div>
                                            <p>
                                                Berikut ini adalah daftar alat yang kamu pinjam, harap
                                                mengembalikan alat sebelum jatuh tempo.
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
                </div>
            );
        } else {
            if (tools.length === 0) {
                return (
                    <div className="container-xl">
                        <div className="main-content">
                            <section className="section">
                                <div className="section-header">
                                    {/* <div className="bg-primary rounded wrapper-icon-page-title">
                                    <span
                                        className="iconify icon-page-title"
                                        data-icon="uil:wrench"
                                        data-inline="false"
                                    ></span>
                                </div> */}
                                    <h1>Peminjaman Alat</h1>
                                    {/* <div class="section-header-breadcrumb">
                            <div class="breadcrumb-item">Alat</div>
                        </div> */}
                                </div>

                                <div className="section-body">
                                    <div className="row">
                                        {/* mobile only */}

                                        <div className="col-md-12">
                                            <div>
                                                <h6>LIST PEMINJAMAN ALAT</h6>
                                            </div>
                                            <div>
                                                <p>
                                                    Berikut ini adalah daftar alat yang kamu pinjam, harap
                                                    mengembalikan alat sebelum jatuh tempo.
                                                </p>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h6 className="text-center mt-4">
                                                                Data Alat yang Dipinjam Belum Tersedia.
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
                    </div>
                );
            } else {
                return (
                    <div className="container-xl">
                        <div className="main-content">
                            <section className="section">
                                <div className="section-header">
                                    {/* <div className="bg-primary rounded wrapper-icon-page-title">
                                    <span
                                        className="iconify icon-page-title"
                                        data-icon="uil:wrench"
                                        data-inline="false"
                                    ></span>
                                </div> */}
                                    <h1>Peminjaman Alat</h1>
                                    {/* <div class="section-header-breadcrumb">
                            <div class="breadcrumb-item">Alat</div>
                        </div> */}
                                </div>

                                <div className="section-body">
                                    <div className="row">
                                        {/* mobile only */}

                                        <div className="col-md-12">
                                            <div>
                                                <h6>LIST PEMINJAMAN ALAT</h6>
                                            </div>
                                            <div>
                                                <p>
                                                    Berikut ini adalah daftar alat yang kamu pinjam, harap
                                                    mengembalikan alat sebelum jatuh tempo.
                                                </p>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="list-group">
                                                        {tools.map((tool, iTool) => {
                                                            return (
                                                                <ToolList
                                                                    key={tool.msgid}
                                                                    data={tool}
                                                                    number={iTool + 1}
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
                    </div>
                );
            }
        }
    }
}

export default Tool
