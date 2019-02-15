### gulp 编译 typescript

1、 实现浏览器环境下运行及node环境下的运行<br>
2、 开发环境热更新相关代码


### plugins
1、 vue-class-component
```
import Component from 'vue-class-component'

<!--props与data定义-->
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
```

2、 vue-property-decorator
Vue Property Decorator提供了7个装饰器(@Emit、@Inject、@Model、@Prop、@Provide、@Watch、@Component)，实现像原生 JavaScript class 那样声明组件。

```
  import { Vue, Component, Watch, Mixins, Prop, Model, Inject } from 'vue-property-decorator'

  @Component
  export default class cla Mixins(Vue, ...others) {
    <!--获取props数据-->
    @Prop(Number) count!: number
    @Prop({default: 'xxx'}) name!: string
    @Prop({default: 'xxx', type: String}) name!: string
    @Prop([Number, String]) content!: number | string

    <!--数据监听-->
    @Watch('count')
    countChange (val: number, oval: number) {}

    @Watch('count', { immediate: true, deep: true })
    countChange (val: number, oval: number) {}

    <!--子组件向父组件emit-->
    @Emit('reset')
    resetCount () { this.count = 0 }

    @Emit()
    promise () {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({data: ''})
        }, 0)
      })
    }

    @Inject() foo!: number
    @Inject('bar') bar!: string

    @Model('change', {type: boolean}) checked!: boolean
  }
```