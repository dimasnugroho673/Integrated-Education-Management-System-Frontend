import React, { Component, Fragment } from "react"
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CLabel,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CRow,
} from '@coreui/react'

class ModuleSubmittedAssignmentAttachmentRow extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpenPreventDeleteModal: false
        }
    }

    handleTriggerDeleteAttachment = (e) => {
        this.setState({ isOpenPreventDeleteModal: true })
        e.preventDefault()
    }

    render() {
        return (
            <Fragment>
                <CRow>
                    <CCol lg="12" md="12" sm="12">
                        <CCard className="custom-card-module-submitted-assignment-attachment" style={{ boxShadow: 'none', border: '1px rgba(0, 0, 0, 0.2) solid' }}>
                            <CRow className="no-gutters">
                                <CCol className="col-2">
                                    <img src="https://raw.githubusercontent.com/dimasnugroho673/Integrated-Education-Management-System-Frontend/main/assets/images/icon-document-blue.png?token=ALBMY5PIIZ5XQMXSZU4H4BDBZOU7S" width="40px" alt="..." style={{ marginTop: '28px', marginLeft: '20px' }} />
                                </CCol>
                                <CCol className="col-8" onClick={e => window.open(this.props.file.url)}>
                                    <CCardBody>
                                        <span className="custom-card-module-submitted-assignment-attachment-title font-weight-bold">{this.props.file.fileName}</span>
                                        <br />
                                        <span className="text-uppercase mt-4">{this.props.file.mimes.split('/')[1]}</span>
                                    </CCardBody>
                                </CCol>
                                <CCol className="col-2 text-center" onClick={e => this.handleTriggerDeleteAttachment(e)}>
                                    <span class="iconify" data-icon="ep:close-bold" style={{ fontSize: '28px', marginTop: '65%' }}></span>
                                </CCol>
                            </CRow>
                        </CCard>
                    </CCol>
                </CRow>

                {/* PREVIEW FILE MODAL */}
                <CModal
                    show={this.state.isOpenPreventDeleteModal}
                    onClose={() => this.setState({ isOpenPreventDeleteModal: false })}
                    centered={true}
                    size="lg"
                >
                    <CModalHeader>
                        <CModalTitle>Hapus berkas</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        Yakin ingin mengahpus berkas? berkas yang sudah dihapus tidak dapat dikembalikan lagi
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="primary" onClick={() => this.setState({ isOpenPreventDeleteModal: false })}>Batal</CButton>
                        <CButton color="secondary" variant="outline" className="text-dark" onClick={() => this.props.handleDeleteAttachment()}>Hapus</CButton>
                    </CModalFooter>
                </CModal>
            </Fragment>
        )
    }
}

export default ModuleSubmittedAssignmentAttachmentRow