<template>
  <div>
    ITEM1
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component, { mixins } from 'vue-class-component'
  import menuMixin from '../mixins/menu_mixin'

  @Component({})
  export default class Item1 extends mixins(Vue, menuMixin) {
    mounted () {
      console.log(this.argConfigure(5))
    }
  }
</script>