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
    CCardFooter,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import moment from "moment";
import axios from "axios";
import { getCourseIDActive, getCourseSessionIDActive, getKeyToken } from "src/utils/Common";


export default class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quizSession: false,
            isLoading: false,
            activeQuestion: 0,
            showPrevButton: false,
            showNextButton: true,
            module: this.props.module,
            content: this.props.content,
            answers: [],
            answersPercentage: 0,
            durationLimit: this.props.content.durationLimit,
        }
    }

    fetchQuestion = () => {
        return this.state.content.data[this.state.activeQuestion]
    }

    startTimer = () => {
        if (this.state.quizSession) {
            // alert("start quiz")
            const deadlineDate = new Date(this.state.content.deadlineDate).getTime();

            // Update the count down every 1 second
            let x = setInterval(function () {

                // Get today's date and time
                let now = new Date().getTime();

                // Find the distance between now and the count down date
                let distance = deadlineDate - now;

                // Time calculations for days, hours, minutes and seconds
                // let days = Math.floor(distance / (1000 * 60 * 60 * 24));
                let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Output the result in an element with id="demo"
                let countDownTimerText = document.querySelector("#text-countdown-timer")

                if (countDownTimerText) {
                    countDownTimerText.innerHTML = `${hours ? hours + '.' : ''}${minutes < 10 ? '0' + minutes : minutes}.${seconds < 10 ? '0' + seconds : seconds}`
                }

                // If the count down is over, write some text 
                if (distance < 0) {
                    clearInterval(x);
                    if (countDownTimerText) {
                        countDownTimerText.innerHTML = "00.00";
                    }
                }
            }, 1000)
        }
    }

    startQuiz = () => {
        this.setState({ isLoading: true })
        document.getElementById('card-container-comment-module').style.display = "none"

        setTimeout(() => {
            this.setState({ isLoading: false, quizSession: true })
            this.startTimer()
        }, 3000)
    }

    checkAnswerExist = (number) => {
        let answers = this.state.answers
        let result = answers.filter(answer => answer.number === number)

        return result
    }

    generateOption = (number, value, label) => {
        let answers = this.state.answers

        let result = answers.find(answer => answer.number === number && answer.choice === value)

        if (result !== undefined) {
            return <div><i className="bi bi-check-circle-fill mr-2 text-success"></i> <span className="font-weight-bold"> {label}</span></div>
        } else {
            return <div><i className="bi bi-circle mr-2"></i> {label}</div>
        }
    }

    setAnswer = (number, value) => {
        const answers = this.state.answers

        // check if answers not exist
        if (this.checkAnswerExist(number).length < 1) {
            answers.push({ number: number, choice: value })
            this.setState({ answers: answers })
        } else {
            answers.map(answer => {
                if (answer.number === number) {
                    return answer.choice = value
                }
            })

            this.setState({ answers: answers })
        }

        const answerPercentage = Math.round(this.state.answers.length / this.state.content.data.length * 100)
        this.setState({ answersPercentage: answerPercentage })
    }

    prevQuestion = () => {
        let activeQuestion = this.state.activeQuestion - 1

        this.setState({ activeQuestion: activeQuestion })
    }

    nextQuestion = () => {
        let activeQuestion = this.state.activeQuestion + 1

        this.setState({ activeQuestion: activeQuestion, showPrevButton: true, showNextButton: true })
    }

    submitQuiz = (e) => {
        e.preventDefault()

        const body = {
            idCourse: getCourseIDActive(),
            idSession: getCourseSessionIDActive(),
            answers: this.state.answers
        }

        axios.defaults.headers.common['Authorization'] = `Bearer ${getKeyToken()}`
        axios.post(`${process.env.REACT_APP_API_ENDPOINT}/module/${this.state.module.moduleID}/quiz`, body).then(response => {
            alert("Quiz berhasil disubmit, silahkan tunggu penilaian dari dosen")
            console.log(response.data.meta)

            this.setState({ quizSession: false })
            document.getElementById('card-container-comment-module').style.display = "block"
        })
    }

    componentDidMount() {
        // this.fetchQuestion()
        // console.log(this.state.content[0].question)
        document.getElementById('card-container-comment-module').style.display = "block"
    }

    render() {

        if (this.state.isLoading) {
            return (
                <Fragment>
                    <div className="text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </Fragment>
            )
        }

        const question = this.fetchQuestion()
        const isDeadline = (new Date(this.state.content.deadlineDate).getTime() - new Date().getTime()) <= 0

        if (this.state.quizSession) {
            return (
                <Fragment>
                    <CRow className="my-4">
                        <CCol md="12" sm="12" className="text-right">
                            <CButton variant="outline" color="info" className="btn-pill custom-btn-badge-outline-primary" style={{ color: 'black', minWidth: '200px' }} disabled><i className="bi bi-stopwatch mr-1"></i> Sisa Waktu : <span id="text-countdown-timer">00.00</span></CButton>
                        </CCol>
                    </CRow>

                    <CRow>
                        <CCol md="10">
                            <CCard>
                                <CCardHeader>Soal</CCardHeader>
                                <CCardBody>
                                    <ol>
                                        <li value={this.state.activeQuestion + 1}>
                                            <div dangerouslySetInnerHTML={{ __html: question.question }}></div>
                                        </li>
                                    </ol>

                                    <section className="mb-2 ml-5">
                                        <h6 className="mb-3">Jawaban...</h6>

                                        {question.answerOptions.map(answer => {
                                            return <div className="mb-2" onClick={() => this.setAnswer(question.number, answer.value)}>{this.generateOption(question.number, answer.value, answer.label)}</div>
                                        })}
                                    </section>
                                </CCardBody>
                            </CCard>

                            <CRow className="mb-4">
                                <CCol md="4" sm="12">
                                    <CButton variant="outline" color={(this.state.activeQuestion !== 0 ? "primary" : "secondary")} className="btn-pill" onClick={() => this.prevQuestion()} style={{ minWidth: '150px' }} disabled={this.state.activeQuestion !== 0 ? false : true}><i className="bi-chevron-left mr-1"></i> Sebelumnya</CButton>

                                    <CButton variant="outline" color={((this.state.activeQuestion + 1) !== this.state.content.data.length ? "primary" : "secondary")} className="btn-pill ml-3" onClick={() => this.nextQuestion()} style={{ minWidth: '150px' }} disabled={(this.state.activeQuestion + 1) !== this.state.content.data.length ? false : true}>Selanjutnya <i className="bi-chevron-right ml-1"></i></CButton>
                                </CCol>
                            </CRow>
                        </CCol>

                        <CCol md="2">
                            <CCard>
                                <CCardHeader>Status soal</CCardHeader>
                                <CCardBody className="mx-auto" style={{ minHeight: '300px' }}>
                                    <CRow>
                                        {this.state.content.data.map((question, i) => {
                                            if (this.checkAnswerExist(i + 1).length > 0) {
                                                return <div className="col-2 ml-1 mr-1">
                                                    <p className={"quiz-number quiz-number-available" + (this.state.activeQuestion === i ? ' quiz-number-active ' : '')} onClick={e => this.setState({ activeQuestion: i })}>{i + 1}</p>
                                                </div>
                                            } else {
                                                return <div className="col-2 ml-1 mr-1">
                                                    <p className={"quiz-number" + (this.state.activeQuestion === i ? ' quiz-number-active ' : '')} onClick={e => this.setState({ activeQuestion: i })}>{i + 1}</p>
                                                </div>
                                            }

                                        })}
                                    </CRow>
                                </CCardBody>
                                <CCardFooter>
                                    <div className="text-center">
                                        <CButton variant="outline" color="secondary" size="small" className="btn-pill" style={{ color: '#6C757D' }} disabled>{this.state.answersPercentage}% Soal terjawab</CButton>
                                    </div>
                                </CCardFooter>
                            </CCard>

                            <CButton color="primary" className="btn-block" onClick={(e) => this.submitQuiz(e)}>Kirim Jawaban</CButton>
                        </CCol>


                    </CRow>


                </Fragment>
            )
        }

        if (this.state.module.score) {
            return (
                <Fragment>
                    Scorenya adalah...
                </Fragment>
            )
        }

        if (isDeadline) {
            return (
                <Fragment>
                    Dah kelewat Deadline boss
                </Fragment>
            )
        }

        return (
            <Fragment>
                <CRow>
                    <CCol md="12">
                        <CCard className="p-4">
                            <CCardHeader>{this.state.module.moduleTitle}</CCardHeader>
                            <CCardBody>
                                <h3>Catatan Quiz</h3>

                                <div className="mb-5" dangerouslySetInnerHTML={{ __html: this.state.content.additionalInfo }}></div>

                                <CButton color="primary" onClick={() => this.startQuiz()}>Mulai ujian</CButton>
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>

            </Fragment>
        )
    }
}