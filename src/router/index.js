import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/views/login'
import Main from '@/components/views/main'

import MyClass from '@/components/views/myclass'

import register from '@/components/views/register'
import agree from '@/components/views/agreement'
import forget from '@/components/views/forget'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      component: Main
      
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

    }
  ]
})
