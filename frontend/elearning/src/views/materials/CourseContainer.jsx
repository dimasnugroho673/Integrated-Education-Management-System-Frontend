import React, { Component, Fragment } from "react"
import { dataModule } from "./Data"
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
    CInputGroup,
    CInput,
    CInputGroupAppend,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import Material from './Material'
import Quiz from "./Quiz"
import Assignment from "./Assignment"
import { getCourseIDActive, getCourseSessionIDActive, getKeyToken, transformStatusModuleStyle, transformStatusQuizReadable } from "src/utils/Common"
import axios from "axios"
import ModuleInactiveInfoCard from "src/components/ModuleInactiveInfoCard"

export default class CourseContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            module: null,
            isShareModuleModalOpen: false
        }
    }

    fetchDetailModule = () => {
        const params = {
            courseID: `${getCourseIDActive()}`,
            sessionID: `${getCourseSessionIDActive()}`
        }

        axios.defaults.headers.common['Authorization'] = `Bearer ${getKeyToken()}`
        axios.get(`${process.env.REACT_APP_API_ENDPOINT}/module/${this.props.match.params.moduleID}`, { params: params }).then(response => {
            console.log(response.data.data)
            this.setState({ isLoading: false, module: response.data.data })
        })
    }

    componentDidUpdate() {
        if (this.state.module && this.state.module.moduleID === this.props.match.params.moduleID) {
            return;
        }
        this.fetchDetailModule()
    }

    handleCopyModuleLink = () => {
          /* Get the text field */
        let copyText = document.getElementById("input-module-link");

        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);
    }


    componentDidMount() {
        this.fetchDetailModule()
    }

    render() {

        const module = this.state.module
        let ModuleContainer;

        if (this.state.isLoading) {
            return (
                <Fragment>
                    <div class="text-center">
                        <div class="spinner-border text-primary" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                </Fragment>
            )
        }

        if (module.isActive) {
            if (module.moduleType === 'material') {
                ModuleContainer = <Material module={module} content={module.content} />
            } else if (module.moduleType === 'assignment') {
                ModuleContainer = <Assignment module={module} content={module.content} />
            } else if (module.moduleType === 'quiz') {
                ModuleContainer = <Quiz />
            } else if (module.moduleType === 'exam') {
                ModuleContainer = <Quiz />
            }
        } else {
            ModuleContainer = <ModuleInactiveInfoCard />
        }


        return (
            <div class="container-md pb-5">

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
                        Status : {transformStatusModuleStyle(module.isActive)}

                        <button type="button" class="btn btn-outline-danger btn-sm btn-pill custom-btn-badge-success ml-3" style={{ boxShadow: "none", backgroundColor: "#1DD991", color: "white" }} disabled>Selesai</button>

                        <CButton
                            onClick={() => this.setState({ isShareModuleModalOpen: true })}
                            className="btn btn-outline-info ml-3">
                            <CIcon name="cil-share" /> Share modul
                        </CButton>
                    </div>
                </div>

                {ModuleContainer}

                <CCard className="p-3">
                    <CCardBody>
                        <div class="media">
                            <img src="https://www.cornwallbusinessawards.co.uk/wp-content/uploads/2017/11/dummy450x450-300x300.jpg" class="align-self-center mr-3 rounded-pill" alt="..." width="38px" />
                            <div class="media-body">
                                <CInputGroup className="mt-0">
                                    <CInput type="text" class="form-control" placeholder="Tulis komentar anda disini..." />

                                    <CInputGroupAppend>
                                        <CButton type="button" color="secondary" variant="outline">Kirim</CButton>
                                    </CInputGroupAppend>
                                </CInputGroup>
                            </div>
                        </div>
                    </CCardBody>
                </CCard>

                {/* SHARE MODULE MODAL */}
                <CModal
                    show={this.state.isShareModuleModalOpen}
                    onClose={() => this.setState({ isShareModuleModalOpen: false })}
                    centered={true}
                    size="lg"
                >
                        <CModalHeader>
                            <CModalTitle>Share modul <strong>{module.moduleTitle}</strong></CModalTitle>
                        </CModalHeader>
                        <CModalBody>
                            <CRow>
                                <CCol className="col-10"><CInput type="text" id="input-module-link" value={window.location.href} disabled /></CCol>
                                <CCol className="col-2"><CButton color="primary" variant="outline" className="btn-block" onClick={e => this.handleCopyModuleLink()}>Copy link</CButton></CCol>
                            </CRow>
                            
                        </CModalBody>
                </CModal>

            </div>
        )
    }
}