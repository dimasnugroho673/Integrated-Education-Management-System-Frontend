import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import AlertInfo from "../dashboard/AlertInfo";
import AnnounInfo from "../dashboard/AnnounInfo";

export class PreviousInfo extends Component {
    constructor() {
        super();
        this.state = {
            dataReady: false,
            announ: [],
            alert: [],
        };
    }

    componentDidMount() {
        axios
            .get("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=3")
            .then(() => {
                this.setState({
                    announ: [
                        {
                            msgid: "23123110",
                            type: "Library",
                            title: "Peminjaman Buku",
                            content: [
                                {
                                    message:
                                        "Buku Kotlin Android Developer belum di kembalikan. Sisa 2 hari",
                                    deadline: "28 Januari 2021",
                                    date: "20-01-2021",
                                },
                            ],
                        },
                        {
                            msgid: "24441233110",
                            type: "Labs",
                            title: "Peminjaman Alat",
                            content: [
                                {
                                    message: "Router Mikrotik Belum Dikembalikan. Sisa 2 hari",
                                    deadline: "28 Januari 2021",
                                    date: "20-01-2021",
                                },
                            ],
                        },
                        {
                            msgid: "98723427826",
                            type: "General",
                            title: "Pengisian Rencana Studi",
                            content: [
                                {
                                    message:
                                        "Batas Pengisian Rencana Studi Tanggal 3 September 2020",
                                    deadline: "03 September 2020",
                                    date: "21-08-2020",
                                },
                            ],
                        },
                    ],
                    alert: [
                        {
                            msgid: "56734575665",
                            type: "CourseTask",
                            title: "Pemograman Berorientasi Objek",
                            content: [
                                {
                                    message:
                                        "Tugas membuat program inheritance belum di kerjakan",
                                    deadline: "30 November 2020",
                                    date: "02-11-2020",
                                },
                            ],
                        },
                    ],
                    dataReady: true,
                });
            });
    }

    render() {
        const listAnnoun = this.state.announ;
        const listAlert = this.state.alert;

        const token = localStorage.getItem("lms-sess-key");
        if (!token) {
            return <Redirect to="/auth/login" />;
        }

        if (this.state.dataReady === false) {
            return (
                <div className="container-lg">
                    <div className="main-content">
                        <section className="section">
                            <div className="section-header">
                                {/* <div className="bg-primary rounded wrapper-icon-page-title">
                                <span
                                    className="iconify icon-page-title"
                                    data-icon="uil:info-circle"
                                    data-inline="false"
                                ></span>
                            </div> */}
                                <h1>Info Terdahulu</h1>
                                {/* <div class="section-header-breadcrumb">
                            <div class="breadcrumb-item">Info Terdahulu</div>
                        </div> */}
                            </div>

                            <div className="section-body">
                                <div className="row">
                                    {/* mobile only */}

                                    <div className="col-md-6">
                                        <h6>
                                            Semua Info Lama{" "}
                                            <span className="badge badge-danger">0</span>
                                        </h6>
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

                                    {/*  */}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            );
        } else {
            if (listAnnoun.length === 0 && listAlert.length === 0) {
                return (
                    <div className="container-lg">
                        <div className="main-content">
                            <section className="section">
                                <div className="section-header">
                                    {/* <div className="bg-primary rounded wrapper-icon-page-title">
                                    <span
                                        className="iconify icon-page-title"
                                        data-icon="uil:info-circle"
                                        data-inline="false"
                                    ></span>
                                </div> */}
                                    <h1>Info Terdahulu</h1>
                                    {/* <div class="section-header-breadcrumb">
                            <div class="breadcrumb-item">Info Terdahulu</div>
                        </div> */}
                                </div>

                                <div className="section-body">
                                    <div className="row">
                                        {/* mobile only */}

                                        <div className="col-md-6">
                                            <h6>
                                                Semua Info Lama{" "}
                                                <span className="badge badge-danger">0</span>
                                            </h6>
                                            <div className="card">
                                                <div className="card-body">
                                                    <h6 className="text-center mt-4">
                                                        Data Infomasi Lama Tidak Tersedia.
                                                    </h6>
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
                    <div className="container-lg">
                        <div className="main-content">
                            <section className="section">
                                <div className="section-header">
                                    {/* <div className="bg-primary rounded wrapper-icon-page-title">
                                    <span
                                        className="iconify icon-page-title"
                                        data-icon="uil:info-circle"
                                        data-inline="false"
                                    ></span>
                                </div> */}
                                    <h1>Info Terdahulu</h1>
                                    {/* <div class="section-header-breadcrumb">
                            <div class="breadcrumb-item">Info Terdahulu</div>
                        </div> */}
                                </div>

                                <div className="section-body">
                                    <div className="row">
                                        {/* mobile only */}

                                        <div className="col-md-6">
                                            <h6>
                                                Semua Info Lama{" "}
                                                <span
                                                    className="badge badge-danger"
                                                    key={listAnnoun.length}
                                                >
                                                    {listAnnoun.length + listAlert.length}
                                                </span>
                                            </h6>
                                            {listAnnoun.map((announ) => {
                                                if (announ.type === "Library") {
                                                    return (
                                                        <AnnounInfo
                                                            key={announ.msgid}
                                                            data={announ}
                                                            icon={"bi bi-journal-bookmark"}
                                                            color={
                                                                "activity-icon bg-primary text-white shadow-primary"
                                                            }
                                                        />
                                                    );
                                                } else if (announ.type === "Labs") {
                                                    return (
                                                        <AnnounInfo
                                                            key={announ.msgid}
                                                            data={announ}
                                                            icon={"bi bi-tools"}
                                                            color={
                                                                "activity-icon bg-success text-white shadow-primary"
                                                            }
                                                        />
                                                    );
                                                } else if (announ.type === "General") {
                                                    return (
                                                        <AnnounInfo
                                                            key={announ.msgid}
                                                            data={announ}
                                                            icon={"bi bi-file-medical"}
                                                            color={
                                                                "activity-icon bg-warning text-white shadow-primary"
                                                            }
                                                        />
                                                    );
                                                }
                                            })}
                                            {listAlert.map((alert) => {
                                                return <AlertInfo key={alert.msgid} data={alert} />;
                                            })}
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

export default PreviousInfo