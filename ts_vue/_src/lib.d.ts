
declare interface Window {
  [key: string]: any,
  prototype: any,
  new(): Window
}

// 在ts文件中引用jquery,lodash这类工具库，要事先全局声明