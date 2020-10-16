import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/views/login'
import Main from '@/components/views/main'
import AllSubject from '@/components/fineclass/allsubject'
import Search from '@/components/fineclass/search'
import Subjectdetail from '@/components/fineclass/subjectdetail'
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
import Subjectapply from '@/components/apply/subjectapply'
import Verifyapply from '@/components/apply/verifyapply'
import Paysuccess from '@/components/apply/paysuccess'


Vue.use(Router)

export default new Router({
  mode: "history",
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
    {
      path: '/allsubject',
      component: AllSubject
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/subjectdetail',
      component: Subjectdetail
    },
    {
      path: '/subjectapply',
      component: Subjectapply
    },
    {
      path: '/verifyapply',
      component: Verifyapply
    },
    {
      path: '/paysuccess',
      component: Paysuccess
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
