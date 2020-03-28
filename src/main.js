import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"

Vue.use(ElementUI);

import ApiService from "@/common/api.service";
ApiService.init();

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
