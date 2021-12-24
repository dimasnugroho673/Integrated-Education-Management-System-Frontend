import React, { Component, Fragment } from "react"
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
} from '@coreui/react'

class ModuleInactiveInfoCard extends Component {

    render() {
        return (
            <Fragment>
                <CRow>
                    <CCol lg="12" md="12" sm="12">
                        <CCard className="p-4">
                            <CCardBody>
                                Module Tidak aktif lagi...
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            </Fragment>
        )
    }
}

export default ModuleInactiveInfoCard