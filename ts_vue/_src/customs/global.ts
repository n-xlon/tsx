import Vue from 'vue'

// export function init (): void {
//
//   const PROMISE = () => {
//     new Promise((resolve, reject) => {
//       window['resolve'] = resolve
//       window['reject'] = reject
//     })
//   }
//
//   PROMISE()
// }

export function globalTip (props: object): any {
  let propsData = {
    ...props
  }

  let vm = Vue.extend({
    template: "<div class='_toast'><p>{{ msg }}</p><span class='_close' v-if='!autoClose' @click='closeToast'>&times;</span></div>",
    data () {
      return {
        el: document.body
      }
    },
    beforeMount () {
      // this.el = document.body
      this.el.appendChild(this.$el)
      if (!this.autoClose) return
      setTimeout(() => {
        this.el.removeChild(this.$el)
      }, 3000)
    },
    props: {
      msg: {
        type: String,
        default: ''
      },
      autoClose: {
        default: false
      }
    },
    methods: {
      closeToast () {
        this.el.removeChild(this.$el)
      }
    }
  })
  return new vm({
    el: document.createElement('div'),
    propsData
  })
}
