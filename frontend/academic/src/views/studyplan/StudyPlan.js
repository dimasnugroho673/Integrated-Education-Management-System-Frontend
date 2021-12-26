import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {
    CButton,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
} from '@coreui/react'
import axios from "axios";
import StudyPlanList from "./StudyPlanList";

export class StudyPlan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataReady: false,
            query: '',
            coursePlan: [],
            coursePick: [],
            sksCount: 0,
            sksMax: 21,
            modal: false,
        };
    }

    //satu sks: 50 menit
    //dua sks: 100 menit (1 jam 40 menit)
    //tiga sks: 150 menit (2 jam 30 menit)
    //empat sks: 200 menit (3 jam 20 menit)
    componentDidMount() {
        const key = localStorage.getItem("lms-sess-key");
        axios.defaults.headers.common['Authorization'] = `Bearer ${key}`
        axios
            .get("https://mock-api-integrated-lms.herokuapp.com/api/v1/courses")
            .then((result) => {
                console.log(result)
                this.setState({
                    coursePlan: result.data.data,
                    dataReady: true,
                });
            });
    }

    searchCourse = (e) => {
        this.setState({ query: e.target.value })
    }

    handleClickDetail() {
        alert("Terapkan");
    }

    handleClickSubmit() {
        // localStorage.setItem('course_picked', JSON.stringify(this.state.coursePick))
        const data = {
            "courses": this.state.coursePick
        };
        const key = localStorage.getItem("lms-sess-key");
        axios.defaults.headers.common['Authorization'] = `Bearer ${key}`
        axios
            .post("https://mock-api-integrated-lms.herokuapp.com/api/v1/user/course", data)
            .then((result) => {
                if (result.data.status == 'success') {
                    console.log(result)
                    console.log('inputed success')
                    localStorage.setItem('lirs_status', true);
                    window.location.href = "/a/dashboard";
                }
            })
            .catch(() => {
                console.log(data)
                console.log('inputed failed')
            })
    }

    handleAddSKS = (sksPerStudy, courseID, courseSessionID) => {
        this.setState({ sksCount: this.state.sksCount + sksPerStudy })

        if (sksPerStudy != 0) {
            //adding new data
            this.state.coursePick.push({
                idCourse: courseID,
                idSession: courseSessionID,
            })

            //updating the state value
            this.setState({ ...this.state.coursePick })
        } else if (sksPerStudy == 0) {
            let index = this.state.coursePick.findIndex(el => el.idCourse === courseID)
            this.state.coursePick[index] = {
                ...this.state.coursePick[index],
                idCourse: courseID,
                idSession: courseSessionID,
            }
            this.setState({ ...this.state.coursePick })
        }

        console.table(this.state.coursePick)
    }

    handleRemoveSKS = (sksPerStudy, courseCode) => {
        this.setState({ sksCount: this.state.sksCount - sksPerStudy })

        let index = this.state.coursePick.findIndex(el => el.courseCode === courseCode)
        this.state.coursePick.splice(index, 1)
        this.setState({ ...this.state.coursePick })

        console.table(this.state.coursePick)
    }

    setOpenModal() {
        this.setState({ modal: true })
    }

    setCloseModal() {
        this.setState({ modal: false })
    }

    render() {

        const coursePlan = this.state.coursePlan;

        const token = localStorage.getItem("lms-sess-key");
        if (!token) {
            return <Redirect to="/auth/login" />;
        }

        if (this.state.dataReady === false) {
            return (
                <div className="main-content-plan">
                    <section className="section">
                        <div className="section-header">
                            {/* <div className="bg-primary rounded wrapper-icon-page-title">
                                <span
                                    className="iconify icon-page-title"
                                    data-icon="uil:postcard"
                                    data-inline="false"
                                ></span>
                            </div> */}
                            <h1>Isian Rencana Studi</h1>
                            {/* <div class="section-header-breadcrumb">
                            <div class="breadcrumb-item">Info Terdahulu</div>
                        </div> */}
                        </div>

                        <div className="section-body">

                            <div className="row">
                                <div className="col-md-8">
                                    <h6 style={{ marginBottom: "20px" }}>
                                        Matakuliah Semester Ini
                                    </h6>
                                </div>
                                <div className="col-md-4">
                                    <table
                                        style={{
                                            width: "100%",
                                            marginBottom: "20px"
                                        }}
                                    >
                                        <tbody>
                                            <tr>
                                                <td
                                                    style={{
                                                        textAlign: "center",
                                                        background: "white",
                                                        fontWeight: "bold"
                                                    }}
                                                >
                                                    <span>Batas Kredit Semester Ini : 0</span>
                                                </td>
                                                <td
                                                    style={{
                                                        textAlign: "center",
                                                        background: "white",
                                                        fontWeight: "bold"
                                                    }}
                                                >
                                                    <span>Terambil : 0</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="row">
                                {/* mobile only */}

                                <div className="col-md-4">
                                    <div className="card" style={{ height: "470px" }}>
                                        <div className="card-body">
                                            <span style={{ fontWeight: "bold" }}>Filter</span>
                                            <div
                                                className="form-group"
                                                style={{ marginTop: "20px" }}
                                            >
                                                <label>Semester</label>
                                                <select className="custom-select">
                                                    <option defaultValue>-Pilih-</option>
                                                    <option value="Semua Semester">
                                                        Semua Semester
                                                    </option>
                                                    <option value="Semester 1">Semester 1</option>
                                                    <option value="Semester 2">Semester 2</option>
                                                    <option value="Semester 3">Semester 3</option>
                                                    <option value="Semester 4">Semester 4</option>
                                                    <option value="Semester 5">Semester 5</option>
                                                    <option value="Semester 6">Semester 6</option>
                                                    <option value="Semester 7">Semester 7</option>
                                                    <option value="Semester 8">Semester 8</option>
                                                </select>
                                            </div>
                                            {/* <div className="form-group">
                          <label>Wajib / Pilihan</label>
                          <select className="custom-select">
                            <option defaultValue>-Pilih-</option>
                            <option value="Seluruhnya">Seluruhnya</option>
                            <option value="Wajib">Wajib</option>
                            <option value="Pilihan">Pilihan</option>
                          </select>
                        </div> */}

                                        </div>

                                        <div className="card-footer">
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="customCheck1"
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        htmlFor="customCheck1"
                                                    >
                                                        Termasuk matakuliah yang telah dilulusi
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div
                                                    className="btn btn-outline-primary btn-lg btn-block"
                                                    onClick={() => this.handleClickDetail()}
                                                >
                                                    Terapkan
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-8">
                                    <div className="card" style={{ height: "470px" }}>
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
            );
        } else {
            if (coursePlan.length === 0) {
                return (
                    <div className="main-content-plan">
                        <section className="section">
                            <div className="section-header">
                                {/* <div className="bg-primary rounded wrapper-icon-page-title">
                                    <span
                                        className="iconify icon-page-title"
                                        data-icon="uil:postcard"
                                        data-inline="false"
                                    ></span>
                                </div> */}
                                <h1>Isian Rencana Studi</h1>
                                {/* <div class="section-header-breadcrumb">
                            <div class="breadcrumb-item">Info Terdahulu</div>
                        </div> */}
                            </div>

                            <div className="section-body">

                                <div className="row">
                                    <div className="col-md-8">
                                        <h6 style={{ marginBottom: "20px" }}>
                                            Matakuliah Semester Ini
                                        </h6>
                                    </div>
                                    <div className="col-md-4">
                                        <table
                                            style={{
                                                width: "100%",
                                                marginBottom: "20px"
                                            }}
                                        >
                                            <tbody>
                                                <tr>
                                                    <td
                                                        style={{
                                                            textAlign: "center",
                                                            background: "white",
                                                            fontWeight: "bold"
                                                        }}
                                                    >
                                                        <span>Batas Kredit Semester Ini : {this.state.sksMax}</span>
                                                    </td>
                                                    <td
                                                        style={{
                                                            textAlign: "center",
                                                            background: "white",
                                                            fontWeight: "bold"
                                                        }}
                                                    >
                                                        <span>Terambil : {this.state.sksCount}</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="row">
                                    {/* mobile only */}

                                    <div className="col-md-4">
                                        <div className="card" style={{ height: "470px" }}>
                                            <div className="card-body">
                                                <span style={{ fontWeight: "bold" }}>Filter</span>
                                                <div
                                                    className="form-group"
                                                    style={{ marginTop: "20px" }}
                                                >
                                                    <label>Semester</label>
                                                    <select className="custom-select">
                                                        <option defaultValue>-Pilih-</option>
                                                        <option value="Semua Semester">
                                                            Semua Semester
                                                        </option>
                                                        <option value="Semester 1">Semester 1</option>
                                                        <option value="Semester 2">Semester 2</option>
                                                        <option value="Semester 3">Semester 3</option>
                                                        <option value="Semester 4">Semester 4</option>
                                                        <option value="Semester 5">Semester 5</option>
                                                        <option value="Semester 6">Semester 6</option>
                                                        <option value="Semester 7">Semester 7</option>
                                                        <option value="Semester 8">Semester 8</option>
                                                    </select>
                                                </div>
                                                {/* <div className="form-group">
                          <label>Wajib / Pilihan</label>
                          <select className="custom-select">
                            <option defaultValue>-Pilih-</option>
                            <option value="Seluruhnya">Seluruhnya</option>
                            <option value="Wajib">Wajib</option>
                            <option value="Pilihan">Pilihan</option>
                          </select>
                        </div> */}

                                            </div>

                                            <div className="card-footer">
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="customCheck1"
                                                        />
                                                        <label
                                                            className="custom-control-label"
                                                            htmlFor="customCheck1"
                                                        >
                                                            Termasuk matakuliah yang telah dilulusi
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div
                                                        className="btn btn-outline-primary btn-lg btn-block"
                                                        onClick={() => this.handleClickDetail()}
                                                    >
                                                        Terapkan
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-8">
                                        <div className="card" style={{ height: "470px" }}>
                                            <div className="card-body">
                                                <h6 className="text-center mt-4">
                                                    Data Jadwal Matakuliah Belum Tersedia.
                                                </h6>
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
                    <div className="main-content-plan">
                        <section className="section">
                            <div className="section-header">
                                {/* <div className="bg-primary rounded wrapper-icon-page-title">
                                    <span
                                        className="iconify icon-page-title"
                                        data-icon="uil:postcard"
                                        data-inline="false"
                                    ></span>
                                </div> */}
                                <h1>Isian Rencana Studi</h1>
                                {/* <div class="section-header-breadcrumb">
                            <div class="breadcrumb-item">Info Terdahulu</div>
                        </div> */}
                            </div>

                            <div className="section-body">

                                <div className="row">
                                    <div className="col-md-8">
                                        <h6 style={{ marginBottom: "20px" }}>
                                            Matakuliah Semester Ini
                                        </h6>
                                    </div>
                                    <div className="col-md-4">
                                        <table
                                            style={{
                                                width: "100%",
                                                marginBottom: "20px"
                                            }}
                                        >
                                            <tbody>
                                                <tr>
                                                    <td
                                                        style={{
                                                            textAlign: "center",
                                                            background: "white",
                                                            fontWeight: "bold"
                                                        }}
                                                    >
                                                        <span>Batas Kredit Semester Ini : {this.state.sksMax}</span>
                                                    </td>
                                                    <td
                                                        style={{
                                                            textAlign: "center",
                                                            background: "white",
                                                            fontWeight: "bold"
                                                        }}
                                                    >
                                                        <span>Terambil : {this.state.sksCount}</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="row">
                                    {/* mobile only */}

                                    <div className="col-md-4">
                                        <div className="card" style={{ height: "470px" }}>
                                            <div className="card-body">
                                                <span style={{ fontWeight: "bold" }}>Filter</span>
                                                <div
                                                    className="form-group"
                                                    style={{ marginTop: "20px" }}
                                                >
                                                    <label>Semester</label>
                                                    <select className="custom-select">
                                                        <option defaultValue>-Pilih-</option>
                                                        <option value="Semua Semester">
                                                            Semua Semester
                                                        </option>
                                                        <option value="Semester 1">Semester 1</option>
                                                        <option value="Semester 2">Semester 2</option>
                                                        <option value="Semester 3">Semester 3</option>
                                                        <option value="Semester 4">Semester 4</option>
                                                        <option value="Semester 5">Semester 5</option>
                                                        <option value="Semester 6">Semester 6</option>
                                                        <option value="Semester 7">Semester 7</option>
                                                        <option value="Semester 8">Semester 8</option>
                                                    </select>
                                                </div>
                                                {/* <div className="form-group">
                          <label>Wajib / Pilihan</label>
                          <select className="custom-select">
                            <option defaultValue>-Pilih-</option>
                            <option value="Seluruhnya">Seluruhnya</option>
                            <option value="Wajib">Wajib</option>
                            <option value="Pilihan">Pilihan</option>
                          </select>
                        </div> */}

                                            </div>

                                            <div className="card-footer">
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="customCheck1"
                                                        />
                                                        <label
                                                            className="custom-control-label"
                                                            htmlFor="customCheck1"
                                                        >
                                                            Termasuk matakuliah yang telah dilulusi
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div
                                                        className="btn btn-outline-primary btn-lg btn-block"
                                                        onClick={() => this.handleClickDetail()}
                                                    >
                                                        Terapkan
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-8">
                                        <div className="card" style={{ height: '470px' }}>
                                            <div className="card-header">
                                                <h4>Semester 3, Teknik Informatika</h4>
                                                <div className="card-header-form">
                                                    <input
                                                        type="text"
                                                        name="search"
                                                        className="form-control card-header-form"
                                                        value={this.state.query}
                                                        onChange={this.searchCourse}
                                                        placeholder="Cari Mata Kuliah"
                                                    />
                                                </div>
                                            </div>
                                            {/* <StudyPlanContainer coursePlans={this.dynamicSearch()} /> */}
                                            {/* <div className="card-body" style={{ overflowY: 'scroll', marginTop: '20px 0px 20px 0px' }}>
                                                {coursePlan.map(plan => {
                                                    return (
                                                        <StudyPlanList key={plan.courseCode} data={plan} addSKS={this.handleAddSKS} removeSKS={this.handleRemoveSKS}
                                                            maxSKS={this.state.sksMax} countSKS={this.state.sksCount} />
                                                    );
                                                })}
                                            </div> */}

                                            <div className="card-body" style={{ overflowY: 'scroll', marginTop: '20px 0px 20px 0px' }}>
                                                {coursePlan?.filter((dt) =>
                                                    dt.courseTitle.toLowerCase().includes(this.state.query.toLowerCase())
                                                )
                                                    .map(plan => {
                                                        return (
                                                            <StudyPlanList key={plan.courseCode} data={plan} addSKS={this.handleAddSKS} removeSKS={this.handleRemoveSKS}
                                                                maxSKS={this.state.sksMax} countSKS={this.state.sksCount} />
                                                        );
                                                    })}
                                            </div>

                                            <div style={{ borderRadius: '0 0 10px 10px', borderTop: 'none', padding: '0.75rem 1.25rem' }}>
                                                <div className="form-group">
                                                    <div
                                                        className="btn btn-primary btn-lg btn-block"
                                                        onClick={() => this.setOpenModal()}
                                                    >
                                                        Ajukan
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  */}
                                </div>
                            </div>
                        </section>

                        <CModal
                            show={this.state.modal}
                            onClose={() => this.setCloseModal()}
                        >
                            <CModalHeader closeButton>
                                <CModalTitle>Ajukan Rencana Studi</CModalTitle>
                            </CModalHeader>
                            <CModalBody>
                                Apakah Kamu Sudah Yakin Dengan Rencana Studi yang
                                Diajukan?
                            </CModalBody>
                            <CModalFooter>
                                <CButton
                                    color="primary"
                                    onClick={() => this.handleClickSubmit()}>Simpan</CButton>{' '}
                                <CButton
                                    color="secondary"
                                    onClick={() => this.setCloseModal()}
                                >Batal</CButton>
                            </CModalFooter>
                        </CModal>

                    </div >
                );
            }
        }
    }
}

export default StudyPlan
