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


export default class QuizList extends Component { 
    constructor(props) {
        super(props)
        this.state = {
            content: [
                {
                    quiz: "Kuis 1",
                    assignedOnTime: "28 Juli 2021 10:00:00",
                    deadline: "27 Juli 2021 23:59:00",
                    score: "Lewat"
                },
                {
                    quiz: "Kuis 2",
                    assignedOnTime: "1 Agustus 2021 07:00:00",
                    deadline: "1 Agustus 2021 23:59:00",
                    score: 100
                }
            ]
        }

    }

    render() {
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
                                                <th scope="col">Nilai</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.content.map((quiz, index) => (
                                                <tr style={{ cursor: 'pointer' }} onClick={e => window.location.href = `material/${index}` }>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{quiz.quiz}</td>
                                                    <td>{quiz.assignedOnTime}</td>
                                                    <td>{quiz.deadline}</td>
                                                    <td>{quiz.score}</td>
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