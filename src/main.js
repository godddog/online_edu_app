// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引用axios，并设置基础URL为后端服务api地址
var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8088/'  //此处是https协议如果不是改成http
// 将API方法绑定到全局
Vue.prototype.$axios = axios
Vue.use(Vant);
Vue.config.productionTip = false

Vue.use(VideoPlayer);
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
