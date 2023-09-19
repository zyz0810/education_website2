import Vue from 'vue'
import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'
import '@/styles/index.scss' // global css
import './permission' // permission control 

import App from './App'
import router from './router'

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

// register global utility filters

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
