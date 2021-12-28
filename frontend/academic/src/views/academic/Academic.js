import React, { Component } from "react";
import AcademicList from "./AcademicList";
import axios from "axios";
import { Redirect } from "react-router-dom";

export class Academic extends Component {
    constructor() {
        super();
        this.state = {
            dataReady: false,
            courseHistory: [],
        };
    }

    componentDidMount() {
        axios
            .get("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=3")
            .then(() => {
                this.setState({
                    courseHistory: [
                        {
                            courseID: "876487234600",
                            courseCode: "INF31001",
                            courseTitle: "Basis Data",
                            courseCredits: "3",
                            courseDepartmentID: "002",
                            courseLecture: "Prof Dr.Mardinati, M.Sc",
                            courseYear: "Ganjil 2018-2019",
                            courseYearID: "1232",
                            courseGrade: "A",
                            coursePoints: "95",
                            courseGradeComponents: [
                                {
                                    components: "Absensi",
                                    weights: "5",
                                    points: "50",
                                },
                                {
                                    components: "Tugas",
                                    weights: "30",
                                    points: "98",
                                },
                                {
                                    components: "UTS",
                                    weights: "30",
                                    points: "95",
                                },
                                {
                                    components: "UAS",
                                    weights: "35",
                                    points: "96",
                                },
                            ],
                        },
                        {
                            courseID: "876487234601",
                            courseCode: "INF31002",
                            courseTitle: "Struktur Data",
                            courseCredits: "3",
                            courseDepartmentID: "002",
                            courseLecture: "Prof Dr.Mardinati, M.Sc",
                            courseYear: "Ganjil 2018-2019",
                            courseYearID: "1232",
                            courseGrade: "E",
                            coursePoints: "50",
                            courseGradeComponents: [
                                {
                                    components: "Absensi",
                                    weights: "5",
                                    points: "10",
                                },
                                {
                                    components: "Tugas",
                                    weights: "30",
                                    points: "58",
                                },
                                {
                                    components: "UTS",
                                    weights: "30",
                                    points: "55",
                                },
                                {
                                    components: "UAS",
                                    weights: "35",
                                    points: "46",
                                },
                            ],
                        },
                    ],
                    dataReady: true,
                });
            });
    }

    render() {
        const courseHistory = this.state.courseHistory;

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
                                    data-icon="uil:file-alt"
                                    data-inline="false"
                                ></span>
                            </div> */}
                                <h1>Akademik</h1>
                                {/* <div className="section-header-breadcrumb">
                            <div className="breadcrumb-item">Akademik</div>
                        </div> */}
                            </div>

                            <div className="section-body">
                                <div className="row">
                                    {/* mobile only */}

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

                                    {/*  */}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            );
        } else {
            if (courseHistory.length === 0) {
                return (
                    <div className="container-xl">
                        <div className="main-content">
                            <section className="section">
                                <div className="section-header">
                                    {/* <div className="bg-primary rounded wrapper-icon-page-title">
                                    <span
                                        className="iconify icon-page-title"
                                        data-icon="uil:file-alt"
                                        data-inline="false"
                                    ></span>
                                </div> */}
                                    <h1>Akademik</h1>
                                    {/* <div className="section-header-breadcrumb">
                            <div className="breadcrumb-item">Akademik</div>
                        </div> */}
                                </div>

                                <div className="section-body">
                                    <div className="row">
                                        {/* mobile only */}

                                        <div className="col-md-12">
                                            <div className="card">
                                                <div className="card-header">
                                                    <table
                                                        style={{
                                                            marginBottom: "20px",
                                                        }}
                                                    >
                                                        <tbody>
                                                            <tr>
                                                                <td
                                                                    style={{
                                                                        textAlign: "left",
                                                                        background: "white",
                                                                        fontWeight: "bold",
                                                                        width: "300px",
                                                                    }}
                                                                >
                                                                    <span>Total Kredit Lulus : 0</span>
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        textAlign: "left",
                                                                        fontWeight: "bold",
                                                                        width: "120px",
                                                                    }}
                                                                >
                                                                    <span>IPK : 0</span>
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        textAlign: "left",
                                                                        fontWeight: "bold",
                                                                        width: "250px",
                                                                    }}
                                                                >
                                                                    <span>Total Semester : 0</span>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                                <div className="card-body">
                                                    <h6 className="text-center mt-4">
                                                        Data Riwayat Akademik Belum Tersedia.
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
                    <div className="container-xl">
                        <div className="main-content">
                            <section className="section">
                                <div className="section-header">
                                    {/* <div className="bg-primary rounded wrapper-icon-page-title">
                                    <span
                                        className="iconify icon-page-title"
                                        data-icon="uil:file-alt"
                                        data-inline="false"
                                    ></span>
                                </div> */}
                                    <h1>Akademik</h1>
                                    {/* <div className="section-header-breadcrumb">
                            <div className="breadcrumb-item">Akademik</div>
                        </div> */}
                                </div>

                                <div className="section-body">
                                    <div className="row">
                                        {/* mobile only */}

                                        <div className="col-md-12">
                                            <div className="card">
                                                <div className="card-header">
                                                    <table
                                                        style={{
                                                            marginBottom: "20px",
                                                        }}
                                                    >
                                                        <tbody>
                                                            <tr>
                                                                <td
                                                                    style={{
                                                                        textAlign: "left",
                                                                        background: "white",
                                                                        fontWeight: "bold",
                                                                        width: "300px",
                                                                    }}
                                                                >
                                                                    <span>Total Kredit Lulus : 42</span>
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        textAlign: "left",
                                                                        fontWeight: "bold",
                                                                        width: "120px",
                                                                    }}
                                                                >
                                                                    <span>IPK : 2.50</span>
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        textAlign: "left",
                                                                        fontWeight: "bold",
                                                                        width: "250px",
                                                                    }}
                                                                >
                                                                    <span>Total Semester : 7</span>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                                <div className="card-body">
                                                    {courseHistory.map((history) => {
                                                        if (
                                                            (history.courseGrade === "A") |
                                                            (history.courseGrade === "B") |
                                                            (history.courseGrade === "C")
                                                        ) {
                                                            return (
                                                                <AcademicList
                                                                    key={history.courseID}
                                                                    data={history}
                                                                    lulus="Lulus"
                                                                />
                                                            );
                                                        } else {
                                                            return (
                                                                <AcademicList
                                                                    key={history.courseID}
                                                                    data={history}
                                                                    lulus="Tidak Lulus"
                                                                />
                                                            );
                                                        }
                                                    })}
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

export default Academic
