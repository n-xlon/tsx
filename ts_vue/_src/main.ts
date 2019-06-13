import Vue from 'vue'
import router from './router/index'
import store from './store/index'
import { globalTip } from './customs/global'
import App from './App.vue'
import './sass/index.sass'

class vStore {
  stList = {1: 'abc'}
  constructor () {
    // super.prototype.stList = this.stList
  }
  get list () {
    return this.stList
  }
}

let vs = new vStore()

console.log(vs.list, store)

var vm = new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
})

Vue.prototype.$tipAlert = (props: object): void => { globalTip(props) }


window['vm'] = vm

export {
  Vue,
  vm
}