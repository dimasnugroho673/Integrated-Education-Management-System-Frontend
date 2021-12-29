import React, { Component, Fragment } from "react";
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
import { getCourseDataActive, getCourseIDActive, getCourseSessionIDActive, getKeyToken, showActionOpenQuiz } from "src/utils/Common";
import axios from "axios";
import { Link } from "react-router-dom";


export default class AssignmentList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            assignments: [],
        }

    }

    fetchAssignment = () => {
        const params = {
            api_token: `${getKeyToken()}`,
            courseID: `${getCourseIDActive()}`,
            sessionID: `${getCourseSessionIDActive()}`,
            moduleType: 'assignment',
            withContent: true
        }

        axios.get(`${process.env.REACT_APP_API_ENDPOINT}/modules`, { params: params }).then(response => {
            this.setState({ isLoading: false, assignments: response.data.data })
        })
    }


    componentDidMount = () => {
        this.fetchAssignment()
    }

    render() {

        const assignments = this.state.assignments

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

        return (
            <Fragment>
                <div class="container-lg">
                    <nav aria-label="breadcrumb" className="breadcrumb-nav">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href={'/a/dashboard'}>Dashboard</a></li>
                            <li class="breadcrumb-item"><Link to={`/el/${getCourseIDActive()}/info`}>{getCourseDataActive().courseTitle}</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">List Tugas</li>
                        </ol>
                    </nav>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    List Tugas
                                </div>
                                <table class="table table-hover" style={{ border: 'none' }}>
                                    <thead class="thead-light">
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Tugas</th>
                                            <th scope="col">Tanggal</th>
                                            <th scope="col">Batas Waktu</th>
                                            <th scope="col">Nilai</th>
                                            <th scope="col">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {assignments.map((assignment, index) => (
                                            <tr>
                                                <th scope="row">{index + 1}</th>
                                                <td>{assignment.moduleTitle}</td>
                                                <td>{assignment.content.assignedDate}</td>
                                                <td>{assignment.content.deadlineDate}</td>
                                                <td>{assignment.score ? assignment.score.moduleScore : ''}</td>
                                                <th>{showActionOpenQuiz(assignment.isActive, assignment.score ? assignment.score.moduleScore : '', assignment.moduleID)}</th>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

}