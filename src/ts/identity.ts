// 泛型
function identity<T>(args: T): T {
  return args
}
let idt: <T>(args: T) => T = identity
let idt1: {<T>(args: T): T} = identity  // 调用签名的对象自变量来定义泛型函数{}

// 手动定义参数类型
let output1 = identity<number>(2)
// 系统自动识别传入的参数类型
let output2 = identity('str')


function identityArray<T>(args: T[]): T[] {
    // 能够获取到args.length
    console.log(args.length)
    return args
}

// 除了泛型接口，我们还可以创建泛型类。 注意，无法创建泛型枚举和泛型命名空间。
// 类有两部分：静态部分和实例部分, 类的静态属性不能使用这个泛型类型

class identityClass<U> {
  value: U
  del: (arg1: U, arg2: U) => U
}

console.log(identityArray([1, 2, 3, 4]))