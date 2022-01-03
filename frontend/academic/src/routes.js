import React from 'react';

//Custom Page
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const StudyPlan = React.lazy(() => import('./views/studyplan/StudyPlan'));
const Lecture = React.lazy(() => import('./views/lecture/Lecture'));
const Book = React.lazy(() => import('./views/book/Book'));
const Tool = React.lazy(() => import('./views/tool/Tool'));
const Academic = React.lazy(() => import('./views/academic/Academic'));
const PreviousInfo = React.lazy(() => import('./views/previousinfo/PreviousInfo'));
const Profile = React.lazy(() => import('./views/profile/Profile'));
const ChangePassword = React.lazy(() => import('./views/changepassword/ChangePassword'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/a/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/a/studyplan', name: 'Study Plan', component: StudyPlan },
  { path: '/a/lecture', name: 'Lecture', component: Lecture },
  { path: '/a/book', name: 'Book', component: Book },
  { path: '/a/tool', name: 'Tool', component: Tool },
  { path: '/a/academic', name: 'Academic', component: Academic },
  { path: '/a/previousinfo', name: 'Previous Info', component: PreviousInfo },
  { path: '/a/profile', name: 'Profile', component: Profile },
  { path: '/a/changepassword', name: 'Change Password', component: ChangePassword }
];

export default routes;
