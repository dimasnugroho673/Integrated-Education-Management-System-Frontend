import React from 'react'
import CIcon from '@coreui/icons-react'

const _navNaterials =  [
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Materi']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Silabus',
    to: '/el/material',
    icon: <CIcon name="cil-list" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Pemrograman Web',
    to: '/el/material/1',
    icon: 'cil-book',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Apache, Nginx',
    to: '/el/material/2',
    icon: 'cil-book',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Kuis 1',
    to: '/el/material/3',
    icon: 'cil-file',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'PHP: Aplikasi kalkulator sederhana',
    to: '/el/material/4',
    icon: 'cil-book',
  }, 
  {
    _tag: 'CSidebarNavItem',
    name: 'PHP: Aplikasi manajemen mahasiswa sederhana',
    to: '/el/material/5',
    icon: 'cil-book',
  },
  
]

export default _navNaterials
