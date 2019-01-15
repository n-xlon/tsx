// 联合类型
function argClass (value: string, num: string | number) {
  if (typeof num === 'number') {
    return `This value is ${value}. typeof num is number`
  } else if (typeof num === 'string') {
    return `This value is ${value}. typeof num is string`
  }
}

// argClass('xx', true)  // num类型不在定义的联合类型内

interface inf1 {
  list()
  inf()
}

interface inf2 {
  list()
  inf2()
}

// 只会调用两个接口共有的类型
function useFunc (): inf1 | inf2 {}

// 类型别名
type str = string
type strResult = () => string
type strOnResult = str | strResult