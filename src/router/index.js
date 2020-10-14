import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/views/login'
import Main from '@/components/views/main'

import MyClass from '@/components/views/myclass'

import register from '@/components/views/register'
import agree from '@/components/views/agreement'
import forget from '@/components/views/forget'
import IndexPage from '@/components/index'
import MyOrder from '@/components/order/myorder' 
import StudentPage from '@/components/user_page/student'
import TeacherPage from '@/components/user_page/teacher'

import Course from '@/components/teacher/course'
import CourseNotStart from '@/components/teacher/coursenotstart'
import CourseOver from '@/components/teacher/courseover'
import CourseStarted from '@/components/teacher/coursestarted'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/agree',
      component: agree
    },
    {

      path: '/myClass',
      component: MyClass
    },
    {
      path: '/forget',
      component: forget
    },
    {path: '/course',component: Course},
    {path: '/courseNotStart',component: CourseNotStart},
    {path: '/courseOver',component: CourseOver},
    {path: '/courseStarted',component: CourseStarted},
   
    {
      path: '/',
      component: IndexPage,
      children: [
        { path: "/", component: Main },
        { path: "/myOrder", component: MyOrder},
        { path: "/student", component: StudentPage},
        { path: "/teacher", component: TeacherPage},
      ]
    }
  ]
})
