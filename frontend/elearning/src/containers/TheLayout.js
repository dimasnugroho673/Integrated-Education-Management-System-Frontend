import React from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader,
  TheSidebarCoursePortal,
} from './index'

const TheLayout = () => {

  // check is url contain "material"?
  const isCoursePortal = window.location.href.indexOf('module')

  return (
    <div className="c-app c-default-layout">
      { isCoursePortal > 0 ? <TheSidebarCoursePortal/> : <TheSidebar/> }
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
          <TheContent/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default TheLayout
