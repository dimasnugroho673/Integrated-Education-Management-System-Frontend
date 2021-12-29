import React, { Component, Fragment } from 'react'
import classNames from 'classnames'
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CListGroup,
  CListGroupItem,
  CInput,
  CButton,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CFormGroup,
  CLabel,
  CSelect
} from '@coreui/react'
import { generateModuleIcon, getCourseDataActive, getCourseIDActive, getCourseSessionIDActive, getKeyToken } from 'src/utils/Common'
import axios from 'axios'
import { Link } from 'react-router-dom'

class TableOfContents extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      modules: [],
      filteredModules: [],
      keywordFilter: null,
      moduleLastRead: null
    }
  }

  fetchModules = () => {
    const params = {
      api_token: `${getKeyToken()}`,
      courseID: `${getCourseIDActive()}`,
      sessionID: `${getCourseSessionIDActive()}`,
      moduleType: 'all',
      withContent: false
    }

    axios.get(`${process.env.REACT_APP_API_ENDPOINT}/modules`, { params: params }).then(response => {
      console.table(response.data.data)
      this.setState({ isLoading: false, modules: response.data.data, filteredModules: response.data.data })
    })
  }

  handleSearchModule = (keyword) => {
    let newKeyword = keyword.toLowerCase()

    this.setState({
      filteredModules: this.state.modules.filter(module =>
        module.moduleTitle.toLowerCase().includes(newKeyword)
      )
    })

    console.log(this.state.filteredModules)

  }

  getModuleTypeCount = (type) => {
    switch (type) {
      case "material":
        return this.state.modules.filter(module =>
          module.moduleType.toLowerCase().includes("material")
        ).length

      case "assignment":
        return this.state.modules.filter(module =>
          module.moduleType.toLowerCase().includes("assignment")
        ).length

      case "quiz":
        return this.state.modules.filter(module =>
          module.moduleType.toLowerCase().includes("quiz")
        ).length

      case "exam":
        return this.state.modules.filter(module =>
          module.moduleType.toLowerCase().includes("exam")
        ).length

      default:
        break;
    }

  }

  handleFilterByModuleType = (type) => {

    if (type !== 'all') {
      return this.setState({
        filteredModules: this.state.modules.filter(module =>
          module.moduleType.toLowerCase().includes(type)
        )
      })
    } else {
      return this.setState({
        filteredModules: this.state.modules
      })
    }


  }

  fetchModuleLastRead = () => {
    const lastRead = JSON.parse(localStorage.getItem('lms-module-last-read'))

    this.setState({ moduleLastRead: lastRead })
  }

  componentDidMount() {
    this.fetchModules()
    this.fetchModuleLastRead()
  }

  render() {

    const filteredModules = this.state.filteredModules

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
      <>
        <div class="container-lg">
          <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href={'/a/dashboard'}>Dashboard</a></li>
              <li class="breadcrumb-item"><Link to={`/el/${getCourseIDActive()}/info`}>{getCourseDataActive().courseTitle}</Link></li>
              <li class="breadcrumb-item active" aria-current="page">Silabus</li>
            </ol>
          </nav>

          <CRow>
            <CCol md="8" sm="12">
              <CCard>
                <CCardHeader>
                  Table of Content

                  <CRow className="mt-4">

                    <CCol md="4" sm="12" className="mt-2">
                      <CFormGroup>
                        <CSelect custom name="ccmonth" id="ccmonth" onChange={e => this.handleFilterByModuleType(e.target.value)}>
                          <option selected disabled>Jenis Modul</option>
                          <option value="all">Semua Modul</option>
                          <option value="material">Materi</option>
                          <option value="assignment">Tugas</option>
                          <option value="quiz">Kuis</option>
                          <option value="exam">Ujian</option>
                        </CSelect>
                      </CFormGroup>
                    </CCol>


                    <CCol md="8" sm="12" className="mt-2">
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText style={{ backgroundColor: 'white', borderRight: 'none' }}>
                            <span class="iconify" data-icon="uil:search"></span>
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" placeholder="Pencarian" style={{ borderLeft: 'none' }} onChange={e => this.handleSearchModule(e.target.value)} />
                      </CInputGroup>
                    </CCol>
                  </CRow>

                  <CRow>
                    <CCol md="12" sm="12">
                      <CButton type="button" className="btn btn-outline-primary btn-sm btn-pill custom-btn-badge mr-2" disabled>{this.getModuleTypeCount("material")} Materi</CButton>
                      <CButton type="button" className="btn btn-outline-primary btn-sm btn-pill custom-btn-badge mr-2" disabled>{this.getModuleTypeCount("assignment")}  Tugas</CButton>
                      <CButton type="button" className="btn btn-outline-primary btn-sm btn-pill custom-btn-badge mr-2" disabled>{this.getModuleTypeCount("quiz")}  Kuis</CButton>
                      <CButton type="button" className="btn btn-outline-primary btn-sm btn-pill custom-btn-badge mr-2" disabled>{this.getModuleTypeCount("exam")}  Ujian</CButton>
                    </CCol>
                  </CRow>

                </CCardHeader>
                <CCardBody style={{ padding: 0 }}>
                  <div className="row mt-3 mb-3">
                    <div className="col-md-12">
                      <CListGroup>
                        {filteredModules.map(module => {
                          return <Link to={`module/${module.moduleID}/detail`} class="list-group-item list-group-item-action border-0" aria-current="true" style={{ color: module.isActive === false ? '#D3D3D3' : null }}>
                            <CRow>
                              <CCol className="col-8 text-left">
                                {generateModuleIcon(module.moduleType)} {module.moduleTitle}
                              </CCol>

                              {module.isActive === false ?
                                <CCol className="col-4 text-right">
                                  <button type="button" class="btn btn-outline-danger btn-sm btn-pill custom-btn-badge-danger ml-2" disabled>Belum dibuka</button>
                                </CCol>
                                : null}

                            </CRow>
                          </Link>
                        })}

                      </CListGroup>
                    </div>
                  </div>
                </CCardBody>
              </CCard>
            </CCol>

            <CCol md="4" sm="12">
              <CCard className="p-2">
                <CCardBody>
                  <div className="row">
                    <div className="col-md-12">
                      <img src={"https://raw.githubusercontent.com/dimasnugroho673/Integrated-Education-Management-System-Frontend/main/assets/images/ilus-paper-blue.png?token=ALBMY5ISBTQIS7FUV6U5T3LBZNF3Q"} width="110px" alt="" className='my-4' />
                      <h6 className="font-weight-bold">Terakhir dibaca</h6>
                      <br />
                      <h6>{this.state.moduleLastRead.moduleTitle}</h6>
                      <small className="text-capitalize">Tipe : {this.state.moduleLastRead.moduleType}</small>

                      <Link to={`/el/${getCourseIDActive()}/module/${this.state.moduleLastRead.moduleID}/detail`} className="btn btn-block btn-primary mt-4">Lanjut belajar</Link>
                    </div>
                  </div>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>

        </div>

      </>
    )
  }
}

export default TableOfContents
