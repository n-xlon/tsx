const reg = /\d+\-/

function getRetureValue (arg: string): boolean {
  return reg.test(arg)
}

// export const reg = /\d+\-/
//
// export function getRetureValue (arg: string): boolean {
//     return reg.test(arg)
// }

export {
  reg,
  getRetureValue
}

import { reg, getRetureValue } from './'
import * as ct from './'

export = getRetureValue
import func = require("")

export default const name = 'xlon'
import name from './'


// 命名空间
// declare namespace Shape 外部命名空间（通过script标签导入）
namespace Shape {
  export namespace ShapeList {
    export class Triangle {}
    export class Square {}
  }
}

import shapeList = Shape.ShapeList
let vl = new shapeList.Square()