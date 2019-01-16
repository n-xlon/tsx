import Vue from 'vue'
import App from './App.vue'
import './sass/index.sass'

var vm: Vue = new Vue({
  el: "#app",
  render: h => h(App)
})

declare var window: {
  [key: string]: any,
  prototype: Window,
  new(): Window
}

window['vm'] = vm

export {
  Vue
}