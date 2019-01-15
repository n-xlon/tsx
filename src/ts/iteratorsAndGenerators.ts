let list = ['a', true, 1]

// 迭代的key对应的value
for (let it of list) {
    //...todo
    console.log(it)  // 'a', true, 1
}

// 迭代的是key
for (let index in list) {
    //...todo
    console.log(index)  // 0, 1, 2
}

let animals = new Set(['Dog', 'Tiger', 'Cat'])
animals.type = 'all'

for (let val of animals) {
  // ...todo
  console.log(val)  // 'Dog', 'Tiger', 'Cat'
}

for (let key in animals) {
    // ...todo
    console.log(key)  // type
}

// es5或更低, 会转换为for循环语句获取到值