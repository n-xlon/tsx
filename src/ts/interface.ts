 // 只读接口
 interface includeOnlyRead {
   readonly name: string,
   age?: number,
   [propName: string]: any  // 可能存在额外属性
 }

 let dt: includeOnlyRead = {name: 'xlon', age: 20}
 // dt.name = 'xx'   只读类型不能再次被赋值
 dt.age = 21
 console.log(dt)


 interface arrayIndex {
   [index: number]: string
 }

 let myArray: arrayIndex = ['no1', 'no2']
 console.log(myArray[0])


 interface clockInterface {
   currentTime: Date,
   setTime (d: Date)
 }

 // 强制class(类)符合某种接口契约
 class clock implements clockInterface {
   currentTime: Date
   constructor (h: number, m: number) {}
   setTime (d: Date) {
     return this.currentTime = d
   }
 }

 let ck = new clock(12, 20)
 console.log(ck.setTime(new Date('2019-01-13')))