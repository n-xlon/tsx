<template>
  <div class="_menu">
    <span>菜单<i v-if="count > 10">{{ computedCount }}</i></span>
    <span class="btn _font" @click="updateFontSize">s</span>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  const MenuProps = Vue.extend({
    data () {
      return {
        msg: 'xx'
      }
    },
    props: {
      count: Number
    }
  })
  @Component
  export default class Menu extends MenuProps {
    size: number = 16

    get computedCount (): string {
      if (this.count > 10) {
        return 'item1'
      } else {
        return 'item2'
      }
    }

    updateFontSize () {
      this.size += 1;
      console.log(this.msg)
//      (<HTMLDataElement>document.querySelector('._font')).style.fontSize = `${this.size}px`
    }
  }

</script>