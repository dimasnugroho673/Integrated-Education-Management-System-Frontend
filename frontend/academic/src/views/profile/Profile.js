import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import ProfileImage from '../../../public/avatars/6.jpg'

export class Profile extends Component {
    constructor() {
        super();
        this.state = {
            dataReady: false,
            tab: 0,
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
    }

    setTab = (newValue) => {
        this.setState({ tab: newValue })
    }

    render() {
        const profile = this.state.profile;

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
                                    data-icon="uil:wrench"
                                    data-inline="false"
                                ></span>
                            </div> */}
                            <h1>Profil</h1>
                            {/* <div class="section-header-breadcrumb">
                            <div class="breadcrumb-item">Alat</div>
                        </div> */}
                        </div>

                        <div className="section-body">
                            <div className="row">
                                {/* mobile only */}

                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="card">
                                                <div className="col-12 col-md-12 col-lg-12">
                                                    <div style={{ backgroundImage: 'url("../avatars/9.png")', height: '200px', marginRight: '-15px', marginLeft: '-15px', borderTopRightRadius: '10px', borderTopLeftRadius: '10px' }}></div>
                                                    <div className="profile-widget">
                                                        <div className="profile-widget-header">
                                                            <img
                                                                alt="image"
                                                                src={ProfileImage}
                                                                className="rounded-circle profile-widget-picture"
                                                            />
                                                        </div>
                                                        <div className="profile-widget-description">
                                                            <div className="profile-widget-name">
                                                                {profile.name}
                                                            </div>
                                                            <div className="profile-widget-nim">
                                                                {profile.nim}
                                                            </div>
                                                        </div>
                                                        <div className="profile-widget-tab">
                                                            <Tabs
                                                                value={this.state.tab}
                                                                textColor="primary"
                                                                indicatorColor="primary"
                                                                variant="scrollable"
                                                                scrollButtons="auto"
                                                                onChange={(_, newValue) => this.setTab(newValue)}
                                                            >
                                                                <Tab label="Data Umum" />
                                                                <Tab label="Keluarga" />
                                                                <Tab label="Alamat" />
                                                                <Tab label="Data Akademik" />
                                                            </Tabs>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-12">
                                            {(() => {
                                                if (this.state.tab === 0) {
                                                    return (
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <h3>Data Umum</h3>
                                                                <div className="row">
                                                                    <div className="col-md-6" style={{ marginBottom: '10px' }}>
                                                                        <div><b>Email</b></div>
                                                                        <div>{profile.email}</div>
                                                                        <div><b>Nomor HP Aktif</b></div>
                                                                        <div>082190807687</div>
                                                                        <div><b>Kab/Kota Lahir</b></div>
                                                                        <div>Batam</div>
                                                                        <div><b>Tanggal Lahir</b></div>
                                                                        <div>12 Juni 1999</div>
                                                                        <div><b>Nomor Induk Kependudukan</b></div>
                                                                        <div>2171121206991111</div>
                                                                    </div>
                                                                    <div className="col-md-6" style={{ marginBottom: '10px' }}>
                                                                        <div><b>Program Studi</b></div>
                                                                        <div>Teknik Informatika</div>
                                                                        <div><b>Fakultas</b></div>
                                                                        <div>Teknik</div>
                                                                        <div><b>UKT</b></div>
                                                                        <div>Rp. 2.400.000,00</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                } else if (this.state.tab === 1) {
                                                    return (
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <h3>Keluarga</h3>
                                                                <div className="row">
                                                                    <div className="col-md-6" style={{ marginBottom: '10px' }}>
                                                                        <div><b>Nama Ayah</b></div>
                                                                        <div>Budi Kusuma</div>
                                                                        <div><b>Nomor HP Aktif</b></div>
                                                                        <div>085608765478</div>
                                                                        <div><b>Pekerjaan</b></div>
                                                                        <div>Wiraswasta</div>
                                                                        <div><b>Pendidikan</b></div>
                                                                        <div>SLTA/Sederajat</div>
                                                                    </div>
                                                                    <div className="col-md-6" style={{ marginBottom: '10px' }}>
                                                                        <div><b>Nama Ibu</b></div>
                                                                        <div>Ayu Surayu</div>
                                                                        <div><b>Nomor HP Aktif</b></div>
                                                                        <div>089671829673</div>
                                                                        <div><b>Pekerjaan</b></div>
                                                                        <div>Ibu Rumah Tangga</div>
                                                                        <div><b>Pendidikan</b></div>
                                                                        <div>SLTA/Sederajat</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                } else if (this.state.tab === 2) {
                                                    return (
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <h3>Alamat</h3>
                                                                <div className="row">
                                                                    <div className="col-md-12" style={{ marginBottom: '10px' }}>
                                                                        <div><b>Alamat</b></div>
                                                                        <div>Jl. Centre Point, Tlk. Tering, Kec. Batam Kota, Kota Batam, Kepulauan Riau 29444</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                } else if (this.state.tab === 3) {
                                                    return (
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <h3>Data Akademik</h3>
                                                                <div className="row">
                                                                    <div className="col-md-6" style={{ marginBottom: '10px' }}>
                                                                        <div><b>Angkatan</b></div>
                                                                        <div>2017</div>
                                                                        <div><b>Tanggal Masuk</b></div>
                                                                        <div>7 Juli 2017</div>
                                                                        <div><b>Tanggal Lulus</b></div>
                                                                        <div>-</div>
                                                                        <div><b>Jalur Masuk</b></div>
                                                                        <div>SBMPTN</div>
                                                                    </div>
                                                                    <div className="col-md-6" style={{ marginBottom: '10px' }}>
                                                                        <div><b>IPK</b></div>
                                                                        <div>3.31</div>
                                                                        <div><b>SKS Ditempuh</b></div>
                                                                        <div>65</div>
                                                                        <div><b>Dosen PA</b></div>
                                                                        <div>Ferliansyah Putra, S.T., M.T.</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            })()}
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

export default Profile