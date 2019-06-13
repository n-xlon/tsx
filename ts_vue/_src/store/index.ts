import Vue from 'vue'
import Vuex from 'vuex'
import { Props, addProps } from './props'
import * as action from './actions'
import * as mutations from './mutations'
import { state } from './states'
import { globalTip } from '../customs/global'

Vue.use(Vuex)

console.log(action)

interface actionType {
  [key: string]: any
}

const actionList = Object.keys(action)

let actions = {}

addProps('num', 8)
addProps('alert', (props: object) => globalTip(props))

actionList.forEach((it: string): any => {
  (actions as actionType)[it] = ({...args}, dt: any) => (action as actionType)[it]({...args, ...Props}, dt)
})

console.log(actions)

const store = new Vuex.Store({
  actions,
  mutations,
  state
})

export default store