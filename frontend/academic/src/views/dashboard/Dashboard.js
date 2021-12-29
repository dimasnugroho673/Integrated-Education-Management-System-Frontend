import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import axios from "axios";
import AnnounInfo from "./AnnounInfo";
import AlertInfo from "./AlertInfo";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      dataReady: false,
      announ: [],
      alert: [],
      profile: [],
    };
  }

  componentDidMount() {
    const key = localStorage.getItem("lms-sess-key");
    axios.defaults.headers.common['Authorization'] = `Bearer ${key}`
    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}/user/profile`)
      .then((result) => {
        console.log(result)
        this.setState({
          profile: result.data.data,
          dataReady: true,
        });
      });
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=3")
      .then(() => {
        this.setState({
          announ: [
            {
              msgid: "23123123",
              type: "Library",
              title: "Peminjaman Buku",
              content: [
                {
                  message:
                    "Buku Menjadi Android Developer belum di kembalikan. Sisa 2 hari",
                  deadline: "28 Februari 2021",
                  date: "20-02-2021",
                },
              ],
            },
            {
              msgid: "24441233123",
              type: "Labs",
              title: "Peminjaman Alat",
              content: [
                {
                  message: "Router Mikrotik Belum Dikembalikan. Sisa 2 hari",
                  deadline: "28 Februari 2021",
                  date: "20-02-2021",
                },
              ],
            },
            {
              msgid: "98723427836",
              type: "General",
              title: "Pengisian Rencana Studi",
              content: [
                {
                  message:
                    "Batas Pengisian Rencana Studi Tanggal 3 Februari 2021",
                  deadline: "3 Februari 2021",
                  date: "21-01-2021",
                },
              ],
            },
          ],
          alert: [
            {
              msgid: "56734575675",
              type: "CourseTask",
              title: "Pemograman Jaringan",
              content: [
                {
                  message: "Tugas membuat WebRTC belum di kerjakan",
                  deadline: "1 Mei 2021",
                  date: "28-02-2021",
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
    const profile = this.state.profile;

    const token = localStorage.getItem("lms-sess-key");
    if (!token) {
      return <Redirect to="/auth/login" />;
    }

    if (this.state.dataReady === false) {
      return (
        <div class="container-xl">
          <div className="main-content">
            <section className="section">
              <div className="section-body">
                <div className="card text-white bg-dashboard">
                  <div className="card-body mt-2">
                    <div className="card-body-content">

                      <div style={{ display: 'inline-block' }}>
                        <div className="row">
                          <div className="col-12">
                            <h2 style={{ color: '#fff' }}>
                              Selamat Datang {profile.name}
                            </h2>
                          </div>
                        </div>
                        <p>
                          Dapatkan informasi terkini mengenai perkuliahan anda
                          disini.
                        </p>
                      </div>

                      <div style={{ display: 'inline-block', float: 'right' }}>
                        <img src="../assets/image/header_illustration.png" style={{ width: '200px', height: '200px' }} className="ilus-home-learning" alt="" srcset="" />
                      </div>

                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <h6>
                      Pemberitahuan Terbaru{" "}
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
                  <div className="col-md-6">
                    <h6>
                      Tugas Belum Terkumpul{" "}
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
                </div>
              </div>
            </section>
          </div>
        </div>
      );
    } else {
      if (listAnnoun.length === 0 && listAlert.length === 0) {
        return (
          <div class="container-xl">
            <div className="main-content">
              <section className="section">
                <div className="section-body">
                  <div className="card text-white bg-dashboard">
                    <div className="card-body mt-2">
                      <div className="card-body-content">
                        {/* <img src="../image/ilus_background_class.svg" className="ilus-home-learning" alt="" srcset="" /> */}
                        <div className="row">
                          <div className="col-10">
                            <h2 style={{ color: '#fff' }}>
                              Selamat Datang {profile.name}
                            </h2>
                          </div>
                        </div>
                        <p>
                          Dapatkan informasi terkini mengenai perkuliahan anda
                          disini.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <h6>
                        Pemberitahuan Terbaru{" "}
                        <span
                          className="badge badge-danger"
                          key={listAnnoun.length}
                        >
                          {listAnnoun.length}
                        </span>
                      </h6>
                      <div className="card">
                        <div className="card-body">
                          <h6 className="text-center mt-4">
                            Data Pemberitahuan Terbaru Tidak Tersedia.
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h6>
                        Tugas Belum Terkumpul{" "}
                        <span className="badge badge-danger">0</span>
                      </h6>
                      <div className="card">
                        <div className="card-body">
                          <h6 className="text-center mt-4">
                            Data Tugas Belum Terkumpul Tidak Tersedia.
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        );
      } else if (listAnnoun.length === 0) {
        return (
          <div class="container-xl">
            <div className="main-content">
              <section className="section">
                <div className="section-body">
                  <div className="card text-white bg-dashboard">
                    <div className="card-body mt-2">
                      <div className="card-body-content">
                        {/* <img src="../image/ilus_background_class.svg" className="ilus-home-learning" alt="" srcset="" /> */}
                        <div className="row">
                          <div className="col-10">
                            <h2 style={{ color: '#fff' }}>
                              Selamat Datang {profile.name}
                            </h2>
                          </div>
                        </div>
                        <p>
                          Dapatkan informasi terkini mengenai perkuliahan anda
                          disini.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <h6>
                        Pemberitahuan Terbaru{" "}
                        <span className="badge badge-danger">0</span>
                      </h6>
                      <div className="card">
                        <div className="card-body">
                          <h6 className="text-center mt-4">
                            Data Pemberitahuan Terbaru Tidak Tersedia.
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h6>
                        Tugas Belum Terkumpul{" "}
                        <span
                          className="badge badge-danger"
                          key={listAlert.length}
                        >
                          {listAlert.length}
                        </span>
                      </h6>
                      {listAlert.map((alert) => {
                        return <AlertInfo key={alert.msgid} data={alert} />;
                      })}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        );
      } else if (listAlert.length === 0) {
        return (
          <div class="container-xl">
            <div className="main-content">
              <section className="section">
                <div className="section-body">
                  <div className="card text-white bg-dashboard">
                    <div className="card-body mt-2">
                      <div className="card-body-content">
                        {/* <img src="../image/ilus_background_class.svg" className="ilus-home-learning" alt="" srcset="" /> */}
                        <div className="row">
                          <div className="col-10">
                            <h2 style={{ color: '#fff' }}>
                              Selamat Datang {profile.name}
                            </h2>
                          </div>
                        </div>
                        <p>
                          Dapatkan informasi terkini mengenai perkuliahan anda
                          disini.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <h6>
                        Pemberitahuan Terbaru{" "}
                        <span
                          className="badge badge-danger"
                          key={listAnnoun.length}
                        >
                          {listAnnoun.length}
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
                              url="/book"
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
                              url="/tool"
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
                    </div>
                    <div className="col-md-6">
                      <h6>
                        Tugas Belum Terkumpul{" "}
                        <span className="badge badge-danger">0</span>
                      </h6>
                      <div className="card">
                        <div className="card-body">
                          <h6 className="text-center mt-4">
                            Data Tugas Belum Terkumpul Tidak Tersedia.
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        );
      } else {
        return (
          <div class="container-xl">
            <div className="main-content">
              <section className="section">
                <div className="section-body">
                  <div className="card text-white bg-dashboard">
                    <div className="card-body mt-2">
                      <div className="card-body-content">

                        <div style={{ display: 'inline-block' }}>
                          <div className="row">
                            <div className="col-12">
                              <h2 style={{ color: '#fff' }}>
                                Selamat Datang {profile.name}
                              </h2>
                            </div>
                          </div>
                          <p>
                            Dapatkan informasi terkini mengenai perkuliahan anda
                            disini.
                          </p>
                        </div>

                        <div style={{ display: 'inline-block', float: 'right' }}>
                          <img src="../assets/image/header_illustration.png" style={{ width: '200px', height: '200px' }} className="ilus-home-learning" alt="" srcset="" />
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <h6>
                        Pemberitahuan Terbaru{" "}
                        {/* <span className="badge badge-danger badge-pill">0</span> */}
                        <span
                          className="badge badge-danger badge-pill"
                          key={listAnnoun.length}
                        >
                          {listAnnoun.length}
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
                              url="/book"
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
                              url="/tool"
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
                    </div>
                    <div className="col-md-6">
                      <h6>
                        Tugas Belum Terkumpul{" "}
                        {/* <span className="badge badge-danger badge-pill">0</span> */}
                        <span
                          className="badge badge-danger badge-pill"
                          key={listAlert.length}
                        >
                          {listAlert.length}
                        </span>
                      </h6>
                      {listAlert.map((alert) => {
                        return <AlertInfo key={alert.msgid} data={alert} />;
                      })}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )
      }
    }
  }
}
