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
        if (localStorage.getItem("lirs_status")) {
            const key = localStorage.getItem("lms-sess-key");
            axios.defaults.headers.common['Authorization'] = `Bearer ${key}`
            axios
                .get("https://mock-api-integrated-lms.herokuapp.com/api/v1/user/courses")
                .then((result) => {
                    console.log(result)
                    this.setState({
                        courseList: result.data.data,
                        dataReady: true,
                    });
                });
        } else {
            this.setState({
                courseList: [],
                dataReady: true
            });
        }
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
