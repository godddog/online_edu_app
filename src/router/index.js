import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/views/login'
import Main from '@/components/views/main'
import MyClass from '@/components/views/myclass'
import OrderInfo from '@/components/order/orderinfo'
import register from '@/components/views/register'
import agree from '@/components/views/agreement'
import forget from '@/components/views/forget'
import IndexPage from '@/components/index'
import MyOrder from '@/components/order/myorder' 
import StudentPage from '@/components/user_page/student'
import TeacherPage from '@/components/user_page/teacher'
import MyClassInfo from '@/components/views/myclassinfo'
import SelectTeacher from '@/components/user_page/selectTeacher'
import Course from '@/components/teacher/course'
import CourseNotStart from '@/components/teacher/coursenotstart'
import CourseOver from '@/components/teacher/courseover'
import CourseStarted from '@/components/teacher/coursestarted'
import UploadHomework from '@/components/teacher/uploadhomework'

Vue.use(Router)

  const routes = [
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
      path: '/selectTeacher',
      component: SelectTeacher
    },
    {
      path: '/orderinfo',
      component: OrderInfo,
    },
    {
      path: '/agree',
      component: agree
    },
    
    {
      path: '/forget',
      component: forget
    },
    {path: '/course',component: Course},
    {path: '/courseNotStart',name:'courseNotStart',component: CourseNotStart},
    {path: '/courseOver',component: CourseOver},
    {path: '/courseStarted',component: CourseStarted},
    {path: '/uploadhomework',component: UploadHomework},
    // {path: '/courseStarted',component: CourseStarted},
   
    {
      path: '/',
      name: '/',
      component: IndexPage,
      children: [
        { path: "/", name: '/', component: Main },
        { path: "/myOrder", component: MyOrder},
        { path: "/student", component: StudentPage},
        { path: "/teacher", component: TeacherPage},
        {path: '/myClass', component: MyClass},
        {path: '/myClassInfo', component: MyClassInfo},
      ]

    }
  ]
  const router= new Router({
    mode:"history",
    routes,
  
  })

  
  export default router;

