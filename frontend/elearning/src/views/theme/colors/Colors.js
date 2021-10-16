import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody
} from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/reusable'


const ThemeView = () => {
  const [color, setColor] = useState('rgb(255, 255, 255)')
  const ref = createRef()

  useEffect(() => {
    const el = ref.current.parentNode.firstChild
    const varColor = window.getComputedStyle(el).getPropertyValue('background-color')
    setColor(varColor)
  }, [ref])

  return (
    <table className="table w-100" ref={ref}>
      <tbody>
      <tr>
        <td className="text-muted">HEX:</td>
        <td className="font-weight-bold">{ rgbToHex(color) }</td>
      </tr>
      <tr>
        <td className="text-muted">RGB:</td>
        <td className="font-weight-bold">{ color }</td>
      </tr>
      </tbody>
    </table>
  )
}

// const ThemeColor = ({className, children}) => {
//   const classes = classNames(className, 'theme-color w-75 rounded mb-3')
//   return (
//     <CCol xl="2" md="4" sm="6" xs="12" className="mb-4">
//       <div className={classes} style={{paddingTop: '75%'}}></div>
//       {children}
//       <ThemeView/>
//     </CCol>
//   )
// }

const Colors = () => {
  return (
    <>
     <div class="main-content">
      <nav aria-label="breadcrumb" className="breadcrumb-nav">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>

    <div className="row">
      <div className="col-md-8">
        <CCard>
          <CCardHeader>
            Table of Content

            <div className="row mt-4">
              <div className="col-md-4">
                <select class="custom-select">
                  <option selected>Jenis Modul</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div className="col-md-8">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1" style={{ backgroundColor: 'white', borderRight: 'none' }}>
                    <span class="iconify" data-icon="uil:search"></span>
                  </span>
                </div>
                <input type="text" class="form-control" placeholder="Pencarian" style={{ borderLeft: 'none' }} />
              </div>
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-md-12">
                <button type="button" class="btn btn-outline-primary btn-sm btn-pill custom-btn-badge" disabled>8 Materi</button>
                <button type="button" class="btn btn-outline-primary btn-sm btn-pill custom-btn-badge ml-2" disabled>2 Tugas</button>
                <button type="button" class="btn btn-outline-primary btn-sm btn-pill custom-btn-badge ml-2" disabled>2 Kuis</button>
              </div>
            </div>
          </CCardHeader>
          <CCardBody style={{ padding: 0 }}>
            <div className="row mt-3 mb-3">
              <div className="col-md-12">
              <div class="list-group">
                  <a href="#" class="list-group-item list-group-item-action border-0" aria-current="true">
                    <span class="iconify mr-2" data-icon="uil:book-alt" style={{  fontWeight: 'bold' }}></span> Pengenalan Pemorgraman Web
                  </a>
                  <a href="#" class="list-group-item list-group-item-action border-0" aria-current="true">
                    <span class="iconify mr-2" data-icon="uil:file-upload" style={{  fontWeight: 'bold' }}></span> Apache, Nginx
                  </a>

                  <a href="#" class="list-group-item list-group-item-action border-0 disabled" tabindex="-1" aria-disabled="true"  style={{ color: '#D3D3D3' }}>
                    <div className="row">
                      <div className="col-md-8 text-left">
                        <span class="iconify mr-2" data-icon="uil:file-edit-alt" style={{  fontWeight: 'bold' }}></span> Kuis 1
                      </div>

                      <div className="col-md-4 text-right">
                        <button type="button" class="btn btn-outline-danger btn-sm btn-pill custom-btn-badge-danger ml-2" disabled>Belum dibuka</button>
                      </div>
                    </div>
                    
                  </a>

                  <a href="#" class="list-group-item list-group-item-action border-0" aria-current="true">
                    <span class="iconify mr-2" data-icon="uil:book-alt" style={{  fontWeight: 'bold' }}></span> PHP : Aplikasi kalkulator sederhana
                  </a>
                  <a href="#" class="list-group-item list-group-item-action border-0" aria-current="true">
                    <span class="iconify mr-2" data-icon="uil:file-upload" style={{  fontWeight: 'bold' }}></span> PHP : Aplikasi manajemen mahasiswa sederhana
                  </a>
                  
                </div>
              </div>
            </div>
          </CCardBody>
        </CCard>
      </div>
      
      <div className="col-md-4">

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


      </div>
    </div>
      </div>
      
    </>
  )
}

export default Colors
