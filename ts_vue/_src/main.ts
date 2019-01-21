import Vue from 'vue'
import router from './router/index'
import store from './store/index'
import { init, globalTip } from './customs/global'
import App from './App.vue'
import './sass/index.sass'

let _o: object = init()

let str: string[] = Object.keys(_o)

console.log(str)

var vm = new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
})

Vue.prototype.$o = _o
Vue.prototype.$tipAlert = (props: object): void => { globalTip(props) }

// str.map((it: string) => {
//   console.log(it)
//   // store[it] = _o[it]
//   // vm.$set(vm.$store as object, it, _o[it])
// })

window['vm'] = vm

export {
  Vue,
  vm
}