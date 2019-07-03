declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

// 声明全局的vue方法
declare module 'vue/type/vue' {
  interface Vue {
    $message: any
  }
}

declare module 'mammoth' {
  import mammoth from 'mammoth'
  export default mammoth
}
