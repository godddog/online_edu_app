import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/views/login'
import Main from '@/components/views/main'
import Myclass from '@/components/views/myclass'
import OrderInfo from '@/components/order/orderinfo'
import register from '@/components/views/register'
import agree from '@/components/views/agreement'
import forget from '@/components/views/forget'
import IndexPage from '@/components/index'
import MyOrder from '@/components/order/myorder' 
import StudentPage from '@/components/user_page/student'
import TeacherPage from '@/components/user_page/teacher'
import MyClassInfo from '@/components/views/myclassinfo'


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

      path: '/myclass',
      component: Myclass
    },
    {
      path: '/myorder',
      component: MyOrder
    },
    {
      path: '/orderinfo',
      component: OrderInfo,

      path: '/agree',
      component: agree
    },
    
    {
      path: '/forget',
      component: forget
    },
   
    {
      path: '/',
      component: IndexPage,
      children: [
        { path: "/", component: Main },
        { path: "/myOrder", component: MyOrder},
        { path: "/student", component: StudentPage},
        { path: "/teacher", component: TeacherPage},
        {path: '/myClass', component: MyClass},
        {path: '/myClassInfo', component: MyClassInfo},
      ]

    }
  ]
})
