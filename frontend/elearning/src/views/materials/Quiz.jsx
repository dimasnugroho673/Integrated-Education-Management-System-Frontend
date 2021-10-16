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


export default class Quiz extends Component { 
    constructor(props) {
        super(props)
        this.state = {
            activeQuestion: 0,
            showPrevButton: false,
            showNextButton: true,
            content: {
                "limitDeadline": 10000,
                "dataQuiz": [
                    {
                        "no": 1,
                        "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis accumsan erat et accumsan. Curabitur congue molestie pellentesque. Cras elementum lectus augue, quis euismod nunc lacinia sollicitudin. Maecenas sit amet sem ac libero venenatis consequat nec id lorem. Donec ex arcu, semper in massa in, scelerisque elementum lacus. Sed non varius erat, non blandit neque. Cras a aliquam velit. Curabitur massa quam, ornare elementum maximus nec, fringilla ut ex. Integer ac placerat nunc. Vivamus quis dui risus. Nulla ante erat, mattis sit amet interdum eu, sollicitudin laoreet mauris. Donec egestas eros at semper porta. Quisque elementum, tellus ac lobortis hendrerit, ipsum enim lacinia ante, id lacinia erat turpis non massa. Curabitur id molestie nulla, eget commodo nulla. Praesent dictum quam nec ante facilisis, quis dapibus mauris finibus. <strong>Apa itu frontend dev?</strong>",
                        "choices": [
                            {
                                "id": "a",
                                "option": "Ngetik ngetik surat"
                            },
                            {
                                "id": "b",
                                "option": "Gamers"
                            },
                            {
                                "id": "c",
                                "option": "Tukang service"
                            },
                            {
                                "id": "d",
                                "option": "Abang konter"
                            },
                            {
                                "id": "e",
                                "option": "Orang yang mengerjakan bagian depan sistem yang dilihat oleh user"
                            }
                        ]
                    },
                    {
                        "no": 2,
                        "question": "Apa itu backend dev?",
                        "choices": [
                            {
                                "id": "a",
                                "option": "Orang yang mengerjakan bagian belakang sistem yang tidak terlihat oleh user"
                            },
                            {
                                "id": "b",
                                "option": "Heker"
                            },
                            {
                                "id": "c",
                                "option": "Gamers"
                            },
                            {
                                "id": "d",
                                "option": "Abang konter"
                            },
                            {
                                "id": "e",
                                "option": "Orang gabut"
                            }
                        ]
                    },
                    {
                        "no": 3,
                        "question": "Apa itu fullstack dev?",
                        "choices": [
                            {
                                "id": "a",
                                "option": "Orang yang mengerjakan ketimpa"
                            },
                            {
                                "id": "b",
                                "option": "Kuli"
                            },
                            {
                                "id": "c",
                                "option": "Orang yang dapat mengemban seluruh tugas tim IT"
                            },
                            {
                                "id": "d",
                                "option": "Abang konter"
                            },
                            {
                                "id": "e",
                                "option": "Orang gabut"
                            }
                        ]
                    },
                    {
                        "no": 4,
                        "question": "Apa itu android dev?",
                        "choices": [
                            {
                                "id": "a",
                                "option": "Orang yang mengerjakan ketimpa"
                            },
                            {
                                "id": "b",
                                "option": "Kuli"
                            },
                            {
                                "id": "c",
                                "option": "Orang yang dapat mengemban seluruh tugas tim IT"
                            },
                            {
                                "id": "d",
                                "option": "Abang android"
                            },
                            {
                                "id": "e",
                                "option": "Orang gabut"
                            }
                        ]
                    },
                    {
                        "no": 4,
                        "question": "Apa itu iOS dev?",
                        "choices": [
                            {
                                "id": "a",
                                "option": "Orang yang mengerjakan ketimpa"
                            },
                            {
                                "id": "b",
                                "option": "Kuli"
                            },
                            {
                                "id": "c",
                                "option": "Orang yang dapat mengemban seluruh tugas tim IT"
                            },
                            {
                                "id": "d",
                                "option": "Abang iOS"
                            },
                            {
                                "id": "e",
                                "option": "Orang gabut"
                            }
                        ]
                    },
                ]
            },
            answers: [],
        }
    }

    componentDidMount() {

    }

    // nextQuestion = () => {
    //     let activeQuestion = this.state.activeQuestion + 1
    //     // let buttonNext
    //     // let buttonPrev

    //     // if (activeQuestion + 1 == this.state.dataContent.content.dataQuiz.length) {
    //     //     activeQuestion = this.state.activeQuestion
    //     //     buttonNext = true
    //     //     buttonPrev = false
    //     // } else {
    //     //     activeQuestion = activeQuestion
    //     //     buttonNext = true
    //     //     buttonPrev = true
    //     // }

    //     this.setState({ activeQuestion: activeQuestion, showPrevButton: true, showNextButton: true })
    // }

    render() {

        const Questions = this.state.content.dataQuiz[this.state.activeQuestion] 

        return (
            <Fragment>
                <div className="row my-4">
                    <div className="col-md-12 text-right">
                        <button className="btn btn-outline-info btn-pill custom-btn-badge-outline-primary" style={{ color: 'black' }} disabled><i class="bi bi-stopwatch mr-1"></i> Sisa Waktu : 18:50</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-header">
                                Soal
                            </div>
                            <div className="card-body">
                                <ol>
                                    <li value={ this.state.activeQuestion + 1 }> 
                                        <div dangerouslySetInnerHTML={ { __html: this.state.content.dataQuiz[this.state.activeQuestion].question } }></div>
                                    </li>
                                </ol>

                                <section className="mb-2 ml-5">
                                        <h6>Jawaban...</h6>
                                        {Questions.choices.map(question => (

                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="answer" id={question.id} value={question.id} onClick={e => this.setState({ answers: {
                                                    number: this.state.activeQuestion + 1,
                                                    answer: question.id
                                                } })} />
                                                <label class="form-check-label" for={question.id}>
                                                {question.option}
                                                </label>
                                            </div>
                                            // <p>{question.option}</p>
                                        ))}
                                    </section>
                           
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <button className="btn btn-outline-info btn-pill" style={{ minWidth: '150px' }}><i class="bi-chevron-left mr-1"></i> Sebelumnya</button>
                                <button className="btn btn-outline-info btn-pill ml-3" style={{ minWidth: '150px' }}>Selanjutnya <i class="bi-chevron-right ml-1"></i></button>
                            </div>

                            <div className="col-md-6">
                                <button className="btn btn-outline-info">Lihat semua jawaban</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card">
                            <div className="card-header">
                                Status soal
                            </div>
                            <div className="card-body mx-auto" style={{ minHeight: '300px' }}>

                                <div className="row">
                                    {this.state.content.dataQuiz.map((question, i) => (
                                        <div className="col-md-2 ml-1    mr-1">
                                            <p className={"quiz-number " + (this.state.activeQuestion == i ? 'quiz-number-active' : 'border')} onClick={e => this.setState({ activeQuestion: i })}>{i + 1}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="text-center">
                                    <button className="btn btn-sm btn-outline-secondary btn-pill" style={{ color: '#6C757D' }} disabled>80% Soal terjawab</button>
                                </div>
                            </div>
                        </div>

                        <button className="btn btn-info btn-block">Kirim Jawaban</button>
                    </div>
                </div>
                
            </Fragment>
        )
    }
}