import React, { Component, Fragment, lazy } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axios from 'axios'
import { getCourseDataActive, getCourseIDActive, getKeyToken } from 'src/utils/Common'
import { bool } from 'prop-types'
import { Link } from 'react-router-dom'

class CourseInfo extends Component {

  constructor() {
    super()
    this.state = {
      isLoading: true,
      course: null,
      showCourseInfo: true,
    }
  }

  fetchDetailCourse = () => {
    // alert(`${process.env.REACT_APP_API_ENDPOINT}/course/${getCourseIDActive()}`)
    axios.defaults.headers.common['Authorization'] = `Bearer ${getKeyToken()}`
    axios.get(`${process.env.REACT_APP_API_ENDPOINT}/course/${getCourseIDActive()}`).then(response => {
      this.setState({ isLoading: false, course: response.data.data })
    })
  }

  handleToAssignment = () => {
    this.props.history.push('/el/8762394872346232/module/098123907123/detail')
  }

  handleToNotification = () => {
    this.props.history.push('/el/8762394872346232/module')
  }

  componentDidMount() {
    this.fetchDetailCourse()
  }

  render() {

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

    const course = this.state.course

    return (
      <>
        <div class="container-xl">

          <nav aria-label="breadcrumb" className="breadcrumb-nav">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href={'/a/dashboard'}>Dashboard</a></li>
              <li class="breadcrumb-item"><Link to={`/el/${getCourseIDActive()}/info`}>{getCourseDataActive().courseTitle}</Link></li>
              <li class="breadcrumb-item active" aria-current="page">List Quiz</li>
            </ol>
          </nav>

          <section class="section">

            <div class="section-body">

              <div className="card shadow card-course-home">
                <div className="card-body ml-4 mr-4">
                  <div className="card-body-content">
                    <img src="../image/ilus_background_class.svg" className="ilus-home-learning" alt="" srcset="" />
                    <div className="row">
                      <div className="col-10">
                        <h3 className="text-white text-uppercase banner-course-title">{course.courseTitle}</h3>
                      </div>
                      <div className="col-2">
                        <span class="dot-menu float-right" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() => this.setState({ showCourseInfo: !this.state.showCourseInfo })}><span class="iconify text-white" data-icon="uil:info-circle" style={{ fontSize: '32px' }}></span></span>
                      </div>
                    </div>

                    <p className="text-white">Welcome back!</p>



                    <div class="row">
                      <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="card card-statistic-1 shadow">
                          <div class="card-icon bg-success text-center">
                            <i class="bi bi-journals text-white font-weight-bold"></i>
                          </div>
                          <div class="card-wrap">
                            <div class="card-header">
                              <h4>Materi diunggah</h4>
                            </div>
                            <div class="card-body">
                              {course.session.dataCounter.material}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div class="card card-statistic-1 shadow">
                          <div class="card-icon bg-danger text-center">
                            <i class="bi bi-file-ruled text-white font-weight-bold"></i>
                          </div>
                          <div class="card-wrap">
                            <div class="card-header">
                              <h4>Kuis diberikan</h4>
                            </div>
                            <div class="card-body">
                              {course.session.dataCounter.quiz}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div class="card card-statistic-1 shadow">
                          <div class="card-icon bg-warning text-center">
                            <i class="bi bi-file-earmark-check text-white font-weight-bold"></i>
                          </div>
                          <div class="card-wrap">
                            <div class="card-header">
                              <h4>Tugas diberikan</h4>
                            </div>
                            <div class="card-body">
                              {course.session.dataCounter.assignment}
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                {this.state.showCourseInfo ? <div className="card-footer bg-white pt-4 pb-4">
                  {course.session.lectures.map((lecture, i) => {
                    return <h6><span className="font-weight-bold">Dosen</span> {course.session.lectures.length > 1 ? i + 1 : ''} {lecture.lecture.lectureName}</h6>
                  })}

                  <h6><span className="font-weight-bold">{course.session.room.roomName}</span></h6>

                  <h6><span className="font-weight-bold">{course.session.courseSchedule}</span></h6>
                </div> : null}

              </div>

            </div>

            <div className="row mt-5">
              <div className="col-md-6">

                <h6 className="mb-3">Pemberitahuan terbaru <span class="badge badge-pill badge-danger">2</span></h6>

                <div class="card" style={{ backgroundColor: 'white', cursor: 'pointer' }} onClick={() => this.handleToNotification()}>
                  <div class="card-body">
                    <div class="media">
                      <div className="bg-danger rounded-pill wrapper-icon-page-title"><span class="iconify icon-page-title" data-icon="uil:file-alt" data-inline="false"></span></div>
                      <div class="media-body">
                        <p className="text-muted">5 Oktober 2020</p>
                        <p style={{ marginTop: '-15px' }}>Tugas Pemrograman Berorientasi Objek belum terkumpul.</p>
                        <p style={{ marginTop: '-15px', marginBottom: '-3px' }} className="text-danger"><span className="text-danger" style={{ fontSize: '25px' }}>&bull;</span> Terlambat</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-md-6">

                <h6 className="mb-3">Kuis <span class="badge badge-pill badge-danger">1</span></h6>

                <div class="card" style={{ backgroundColor: 'white' }}>
                  <div class="card-body">
                    <div class="media">
                      <div className="bg-primary rounded-pill wrapper-icon-page-title"><span class="iconify icon-page-title" data-icon="uil:file-check-alt" data-inline="false"></span></div>
                      <div class="media-body">
                        <p className="text-dark font-weight-bold">Muhammad Radzi Rathomi memposting : Kuis 4</p>
                        <p style={{ marginTop: '-15px' }}>Diposting pada 08.30</p>
                        <p style={{ marginTop: '-15px', marginBottom: '-3px' }}>Waktu : 60 menit</p>
                      </div>
                    </div>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Tenggat : 09.30</li>
                  </ul>
                  <div className="card-footer btn btn-primary custom-button-card-footer-kuis" style={{ border: '0', cursor: 'pointer' }} onClick={() => this.handleToAssignment()}>
                    Kerjakan kuis
                  </div>
                </div>

              </div>
            </div>

          </section>
        </div>
      </>
    )
  }

}

export default CourseInfo
