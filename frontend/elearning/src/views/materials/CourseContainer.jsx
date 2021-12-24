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
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import Material from './Material'
import Quiz from "./Quiz"
import Assignment from "./Assignment"
import { getCourseIDActive, getCourseSessionIDActive, getKeyToken, transformStatusModuleStyle, transformStatusQuizReadable } from "src/utils/Common"
import axios from "axios"

export default class CourseContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            module: null
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

        if (module.moduleType === 'material') {
            ModuleContainer = <Material module={module} content={module.content} />
        } else if (module.moduleType === 'assignment') {
            ModuleContainer = <Assignment /> 
        } else if (module.moduleType === 'quiz') {
            ModuleContainer = <Quiz />
        } else if (module.moduleType === 'exam') {
            ModuleContainer = <Quiz />
        }

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
                        Status : {transformStatusModuleStyle(module.isActive)}

                        <button type="button" class="btn btn-outline-danger btn-sm btn-pill custom-btn-badge-success ml-3" style={{ boxShadow: "none", backgroundColor: "#1DD991", color: "white" }} disabled>Selesai</button>

                        <CButton
                            onClick={() => this.setState({ modal: true })}
                            className="btn btn-outline-info ml-3">
                            <CIcon name="cil-share" /> Share modul
                        </CButton>
                    </div>
                </div>

                {ModuleContainer}

                {/* <Quiz /> */}
                {/* <Material /> */}
                {/* <Assignment /> */}

            </div>
        )
    }
}