import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/views/login'
import Main from '@/components/views/main'
import MyOrder from '@/components/order/myorder'
import OrderInfo from '@/components/order/orderinfo'
import register from '@/components/views/register'
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
      path: '/myorder',
      component: MyOrder
    },
    {
      path: '/orderinfo',
      component: OrderInfo
    },
    {
      path: '/register',
      component: register
    }
  ]
})
