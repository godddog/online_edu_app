import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/views/login'
import Main from '@/components/views/main'
import Myclass from '@/components/views/myclass'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      component: Main
    },
    {
      path: '/myclass',
      component: Myclass
    }
  ]
})
