import React from 'react'

const _nav = localStorage.getItem("lirs_status") ? [
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Menu']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/a/dashboard',
    icon: <span class="iconify mr-2" data-icon="bx:bx-home-alt" style={{ fontWeight: 'bold', fontSize: '18px' }}></span>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Kuliah',
    to: '/a/lecture',
    icon: <span class="iconify mr-2" data-icon="bx:bx-calendar" style={{ fontWeight: 'bold', fontSize: '18px' }}></span>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Peminjaman Buku',
    to: '/a/book',
    icon: <span class="iconify mr-2" data-icon="bx:bx-book-bookmark" style={{ fontWeight: 'bold', fontSize: '18px' }}></span>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Peminjaman Alat',
    to: '/a/tool',
    icon: <span class="iconify mr-2" data-icon="uil:screw" style={{ fontWeight: 'bold', fontSize: '18px' }}></span>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Akademik',
    to: '/a/academic',
    icon: <span class="iconify mr-2" data-icon="system-uicons:graph-bar" style={{ fontWeight: 'bold', fontSize: '18px' }}></span>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Info Terdahulu',
    to: '/a/previousinfo',
    icon: <span class="iconify mr-2" data-icon="ant-design:info-circle-outlined" style={{ fontWeight: 'bold', fontSize: '18px' }}></span>,
  },
] : [
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Menu']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/a/dashboard',
    icon: <span class="iconify mr-2" data-icon="bx:bx-home-alt" style={{ fontWeight: 'bold', fontSize: '18px' }}></span>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Isian Rencana Studi',
    to: '/a/studyplan',
    icon: <span class="iconify mr-2" data-icon="codicon:credit-card" style={{ fontWeight: 'bold', fontSize: '18px' }}></span>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Kuliah',
    to: '/a/lecture',
    icon: <span class="iconify mr-2" data-icon="bx:bx-calendar" style={{ fontWeight: 'bold', fontSize: '18px' }}></span>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Peminjaman Buku',
    to: '/a/book',
    icon: <span class="iconify mr-2" data-icon="bx:bx-book-bookmark" style={{ fontWeight: 'bold', fontSize: '18px' }}></span>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Peminjaman Alat',
    to: '/a/tool',
    icon: <span class="iconify mr-2" data-icon="uil:screw" style={{ fontWeight: 'bold', fontSize: '18px' }}></span>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Akademik',
    to: '/a/academic',
    icon: <span class="iconify mr-2" data-icon="system-uicons:graph-bar" style={{ fontWeight: 'bold', fontSize: '18px' }}></span>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Info Terdahulu',
    to: '/a/previousinfo',
    icon: <span class="iconify mr-2" data-icon="ant-design:info-circle-outlined" style={{ fontWeight: 'bold', fontSize: '18px' }}></span>,
  },
]

export default _nav
