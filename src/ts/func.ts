// 具名函数与匿名函数
function add (x: number, y: number): number {
  return x + y
}

let addv = (x: number, y: number): number => {
  return x + y
}

// 自动识别左右其中一端的类型并赋给未定义的一端
let addx: (firstNum: number, secondNum: number) => number = (x, y) => { return x + y }

// 可选参数？或设置默认值 lastName = 'xxx'
function func (firstName: string, lastName?: string): string {
  if (lastName) {
    return `${firstName}.${lastName}`
  } else {
    return `${firstName}`
  }
}

// 如若设置了默认值，在调用的时候需要传 undefined
function createName (firstName = 'Jhon', lastName: string): string {
  return `${firstName}.${lastName}`
}
let result = createName(undefined, 'dan')

// 剩余参数
function createName1 (firstName = 'Jhon', ...lastName: string[]): string {
    return `${firstName}.${lastName.join('.')}`
}
let result1 = createName1(undefined, 'dan', 'm')
// let result2: (fname: string, rest: string[]) => string = createName1

console.log(addv(3, 5), add(3, 5), addx(1, 2))
console.log(func('xlon'), func('xlon', 'm'))
console.log(result, result1)
