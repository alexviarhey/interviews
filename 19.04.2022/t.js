// const foo = () => {
//     console.log(bar)
//     {
//         var bar = 5;
//     }
// }
//
// foo()


// const foo = () => {
//     console.log(bar)
//     {
//         let bar = 5;
//     }
// }
//
// foo()


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


// function toString() {
//     return 'Global'
// }
//
//
// const obj = {
//     a: () => {
//         console.log(
//             this.toString()
//         )
//     },
//
//     b() {
//         console.log(
//             this.toString()
//         )
//     },
//
//     c() {
//         (() => {
//             console.log(
//                 this.toString()
//             )
//         })()
//     }
// }
//
// obj.a()
// obj.b()
// obj.c()


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
// res.bar(5)



// const a = {};
// const b = {};
// const c = {}
// Object.setPrototypeOf(a, b)
//
//
// console.log(b.__proto__ === c.__proto__)
// console.log(a.__proto__ === b.__proto__)
// console.log(a.__proto__ === b)


// const a = {
//     name: 'a'
// }
//
// Object.defineProperty(a, 'getName', {
//     value: function () {
//         console.log(this.name)
//     }
// })
//
// const b = Object.assign({}, a, {name: 'b'})
//
// const c = Object.create(a, {
//     name: {
//         value: 'c',
//     }
// })
//
//
// a.getName()
// b.getName()
// c.getName()


// let a = () => {
//    console.log('a')
// }
//
// const execute = (f) => {
//    setTimeout(f, 1000)
// }
//
// execute(a)
//
// a = () => {
//    console.log('b')
// }


// function User() {
//     this.showActive = () => {
//         console.log(this.isActive)
//     }
// }
//
// User.prototype = {
//     isActive: false
// }
//
// const u = new User()
//
//
// User.prototype = {
//     isActive: true
// }
//
// const u1 = new User()
//
// u.showActive()
// u1.showActive()


// class Test {
//     constructor(name) {
//         this.name = name
//         if (!name) {
//             return {name: 'Default name'}
//         }
//
//     }
// }
//
//
// const t = new Test()
// const t1 = new Test("Should return undefined")
//
// console.log(t.name)
// console.log(t1.name)


// const getUsers = () => {
//     return new Promise(() => {
//         setTimeout(() => {
//             return [{name: 'Alex'}]
//         }, 1000)
//     })
// }
//
// const showUsers = async () => {
//     const users = await getUsers()
//     console.log(users)
// }
//
// console.log('Before showUsers')
//
// showUsers()
//
// console.log('After showUsers')






