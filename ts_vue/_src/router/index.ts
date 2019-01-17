import Vue from 'vue'
import Router from 'vue-router'
// import Menu from '../components/menu.vue'
import Item1 from '../components/item1.vue'
import Item2 from '../components/item2.vue'
import Item3 from '../components/item3.vue'

Vue.use(Router)

export default new Router ({
  routes: [
    {
      path: '/',
      name: 'menu',
      // component: Menu,
      redirect: 'item1',
      children: []
    },
    { path: '/item1', name: 'item1', component: Item1 },
    { path: '/item2', name: 'item2', component: Item2 },
    { path: '/item3', name: 'item3', component: Item3 }
  ]
})