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

// sidebar nav config
import navigationMaterials from './_navMaterials'
import Logo from './logo.png'
import LogoMini from './logo_mini.png'
import { generateModuleIcon, getCourseIDActive, getCourseSessionIDActive, getKeyToken } from 'src/utils/Common'
import axios from 'axios'
import CIcon from '@coreui/icons-react'

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
    // setModules(
    //   {
    //     _tag: 'CSidebarNavTitle',
    //     _children: ['Materi']
    //   },
    //   {
    //     _tag: 'CSidebarNavItem',
    //     name: 'Silabus',
    //     to: '/el/module',
    //     icon: <CIcon name="cil-list" customClasses="c-sidebar-nav-icon"/>,
    //     badge: {
    //       color: 'info',
    //       text: 'NEW',
    //     }
    //   }
    // )

    fetchModules()
  }, []);

  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({ type: 'set', sidebarShow: val })} className="c-sidebar-light"
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <img src={Logo} width="160px" className="c-sidebar-brand-full" />
        <img src={LogoMini} width="30px" className="c-sidebar-brand-minimized" />

      </CSidebarBrand>
      <CSidebarNav>

        <div className="mx-left ml-4">
          <Link to={`/el/${getCourseIDActive()}/info`} class="btn btn-secondary btn-sm btn-pill my-4 font-weight-bold"><span class="iconify" data-icon="uil:angle-left-b"></span> Kembali ke Home</Link>
        </div>


        <div className="ml-4 mr-4 mt-1">
          <h4 className="font-weight-bold">Pemorgraman Web</h4>

          <div class="progress mt-4" style={{ height: "5px" }}>
            <div class="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <p className="mt-2 font-weight-bold">11% Selesai <br />
            Last activity on October 4, 2021
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
