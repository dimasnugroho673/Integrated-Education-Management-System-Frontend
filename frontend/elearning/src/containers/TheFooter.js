import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <span>Copyright &copy; {new Date().getFullYear()} </span>
        <a href="/" target="_blank" rel="noopener noreferrer">LearningHub.</a>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">v. 1.0</span>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
