import Vue from 'vue'
import router from './router/index'
import store from './store/index'
import App from './App.vue'
import './sass/index.sass'

var vm: Vue = new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
})

window['vm'] = vm

export {
  Vue
}