<template>
  <div class="_menu">
    <span class="item">菜单<i v-if="count > 10">{{ computedCount }}</i></span>
    <span class="btn _font" @click="updateFontSize">s</span>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component, { mixins } from 'vue-class-component'
  import { mapMutations, mapState } from 'vuex'
  import menuMixin from '../mixins/menu_mixin'


  const MenuProps = Vue.extend({
    data () {
      return {
        msg: 'xx'
      }
    },
    props: {
      count: {
        type: Number,
        default: 10
      }
    }
  })

  @Component({
    computed: {
      ...mapState([
        'menuList'
      ])
    },
    methods: {
      ...mapMutations([
        'changeName'
      ])
    }
  })
  export default class Menu extends mixins(menuMixin, MenuProps) {
    size: number = 16

    get computedCount (): string {
      if (this.count > 10) {
        return 'item1'
      } else {
        return 'item2'
      }
    }

    public updateFontSize () {
      this.size += 1
      // ts中调用document需要断言（document as HTMLDocument、[style, offsetHeight, offsetWidth, lang, offsetLeft, scrollTop, title] as HTMLElement
      let dom = (document as HTMLDocument).getElementsByClassName("item")[0] as HTMLElement
      dom.style.fontSize = `${this.size}px`
    }

    menuList!: string[]
    changeName!: () => void

    mounted () {
      console.log(this.mixinsArg, this.menuList)
      this.$store.commit('changeName')
    }
  }

</script>