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


export default class Assignment extends Component { 
    constructor(props) {
        super(props)
        this.state = {
            content: {
                "description": `<p><strong>Silahkan tonton video berikut:</strong><br /><a href="https://www.youtube.com/watch?app=desktop&amp;v=lkx0D6Suf1s" target="_blank">https://www.youtube.com/watch?app=desktop&amp;v=lkx0D6Suf1s</a></p>
                <p>Saran: Pada video tersebut terdapat link kumpulan kode program. Jika tidak mau menghabiskan kuota dan bingung mendengarkan video, silahkan kunjungi link tersebut, dan cari sendiri informasi-informasi tentang masalah pada pemrograman CORBA. <br /><a href="https://github.com/akmalzz/DC_Assignments" target="_blank">https://github.com/akmalzz/DC_Assignments</a></p>
                <p>Silahkan <strong>capture</strong> <strong>desktop</strong> hasil percobaan anda dengan menyertakan tanggal dan jam pada taskbar, dan kumpulkan pada tugas ini!</p>`,
                "attachment": [],
                "extensions": "zip",
                "urlUploader": "http://xxx.com"
            }
        }

    }

    render() {
        return(
            <Fragment>
            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <h4>Tugas 1</h4>
                        </div>
                        <div className="card-body">
                            <div className="ml-4 mr-4" dangerouslySetInnerHTML={ { __html: this.state.content.description } }></div>
                        </div>
                        <div className="card-footer mb-4">
                            <strong className="ml-4 mr-4">Tenggat : 29 Desember 2020 23.59</strong>
                        </div>
                    </div>
                    
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <h4>Tugas saya</h4>
                        </div>
                        <div className="card-body">
                            <div class="input-group" style={{ border: '1px rgba(0, 0, 0, 0.2) dashed', borderRadius: '5px' }}>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                                    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                                </div>
                            </div>
                            <small id="emailHelp" class="form-text text-muted mb-3">Ekstensi file yang diperbolehkan {this.state.content.extensions}.</small>

                            <button type="button" class="btn btn-info btn-block">Kirim tugas</button>
                        </div>


                    </div>
                </div>
            </div>   
        </Fragment> 
        )
    }

}