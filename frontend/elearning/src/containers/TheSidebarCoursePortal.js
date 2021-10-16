import React from 'react'
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

const TheSidebarCoursePortal = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)

  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })} className="c-sidebar-light"
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <img src={Logo} width="160px"  className="c-sidebar-brand-full" />
        <img src={LogoMini} width="30px"  className="c-sidebar-brand-minimized" />
        
      </CSidebarBrand>
      <CSidebarNav>
      
        <div className="mx-left ml-4">
           <Link to="/el/info" class="btn btn-secondary btn-sm btn-pill my-4 font-weight-bold"><span class="iconify" data-icon="uil:angle-left-b"></span> Kembali ke Home</Link>  
        </div>
       

        <div className="ml-4 mr-4 mt-1">
            <h4 className="font-weight-bold">Pemorgraman Web</h4>

            <div class="progress mt-4" style={{ height: "5px"}}>
                <div class="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p className="mt-2 font-weight-bold">11% Selesai <br/> 
            Last activity on October 4, 2021
            </p>

        </div>

        <CCreateElement
          items={navigationMaterials}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebarCoursePortal)
