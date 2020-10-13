import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/views/login'
import Main from '@/components/views/main'
import AllSubject from '@/components/fineclass/allsubject'
import Search from '@/components/fineclass/search'
import Subjectdetail from '@/components/fineclass/subjectdetail'

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
  ]
})
