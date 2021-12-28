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
  CImg,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

// sidebar nav config
import navigation from './_nav'
import navigationMaterials from './_navMaterials'

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)

  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({ type: 'set', sidebarShow: val })} className="c-sidebar-light"
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <img src="https://raw.githubusercontent.com/dimasnugroho673/Integrated-Education-Management-System-Frontend/main/assets/images/logo-full.png?token=ALBMY5NYLEZIOVA6IPRS2Y3BZNFAE"
          width="160px" className="c-sidebar-brand-full" />

        <img src="https://raw.githubusercontent.com/dimasnugroho673/Integrated-Education-Management-System-Frontend/main/assets/images/logo-mini.png?token=ALBMY5KF46ASJKJRZWDXGIDBZNFDK" width="30px" className="c-sidebar-brand-minimized" />

      </CSidebarBrand>
      <CSidebarNav>

        <CCreateElement
          items={navigation}
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

export default React.memo(TheSidebar)
