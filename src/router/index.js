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
   
    {
      path: '/',
      name: '/',
      component: IndexPage,
      children: [
        { path: "/", name: '/', component: Main },
        { path: "/myOrder", component: MyOrder},
        { path: "/student", component: StudentPage},
        { path: "/teacher", component: TeacherPage},
      ]
    }
  ]
  const router= new Router({
    mode:"history",
    routes,
  
  })
  router.beforeEach((to,from,next)=>{
   if(to.path==='/login'||to.path==='/register'||to.path==='/agree'||to.path==='/forget'){
      next();
   }else{
      let author =localStorage.getItem('Author');
      if(author===null||author===""){
        next('/login');
      }else{
        next();
      }
    }
  });
  
  export default router;

