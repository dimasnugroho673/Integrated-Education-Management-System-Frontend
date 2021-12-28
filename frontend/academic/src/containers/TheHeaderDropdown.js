import React from 'react'
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const TheHeaderDropdown = () => {

  const logOut = (event) => {
    event.preventDefault();
    localStorage.removeItem("lms-sess-key");
    window.location.replace("/auth/login");
  };


  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={'avatars/6.jpg'}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Akun</strong>
        </CDropdownItem>
        <CDropdownItem to="/a/profile">
          <CIcon name="cil-user" className="mfe-2" />Profil
        </CDropdownItem>
        <CDropdownItem to="/a/changepassword">
          <CIcon name="cil-settings" className="mfe-2" />
          Rubah Password
        </CDropdownItem>
        <CDropdownItem divider />
        <CDropdownItem
          onClick={logOut}>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          Keluar
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
