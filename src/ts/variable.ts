let arr: Array<string> = ['a', 'b', 'c']

let numArr: number[] = [1, 2, 3, 4]

let multArr: [number, string] = [1, 'str']

// 枚举
enum size { larger, middle, small}

// 任意类型
let name: any = 'xlon'
name = true
name = 2
// name.toFixed()
console.log(name, name.toFixed())

function noReturnValue (): void {
  console.log('函数没有返回值')
}
noReturnValue()

// 类型断言
let str: any = 'This is a string'
let strLen: number = (str as string).length
let strLen1: number = (<string>str).length
console.log(strLen, strLen1)

export {
  arr,
  numArr,
  multArr,
  size
}

