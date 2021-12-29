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
    CCardFooter,
    CInputGroup,
    CLabel,
    CForm,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import Material from './Material'
import Moment from 'react-moment'
import 'moment/locale/id'
import moment from "moment"
import ModuleSubmittedAssignmentAttachmentRow from "src/components/ModuleSubmittedAssignmentAttachmentRow"
import { getCourseIDActive, getCourseSessionIDActive, getKeyToken } from "src/utils/Common"
import axios from "axios"

export default class Assignment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            module: this.props.module,
            content: this.props.content,
            isDeadline: true,
            isModalPreviewFileOpen: false,
            isModalWarningOpen: false,
            isUploading: false
        }
    }

    handleAttachmentValidation = () => {
        let fileName = document.querySelector('#input-attatchment').value;
        let extension = fileName.split('.').pop();

        let findAllowExtension = this.state.content.extensions.includes(extension)
        if (!findAllowExtension) {
            this.setState({ isModalWarningOpen: true })
            document.querySelector('#input-attatchment').value = ""
            document.querySelector('#label-input-attachment').innerHTML = "Pilih file"
        } else {
            this.setState({ isModalPreviewFileOpen: true })
            document.querySelector('#label-input-attachment').innerHTML = document.querySelector('#input-attatchment').files[0].name
            document.querySelector('#label-attachment-name-modal').innerHTML = document.querySelector('#input-attatchment').files[0].name

            let size = Math.round(document.querySelector('#input-attatchment').files[0].size / 1000)

            if (size <= 1000) {
                document.querySelector('#label-attachment-size-modal').innerHTML = Math.round(document.querySelector('#input-attatchment').files[0].size / 1000) + ' KB'
            } else {
                document.querySelector('#label-attachment-size-modal').innerHTML = Math.round(document.querySelector('#input-attatchment').files[0].size / 1000000) + ' MB'
            }
        }
    }

    handleAttachmentChange = () => {
        this.setState({ isModalPreviewFileOpen: false })
        document.querySelector('#input-attatchment').value = ""
        document.querySelector('#label-input-attachment').innerHTML = "Pilih file"
    }

    handleDeleteAttachment = () => {
        const body = {
            idCourse: getCourseIDActive(),
            idSession: getCourseSessionIDActive()
        }

        axios.defaults.headers.common['Authorization'] = `Bearer ${getKeyToken()}`
        axios.delete(`${process.env.REACT_APP_API_ENDPOINT}/module/${this.state.content.idModule}/assignment`, body).then(response => {
            // console.log(response.data.data)
            const newContent = this.state.content
            // newContent.submittedAssignment = {}
            delete newContent.submittedAssignment
            this.setState({ content: newContent })
        })
    }

    fetchDetailModule = () => {
        const params = {
            courseID: `${getCourseIDActive()}`,
            sessionID: `${getCourseSessionIDActive()}`
        }

        axios.defaults.headers.common['Authorization'] = `Bearer ${getKeyToken()}`
        axios.get(`${process.env.REACT_APP_API_ENDPOINT}/module/${this.state.content.idModule}`, { params: params }).then(response => {
            this.setState({ content: response.data.data.content })
        })
    }

    handleSubmitAssignment = (e) => {
        e.preventDefault()

        this.setState({ isUploading: true })

        const formData = new FormData()
        const attachment = document.querySelector('#input-attatchment').files[0]
    
        formData.append("idCourse", getCourseIDActive())
        formData.append("idSession", getCourseSessionIDActive())
        formData.append("attachment", attachment)

        axios.defaults.headers.common['Authorization'] = `Bearer ${getKeyToken()}`
        axios.post(`${process.env.REACT_APP_API_ENDPOINT}/module/${this.state.content.idModule}/assignment`, formData).then(response => {
            // console.log(response.data.data)
            this.fetchDetailModule()
            this.setState({ isUploading: false })
        })
    }

    startDeadlineTimer = () => {
        setTimeout(() => {
            this.setState({ isDeadline: true })
        }, moment(this.state.content.deadlineDate).diff(new Date()))
    }

    componentDidMount() {
        this.startDeadlineTimer()

        if (moment(this.state.content.deadlineDate).diff(new Date()) !== 0) {
            this.setState({ isDeadline: false })
        }
    }

    render() {

        const module = this.state.module
        const content = this.state.content

        return (
            <Fragment>
                <CRow>
                    <CCol md="8" sm="12">
                        <CCard className="p-3">
                            <CCardHeader><h4>{module.moduleTitle}</h4></CCardHeader>
                            <CCardBody>
                                <div dangerouslySetInnerHTML={{ __html: content.descriptions }}></div>
                            </CCardBody>
                            <CCardFooter>
                                <strong>Tenggat :
                                    <Moment format="DD MMMM YYYY HH.mm" locale="id">
                                        {content.deadlineDate}
                                    </Moment>
                                </strong>
                            </CCardFooter>
                        </CCard>
                    </CCol>

                    <CCol md="4" sm="12">
                        <CCard>
                            <CCardHeader><h4>Tugas saya</h4></CCardHeader>
                            <CCardBody>
                                <CForm onSubmit={e => this.handleSubmitAssignment(e)}>

                                
                                {this.state.content.submittedAssignment ?
                                    <ModuleSubmittedAssignmentAttachmentRow handleDeleteAttachment={() => this.handleDeleteAttachment()} file={content.submittedAssignment.file} /> : null}

                                {!this.state.content.submittedAssignment && !this.state.isDeadline ? <Fragment>
                                    <CInputGroup style={{ border: '1px rgba(0, 0, 0, 0.2) dashed', borderRadius: '5px' }}>
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input" id="input-attatchment" aria-describedby="inputGroupFileAddon01" onChange={e => this.handleAttachmentValidation()} />
                                            <label class="custom-file-label" id="label-input-attachment" for="input-attatchment">Pilih berkas</label>
                                        </div>
                                    </CInputGroup>
                                    <small class="form-text text-muted mb-3">Ekstensi berkas yang diperbolehkan {content.extensions.join(", ")}.</small>

                                </Fragment> : null}

                                {this.state.content.submittedAssignment ? <p className="text-center font-weight-bold text-success">Tugas sudah dikumpulkan</p> : null}

                                {!this.state.content.submittedAssignment && !this.state.isDeadline ? <button type="submit" class="btn btn-primary btn-block">Kirim tugas</button> : null}

                                {!this.state.content.submittedAssignment && this.state.isDeadline ? <p className="text-danger">Anda telat mengumpulkan tugas.</p> : null}
                                </CForm>

                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>

                {/* PREVIEW FILE MODAL */}
                <CModal
                    show={this.state.isModalPreviewFileOpen}
                    onClose={() => this.setState({ isModalPreviewFileOpen: false })}
                    centered={true}
                    size="lg"
                >
                    <CModalHeader>
                        <CModalTitle>Unggah berkas</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CLabel>Nama berkas : <span id="label-attachment-name-modal" className="font-weight-bold"></span></CLabel>
                        <br />
                        <CLabel>Ukuran : <span id="label-attachment-size-modal" className="font-weight-bold"></span></CLabel>
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" variant="outline" className="text-dark" onClick={() => this.handleAttachmentChange()}>Ganti berkas</CButton>
                        <CButton color="primary" onClick={() => this.setState({ isModalPreviewFileOpen: false })}>Gunakan berkas</CButton>
                    </CModalFooter>
                </CModal>

                {/* WARNING MODAL */}
                <CModal
                    show={this.state.isModalWarningOpen}
                    onClose={() => this.setState({ isModalWarningOpen: false })}
                    centered={true}
                    size="lg"
                >
                    <CModalHeader>
                        <CModalTitle>Berkas tidak diperbolehkan</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        Ekstensi berkas yang anda unggah tidak valid
                    </CModalBody>
                </CModal>


            </Fragment>
        )
    }

}