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
import LogoRegular from './logo.png'
import LogoMini from './logo_mini.png'
import navigation from './_nav'

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)

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
