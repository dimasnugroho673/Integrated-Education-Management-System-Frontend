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

import CIcon from '@coreui/icons-react'

// sidebar nav config
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
        <img src='https://previews.dropbox.com/p/thumb/ABaqVcsVkmH2cmUb40BB6_mlUfygByXnBeI4Felffd6PbI7EviMt8iaaMls_yBIk99awvLU99H9JEFpGPrPiwV09vUvz4NMaFI-31LmPLM4WgRS-uEP830trg7ZGeh-yHeXnjnJpU_lilutlOE7-lKGYqXEOCVDf7hj6rn0CSQOW3nUCbZkLX5VdQtcQLbVcEYAAfK5OO-GGt7JNRQEQPPGue68dtSh_RoV_wft5-9RaO5b4I9S80fm0Rk0G41W9rxdGxY9K5l9jtHC9ddQPIJwWqVuRBH_TOMK_VUi1YH-ItfXgJUNAJWqez6AGQXsYgIjiDuCFfP_78E78etEP38-ZGqqvQpAhstmYP4oOKrv3kg/p.png?size=2048x1536&size_mode=3' width="160px" className="c-sidebar-brand-full" />
        <img src='https://previews.dropbox.com/p/thumb/ABZ9phpfSNcsA7I6iVrg1ecZFj26FxDcep6PfDgAV0eLSC0Sfd92H2XS_krDs5-Ax0D1W5tG1HLfwZi7DyYod-cv75m5MRHihc8ACI_AkqSyAILv9H4Ap5POrkGwgKupQZ28ZAevTE02GmzJv4wlH9ValJ6-OeiGyw-pZsw3q7w8sJtVhTh2POotpLYobFkP8SdBArl-46a5MCU5CeediebC0BJkebdeOwRwm9LqpLC__0TkNoOT4swQUW4qZjBriReGRbHpd9uqiVWEVzB85XbQ2CaN0ZCSLC6UM89oPb2j4F727D1-QcdudgQWyCZ-CnphmWqub8Rjl7qFIhtgb_awZvNGPZCqPop0jaRJOlF4RQ/p.png?size=2048x1536&size_mode=3' width="30px" className="c-sidebar-brand-minimized" />

        {/* <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        /> */}

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
