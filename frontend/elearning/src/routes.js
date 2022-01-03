import React from 'react'

const CourseInfo = React.lazy(()=> import('./views/info/CourseInfo'));
const TableOfContents = React.lazy(() => import('./views/materials/TableOfContents'));
const Material = React.lazy(() => import('./views/materials/Material'));
const Quiz = React.lazy(() => import('./views/materials/Quiz'));
const CourseContainer = React.lazy(() => import('./views/materials/CourseContainer'));
const AssignmentList = React.lazy(() => import('./views/list/AssignmentList'));
const QuizList = React.lazy(() => import('./views/list/QuizList'));

const routes = [
  // { path: '/', exact: true, name: 'Home' },
  // { path: '/el/:courseID/info', name: 'Dashboard', component: Dashboard },
  { path: '/el/:courseID/info', name: 'CourseInfo', component: CourseInfo },
  { path: '/el/:courseID/module', exact: true, name: 'TableOfContents', component: TableOfContents },
  { path: '/el/:courseID/module/:moduleID/detail', name: 'CourseContainer', component: CourseContainer },
  { path: '/el/:courseID/assignment', name: 'AssignmentList', component: AssignmentList },
  { path: '/el/:courseID/quiz', name: 'QuizList', component: QuizList }
];

export default routes;
