import { User, getName } from './Person'
import * as v from './variable'
import './interface'

let users = new User('xlon', 23, 'shanghai pengpu street')

console.log(users.welcomeWords('my'))

document.getElementById('app').innerHTML = users.welcomeWords('my')

console.log(getName(users))

// v.multArr[1] = 2   * typeError, is string not number
v.multArr[1] = 'change'
// v.multArr[3] = 2
console.log(v)

let s: string = v.size[1]
console.log(s)