// console.log(null == undefined)
// console.log(null === undefined)
// console.log(null == null)
// console.log(null === null)
// console.log(undefined == undefined)
// console.log(undefined === undefined)
// console.log('undefined' == undefined)


// const foo = () => {
//     bar()
//     {
//         function bar() {
//             console.log('bar')
//         }
//     }
// }
//
// foo()


// const a = {
// 	msg: 'Hello World',
// 	getMsg() {
// 		const msg = "Hello getMsg"
// 		return this.msg
// 	}
// }
//
// console.log(a.getMsg())


// const a = {
//     name: 'a',
//     getName () {
//         console.log(this.name)
//     }
// }
//
// const b = {
//     name: 'b'
// }
//
// const c = {
//     name: 'c'
// }
//
// a.getName()
//
// const foo = a.getName.bind(b)
//
// a.getName()
//
// a.getName.call(b)
//
// foo.call(c)


// Object.prototype.name = 'Object'
//
// const a = {
//     getName() {
//         console.log(this.name)
//     }
// }
//
// const b = {
//     name: 'b'
// }
//
// a.getName()
//
// b.__proto__ = a;
//
// b.getName()
//
// const c = Object.create(a, {
//     name: {
//         value: 'c'
//     }
// })
//
// c.getName()


// class A {
//     constructor(name) {
//         this.name = name
//     }
// }
//
// class B {
//     constructor(name) {
//         this.name = name
//         return 20
//     }
// }
//
// class C {
//     constructor(name) {
//         this.name = name
//         return { a: 1, b: 2, c: 3 }
//     }
// }
//
//  console.log(new A('A'))
//  console.log(new B('B'))
//  console.log(new C('C'))


// const foo = (x, y) => {
//
//     console.log(y)
//
//     return {
//         bar: (z) => {
//             foo(y, z)
//         }
//     }
// }
//
// const res = foo(1)
// res.bar(2)
// res.bar(3)
// res.bar(4)


// const course = {
//     name: 'KMB-1',
//     students: ['Alex', 'Hanna'],
//     showCourseStudents() {
//         this.students.forEach(function (s) {
//             console.log(`${this.name}: ${s}`)
//         })
//     }
// }
//
// course.showCourseStudents()


// let i;
// for (i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 0)
// }


// for (var i = 0; i < 10; i++) {
//    (function (j) {
//         setTimeout(() => console.log(j), 10)
//     })(i)
// }


// String.prototype.add = function (str) {
//     return this + str
// }
//
// const arr = [1, 2, 3]
//
// const res = arr
//     .join("a")
//     .replaceAll("a", '0,')
//     .add("0")
//     .split(",")
//     .map(n => +n)
//     .reduce((acc, n) => {
//         acc[n] = n
//         return acc
//     }, {})
//
// console.log(res)