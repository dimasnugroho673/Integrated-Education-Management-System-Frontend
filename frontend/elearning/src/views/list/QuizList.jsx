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
  } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import axios from "axios";
import { dataQuizList } from "./DataQuiz";
import { transformStatusQuizReadable, showActionOpenQuiz } from "src/utils/Common";
import { generateModuleIcon, getCourseIDActive, getCourseSessionIDActive, getKeyToken } from 'src/utils/Common'

export default class QuizList extends Component { 
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            quizzes: [],
        }

    }

    fetchQuizzes = () => {
        const params = {
            api_token: `${getKeyToken()}`,
            courseID: `${getCourseIDActive()}`,
            sessionID: `${getCourseSessionIDActive()}`,
            moduleType: 'quiz',
            withContent: true
          }
      
          axios.get(`${process.env.REACT_APP_API_ENDPOINT}/modules`, { params: params }).then(response => {
            this.setState({ isLoading: false, modules: response.data.data, quizzes: response.data.data })
          })
    }


    componentDidMount = () => {
        this.fetchQuizzes()
    }

    render() {

        const quizzes = this.state.quizzes

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

        return(
            <Fragment>
                <div class="container-lg">
                    <CBreadcrumb>
                        <CBreadcrumbItem>
                            <CLink>Pemrograman Web</CLink>
                        </CBreadcrumbItem>
                        <CBreadcrumbItem active>Apache, NginX</CBreadcrumbItem>
                    </CBreadcrumb>

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
                                                <th scope="col">Status</th>
                                                <th scope="col">Nilai</th>
                                                <th scope="col">Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {quizzes.map((quiz, index) => (
                                                <tr>
                                                    <th>{index + 1}</th>
                                                    <th>{quiz.moduleTitle}</th>
                                                    <th>{quiz.content.assignedDate}</th>
                                                    <th>{quiz.content.deadlineDate}</th>
                                                    <th>{transformStatusQuizReadable(quiz.content.isActive)}</th>
                                                    <th></th>
                                                    <th>{showActionOpenQuiz(quiz.content.isActive, quiz.content.isComplete, quiz.moduleID)}</th>
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