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
import { generateModuleIcon, getCourseIDActive, getCourseSessionIDActive, getKeyToken } from 'src/utils/Common'
import axios from 'axios'

class TableOfContents extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      modules: [],
      filteredModules: [],
      keywordFilter: null
    }
  }

  fetchModules = () => {
    const params = {
      api_token: `${getKeyToken()}`,
      courseID: `${getCourseIDActive()}`,
      sessionID: `${getCourseSessionIDActive()}`
    }

    axios.get(`${process.env.REACT_APP_API_ENDPOINT}/modules`, { params: params }).then(response => {
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

  componentDidMount() {
    this.fetchModules()
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
          <nav aria-label="breadcrumb" className="breadcrumb-nav">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item"><a href="#">Library</a></li>
              <li class="breadcrumb-item active" aria-current="page">Data</li>
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
                        <CSelect custom name="ccmonth" id="ccmonth">
                          <option selected disabled>Jenis Modul</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
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
                          return <a href="1" class="list-group-item list-group-item-action border-0" aria-current="true">
                            {generateModuleIcon(module.moduleType)} {module.moduleTitle}
                          </a>
                        })}

                      </CListGroup>
                    </div>
                  </div>
                </CCardBody>
              </CCard>
            </CCol>

            <CCol md="4" sm="12">
              <CCard>
                <CCardBody>
                  <div className="row">
                    <div className="col-md-12">
                      <h6 className="font-weight-bold">Terakhir dibaca</h6>
                      <br />
                      <h6>Pengenalan Pemrograman Web</h6>
                      <small>Tipe : Materi</small>

                      <button className="btn btn-block btn-info mt-4">Lanjut belajar</button>
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
