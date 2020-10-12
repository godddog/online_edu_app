import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/views/login'
import Main from '@/components/views/main'
import register from '@/components/views/register'
import agree from '@/components/views/agreement'
import forget from '@/components/views/forget'
import Myclass from '@/components/views/myclass'
import IndexPage from '@/components/index'
import MyOrder from '@/components/order/myorder' 
import StudentPage from '@/components/user_page/student'
import TeacherPage from '@/components/user_page/teacher'
Vue.use(Router)

export default new Router({
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
      path: '/forget',
      component: forget
    },
    {
      path: '/myclass',
      component: Myclass
    },
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
