import React, { Component, Fragment } from "react"
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
} from '@coreui/react'
//   import '../../scss/_elearningTheme.scss';

export default class Material extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            content: null,
        }
    }

    render() {
        return (
            <Fragment>
                <CRow>
                    <CCol lg="12" md="12" sm="12">
                        <CCard className="p-4">
                            <CCardHeader>
                                <h4>{this.props.module.moduleTitle}</h4>
                            </CCardHeader>
                            <CCardBody>
                                <div className="card-material" dangerouslySetInnerHTML={{ __html: this.props.content.data }}></div>
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            </Fragment>
        )
    }
}