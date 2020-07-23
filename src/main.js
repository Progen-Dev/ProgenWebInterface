import Vue from 'vue'
import store from './store'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueResource from 'vue-resource'

Vue.use(Vue.axios, axios, VueResource)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')