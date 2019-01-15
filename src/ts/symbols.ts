// Symbols是不可改变且唯一的
let sym1 = Symbol('key')
let sym2 = Symbol('key')

console.log(sym1 === sym2)  // false; symbols是唯一值

// 作为对象属性的key
let sym = Symbol()
const sym3 = Symbol()

let obj = {
  [sym]: 'value',
  [sym3] () {
    return 'A'
  }
}

class ca {
  [sym3] () {
    return 'ca'
  }
}


console.log(obj[sym], obj[sym3])  // value, A

