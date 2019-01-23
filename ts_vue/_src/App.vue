<template>
  <div class="ts_vue">
    <!--<button @click="updateNum">+</button>-->
    <!--<span>{{ num }}</span>-->
    <!--<button @click="reduceNum">-</button>-->
    <!--<Menu :count="num"></Menu>-->
    <div class="_cont">
      <div class="_nav"><router-link :to="{path: it.path, query: {name: it.text}}" v-for="(it, index) in menuList" :key="index">{{ it.text }}</router-link></div>
      <div class="_nav_content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { mapActions, mapState } from 'vuex'


  @Component({
    components:{
      // 组件
    },
    // 导入vuex相关的state、actions、mutations
    computed: mapState([
      'name',
      'menuList',
      'clickNum'
    ]),
    methods: mapActions([
      'users'
    ]),
    watch: {
      clickNum (n) {
        console.log(n)
      }
    }
  })

  export default class App extends Vue {
    // 初始化变量
    num: number = 12

    name!: string
    menuList!: string[]
//    clickNum!: number
    users!: () => string

    updateNum (): void {
      this.num += 1
    }

    reduceNum (): void {
      this.num -= 1
    }

    mounted () {
      console.log(this.name, this.menuList)
      this.$store.dispatch('users', 'xlon').then((dt: string) => {
        console.log(dt)
      })
    }
  }

</script>