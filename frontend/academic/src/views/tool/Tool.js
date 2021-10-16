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
        axios
            .get("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=3")
            .then(() => {
                this.setState({
                    tools: [
                        {
                            msgid: 24441233123,
                            type: "Labs",
                            deviceDesc: "Mikrotik UR 98912",
                            date: "20-02-2021",
                            deadline: "28-02-2021",
                        },
                        {
                            msgid: 24441233124,
                            type: "Labs",
                            deviceDesc: "Swicth 8 port 100/100",
                            date: "20-02-2021",
                            deadline: "01-05-2021",
                        },
                    ],
                    dataReady: true,
                });
            });
    }

    render() {
        const tools = this.state.tools;

        // const token = localStorage.getItem("token");
        // if (!token) {
        //     return <Redirect to="/auth/login" />;
        // }

        if (this.state.dataReady === false) {
            return (
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
            );
        } else {
            if (tools.length === 0) {
                return (
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
                );
            } else {
                return (
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
                );
            }
        }
    }
}

export default Tool
