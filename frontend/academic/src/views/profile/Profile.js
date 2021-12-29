import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

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
                                                                src="../avatars/6.jpg"
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
                                                                <h3>TAB 1 clicked!</h3>
                                                            </div>
                                                        </div>
                                                    )
                                                } else if (this.state.tab === 1) {
                                                    return (
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <h3>TAB 2 clicked!</h3>
                                                            </div>
                                                        </div>
                                                    )
                                                } else if (this.state.tab === 2) {
                                                    return (
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <h3>TAB 3 clicked!</h3>
                                                            </div>
                                                        </div>
                                                    )
                                                } else if (this.state.tab === 3) {
                                                    return (
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <h3>TAB 4 clicked!</h3>
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
