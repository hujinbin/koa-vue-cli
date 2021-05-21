import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'

Vue.config.productionTip = false

// 创建 router 实例
const router = createRouter()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>',
  render: h => h(App)
})
