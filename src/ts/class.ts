interface SquareInterface {
  name: string
}

class Square implements SquareInterface{
  // name: string  //实现申明或在构造函数里面申明
  private type: number  // 私有属性
  readonly lib: object = {}  // 只读属性
  describle: string = '计算面积'
  constructor (public name: string, type: number) {
    this.name = name
    this.type = type
  }
  public getSquareSize (width: number, height: number): string {
    if (this.type === 1) {
      return `方形 ${this.name}'s size is ${width * height}`
    } else if (this.type === 2) {
      let size = width * height / 2
      return `三角形 ${this.name}'s size is ${size}`
    }
  }
  set _Describle (tx: string) {
    this.describle = tx
  }
  get _Describle (): string {
    return this.describle
  }
  // setLib (dt: object) {
  //   this.lib = dt
  // }
}

class Rectangle extends Square {
  constructor (name: string, type: number = 1) {
    super(name, type)
  }
  getSquareSize (width: number, height: number): string {
    return super.getSquareSize(width, height)
  }
}

class Triangle extends Square {
    constructor (name: string, type: number = 2) {
        super(name, type)
    }
    getTriangleSize (width: number, height: number): string {
        return super.getSquareSize(width, height)
    }
}

// class 静态属性
class StaticGrid {
  static origin = {x: 0, y: 0}
  constructor (public scale: number) {}
  calculateOriginPoint (point: {x: number, y: number}) {
    let xLen = point.x - StaticGrid.origin.x
    let yLen = point.y - StaticGrid.origin.y
    return xLen * yLen / this.scale

  }
}

// 接口调用类
class Point {
  x: number
  y: number
}

interface PointPos extends Point {
  z: number
}

let pt: PointPos = {x: 1, y: 2, z: 3}
console.log(pt)

let tangle = new Rectangle('...')
let tri = new Triangle('#')
let cls = new Square('xx', 1)
cls._Describle = '面积'
console.log(tangle.getSquareSize(10, 4))
console.log(tri.getTriangleSize(10, 2))
console.log(cls._Describle)
// console.log(new Square('xx', 1).setLib({id: 123}))   // 只读属性不能被二次修改

let grid = new StaticGrid(2.0)
console.log(grid.calculateOriginPoint({x: 10, y: 2}))