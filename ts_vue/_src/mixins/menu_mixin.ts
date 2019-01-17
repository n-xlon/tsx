import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class menuMixin extends Vue {
  mixinsArg: number[] = [1, 2, 3, 4]

  func (n: number): number[] {
    return this.mixinsArg.filter((it) => {
      if (it > n) {
        return it
      }
    })
  }
}