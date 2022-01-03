import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'
import {
  Link
} from 'react-router-dom'

import LogoRegular from './logo.png'
import LogoMini from './logo_mini.png'
import { generateModuleIcon, getCourseDataActive, getCourseIDActive, getCourseSessionIDActive, getKeyToken, getLastActivity } from 'src/utils/Common'
import axios from 'axios'
import CIcon from '@coreui/icons-react'
import moment from 'moment'

const TheSidebarCoursePortal = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)

  const [modules, setModules] = useState([]);

  const fetchModules = () => {
    const params = {
      api_token: `${getKeyToken()}`,
      courseID: `${getCourseIDActive()}`,
      sessionID: `${getCourseSessionIDActive()}`
    }

    axios.get(`${process.env.REACT_APP_API_ENDPOINT}/modules`, { params: params }).then(response => {
      const rawModuleData = response.data.data
      let sidebarMenu = []

      sidebarMenu = [{
        _tag: 'CSidebarNavTitle',
        _children: ['Materi']
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Silabus',
        to: `/el/${getCourseIDActive()}/module`,
        icon: <CIcon name="cil-list" customClasses="c-sidebar-nav-icon" />
      }]

      rawModuleData.map(module => (
        sidebarMenu.push(
          {
            _tag: 'CSidebarNavItem',
            name: `${module.moduleTitle}`,
            to: `/el/${getCourseIDActive()}/module/${module.moduleID}/detail`,
            icon: generateModuleIcon(module.moduleType),
          }
        )
      ))

      setModules(sidebarMenu)
    })
  }

  useEffect(() => {
    fetchModules()
  }, []);

  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({ type: 'set', sidebarShow: val })} className="c-sidebar-light"
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <img src={LogoRegular} width="160px" className="c-sidebar-brand-full" alt="logo-regular" />
        <img src={LogoMini} width="30px" className="c-sidebar-brand-minimized" alt="logo--mini" />

      </CSidebarBrand>
      <CSidebarNav>

        <div className="mx-left ml-4">
          <Link to={`/el/${getCourseIDActive()}/info`} class="btn btn-secondary btn-sm btn-pill my-4 font-weight-bold"><span class="iconify" data-icon="uil:angle-left-b"></span> Kembali ke Home</Link>
        </div>


        <div className="ml-4 mr-4 mt-1">
          <h4 className="font-weight-bold">{ getCourseDataActive().courseTitle }</h4>
          {/* <h4 className="font-weight-bold">Pemrograman Web</h4> */}

          <div class="progress mt-4" style={{ height: "5px" }}>
            <div class="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <p className="mt-2 font-weight-bold">11% Selesai <br />
            Aktifitas terakhir pada { getLastActivity() }
          </p>

        </div>

        <CCreateElement
          items={modules}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  )
}

export default React.memo(TheSidebarCoursePortal)
