<template>
  <div>
    ITEM2
    <Menu></Menu>
  </div>
</template>

<script lang="ts">
//  import Vue from 'vue'
  import { Vue, Component, Watch, Mixins } from 'vue-property-decorator'
  import { mapState } from 'vuex'
  import Menu from './menu.vue'
  import MenuMixin from '../mixins/menu_mixin'

  @Component({
    components: {
      Menu
    },
    computed: {
      ...mapState([
        'clickNum'
      ])
    }
  })
  export default class Item2 extends Mixins(Vue, MenuMixin) {
    @Watch('clickNum')
    onClickNumChange (newVal: number, oldVal: number) { console.log(newVal, oldVal) }

    mounted () {
      console.log(this.mixinsArg, this.$route.query)
    }
  }
</script>