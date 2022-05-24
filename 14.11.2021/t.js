// console.log('1' + true)
// console.log([1] + true)
// console.log('2' * 3 + true)



// console.log(null == undefined)
// console.log(null === null)
// console.log({} + {})



// const a = {
//     name: 'a'
// }

// let b = {
//     name: 'b'
// }

// let c = {
//     name: 'c'
// }

// c = b;
// b = a;

// c.name = 'new c'
// b.name = 'new b'

// console.log(a.name)
// console.log(b.name)
// console.log(c.name)



// const b = {
//     name: 'b',
//     getName: function () {
//         return (() => this.name)()
//     }
// }

// const c = {
//     name: 'c'
// }

// Object.setPrototypeOf(c, b)

// console.log(c.getName())



// const a = {
//     age: 25
// }

// const b = {
//     age: 23,

//     hi: () => {
//         console.log(this.age)
//     },

//     hi2() {
//         (() => {
//             console.log(this.age)
//         }).call(a)
//     }
// }

// b.hi()
// b.hi2()



// Object.prototype.name = "Object"

// Object.prototype.showName = function () {
//     console.log(this.name)
// }

// const a = {
//     name: "a"
// }

// const b = Object.create(a)
// b.showName()

// Object.setPrototypeOf(b, {})

// b.showName()



// const arr = []
// console.log(arr.constructor === Array)

// const a = () => { }
// console.log(a.__proto__.__proto__.constructor === Object)


// arr.__proto__ = []
// console.log(arr.__proto__.__proto__ === Object.prototype)



// let i;
// for (i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 0)
// }



// console.log('a')

// console.log('b')

// setTimeout(() => {
//     console.log('timer 10')
// }, 10)

// setTimeout(() => {
//     console.log('timer 20')
// }, 20)

// Promise.resolve("Promise 1").then((res) => console.log(res))

// Promise.resolve(setTimeout(() => (console.log("Promise 2")), 5))

// Promise.resolve("Promise 3").then(console.log)

// setTimeout(() => {
//     console.log('timer 0')
// }, 0)

// console.log('d')
