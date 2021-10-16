import React, { Component, Fragment } from "react";
import { dataModule } from "./Data";
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CBreadcrumb,
  CBreadcrumbItem,
  CBreadcrumbRouter,
  CLink,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CRow,
  } from '@coreui/react'
  import CIcon from '@coreui/icons-react'
import Material from './Material';
import Quiz from "./Quiz";
import Assignment from "./Assignment";


export default class CourseContainer extends Component { 
    constructor(props) {
        super(props)
        this.state = { }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div class="container-md">

                    <div className="row my-3">
                        <div className="col-md-6">
                            <CBreadcrumb>
                                <CBreadcrumbItem>
                                    <CLink>Pemrograman Web</CLink>
                                </CBreadcrumbItem>
                                <CBreadcrumbItem active>Apache, NginX</CBreadcrumbItem>
                            </CBreadcrumb>
                        </div>

                        <div className="col-md-6 text-right">
                            Status : Aktif

                            <button type="button" class="btn btn-outline-danger btn-sm btn-pill custom-btn-badge-success ml-3" style={{ boxShadow: "none", backgroundColor: "#1DD991", color: "white" }} disabled>Selesai</button>

                            <CButton 
                                onClick={() => this.setState({ modal: true })} 
                                className="btn btn-outline-info ml-3">
                                    <CIcon name="cil-share" /> Share modul
                            </CButton>
                        </div>
                    </div>

                <Quiz />
                {/* <Material /> */}
                {/* <Assignment /> */}

            </div>
        )
    }
}