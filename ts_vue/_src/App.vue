<template>
  <div class="ts_vue">
    <button @click="updateNum">+</button>
    <span>{{ num }}</span>
    <button @click="reduceNum">-</button>
    <Menu :count="num"></Menu>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Menu from './components/menu.vue'


  @Component({
    components:{
      Menu
    },
    // 导入vuex相关的state、actions、mutations
//    computed: mapState([
//      // state 列表
//    ]),
//    methods: mapActions([
//      // actions 列表
//    ])
  })

  export default class App extends Vue {
    // 初始化变量    
    num: number = 12

    updateNum (): void {
      this.num += 1
    }

    reduceNum (): void {
      this.num -= 1
    }
  }

</script>