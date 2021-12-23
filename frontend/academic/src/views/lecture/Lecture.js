import React, { Component } from "react";
import LectureList from "./LectureList";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class Lecture extends Component {
    constructor() {
        super();
        this.state = {
            dataReady: false,
            courseList: []
        };
    }

    componentDidMount() {
        axios
            .get("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=3")
            .then(() => {
                this.setState({
                    courseList: [
                        {
                            courseID: "987123798712361238127312",
                            courseCode: "INF11011",
                            courseTitle: "Pemograman Jaringan",
                            courseCredits: "3",
                            courseLecture: "Budi Raharjo",
                            courseRoom: "Ruang 2",
                            courseSchedule: "Selasa 07.00-10.00 WIB",
                            info: [
                                {
                                    msgid: "56734575675",
                                    message: "Tugas membuat WebRTC belum di kerjakan"
                                }
                            ]
                        },
                        {
                            courseID: "8762394872346234",
                            courseCode: "INF11099",
                            courseTitle: "Matematika Diskrit",
                            courseCredits: "3",
                            courseLecture: "Prof Dr.Susi Susanti, M.Sc",
                            courseRoom: "Ruang 1",
                            courseSchedule: "Senin 13.00-15.00 WIB",
                            info: []
                        },
                        {
                            courseID: "8232394898346276",
                            courseCode: "INF11029",
                            courseTitle: "Pemograman Web",
                            courseCredits: "4",
                            courseLecture: "Prof Dr.Lorem Ipsum, M.Sc",
                            courseRoom: "Ruang 6",
                            courseSchedule: "Rabu 13.00-15.00 WIB",
                            info: [
                                {
                                    msgid: "56674575612",
                                    message: "Tugas membuat web HTML CSS sederhana"
                                }
                            ]
                        },
                        {
                            courseID: "8245394872344421",
                            courseCode: "INF11021",
                            courseTitle: "Metode Numerik",
                            courseCredits: "3",
                            courseLecture: "Prof Dr.Seri Mawa, M.Sc",
                            courseRoom: "Ruang 3",
                            courseSchedule: "Jumat 13.00-15.00 WIB",
                            info: []
                        },
                        {
                            courseID: "8556794845349901",
                            courseCode: "INF11039",
                            courseTitle: "Sistem Operasi",
                            courseCredits: "3",
                            courseLecture: "Beni Sulisno",
                            courseRoom: "Ruang 1",
                            courseSchedule: "Selasa 13.00-15.00 WIB",
                            info: []
                        },
                        {
                            courseID: "7781794845343390",
                            courseCode: "INF11041",
                            courseTitle: "Probabilistik dan Statistika",
                            courseCredits: "3",
                            courseLecture: "Prof Dr.Besi Suci, M.Sc",
                            courseRoom: "Ruang 1",
                            courseSchedule: "Rabu 10.00-12.00 WIB",
                            info: []
                        },
                        {
                            courseID: "833994845388091",
                            courseCode: "INF11049",
                            courseTitle: "Sistem Digital",
                            courseCredits: "3",
                            courseLecture: "Sam Budian, M.Cs.",
                            courseRoom: "Ruang 1",
                            courseSchedule: "Senin 07.00-10.00 WIB",
                            info: [
                                {
                                    msgid: "58974575991",
                                    message: "Tugas membuat simulasi sensor jarak sederhana"
                                }
                            ]
                        },
                        {
                            courseID: "8773784845343308",
                            courseCode: "INF11051",
                            courseTitle: "Analisa dan Perancangan Perangkat Lunak",
                            courseCredits: "2",
                            courseLecture: "Beni Sulisno",
                            courseRoom: "Ruang 3",
                            courseSchedule: "Jumat 07.00-12.00 WIB",
                            info: [
                                {
                                    msgid: "58974572321",
                                    message: "Tugas membuat perancangan awal perangkat lunak"
                                }
                            ]
                        }
                    ],
                    dataReady: true
                });
            });
    }

    render() {
        const CourseList = this.state.courseList;

        const token = localStorage.getItem("lms-sess-key");
        if (!token) {
            return <Redirect to="/auth/login" />;
        }

        if (this.state.dataReady === false) {
            return (
                <div className="main-content">
                    <section className="section">
                        <div className="section-header">
                            {/* <div className="bg-primary rounded wrapper-icon-page-title">
                                <span
                                    className="iconify icon-page-title"
                                    data-icon="uil:calendar-alt"
                                    data-inline="false"
                                ></span>
                            </div> */}
                            <h1>Kuliah</h1>
                            {/* <div class="section-header-breadcrumb">
                            <div class="breadcrumb-item">Kuliah</div>
                        </div> */}
                        </div>

                        <div className="section-body">
                            <div className="row">
                                {/* mobile only */}

                                <div className="col-md-12">
                                    <div>
                                        <h6>LIST MATA KULIAH</h6>
                                    </div>
                                    <div>
                                        <p>
                                            Berikut ini adalah daftar mata kuliah yang kamu ambil
                                            pada semester ini.
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
            if (CourseList.length === 0) {
                return (
                    <div className="main-content">
                        <section className="section">
                            <div className="section-header">
                                {/* <div className="bg-primary rounded wrapper-icon-page-title">
                                    <span
                                        className="iconify icon-page-title"
                                        data-icon="uil:calendar-alt"
                                        data-inline="false"
                                    ></span>
                                </div> */}
                                <h1>Kuliah</h1>
                                {/* <div class="section-header-breadcrumb">
                            <div class="breadcrumb-item">Kuliah</div>
                        </div> */}
                            </div>

                            <div className="section-body">
                                <div className="row">
                                    {/* mobile only */}

                                    <div className="col-md-12">
                                        <div>
                                            <h6>LIST MATA KULIAH</h6>
                                        </div>
                                        <div>
                                            <p>
                                                Berikut ini adalah daftar mata kuliah yang kamu ambil
                                                pada semester ini.
                                            </p>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h6 className="text-center mt-4">
                                                            Data Mata Kuliah yang Diambil Belum Tersedia.
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
                                        data-icon="uil:calendar-alt"
                                        data-inline="false"
                                    ></span>
                                </div> */}
                                <h1>Kuliah</h1>
                                {/* <div class="section-header-breadcrumb">
                            <div class="breadcrumb-item">Kuliah</div>
                        </div> */}
                            </div>

                            <div className="section-body">
                                <div className="row">
                                    {/* mobile only */}

                                    <div className="col-md-12">
                                        <div>
                                            <h6>LIST MATA KULIAH</h6>
                                        </div>
                                        <div>
                                            <p>
                                                Berikut ini adalah daftar mata kuliah yang kamu ambil
                                                pada semester ini.
                                            </p>
                                        </div>
                                        <div className="row">
                                            {CourseList.map((course) => {
                                                return (
                                                    <LectureList
                                                        key={course.courseID}
                                                        data={course}
                                                        newinfo={course.info}
                                                    />
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>

                                {/*  */}
                            </div>
                        </section>
                    </div>
                );
            }
        }
    }
}
