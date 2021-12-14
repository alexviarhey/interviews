// console.log('2' + 3) //23
// console.log(6 * '2') //12
// console.log((true + false) === (2 + false)) //false


// console.log(null == null)
// console.log(null === null)
// console.log(undefined == undefined)
// console.log(undefined === undefined)


// y = 5;
// let y = 4;
// console.log(y)
// console.log(window.y)


// for(var i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(a)
//      }, 0)
// }


// let i;
// for(i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 0)
// }

// console.log(true & true) //1 & 1 -> 1
// console.log(false & false) //0 & 0 -> 0
// console.log(false & true)// 0 & 1 -> 0

// console.log(true | true) 1 | 1 -> 1
// console.log(false | false)
// console.log(false | true)

// console.log(true ^ true)
// console.log(false ^ false)
// console.log(false ^ true)


// foo()
//
// function foo() {
//     console.log('foo')
// }
//
// const bar = function () {
//     console.log('bar')
// }
//
// bar()



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
// a.getName()
//
// a.getName.call(c)
// a.getName.apply(b)
// foo.call(c)

//fObject.prototype.name = 'Object name'

// const a = {
//     getName () {
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
// const c = Object.assign({}, a)
// c.getName()



// const a = {};
// const b = {};
// const c = {}
// a.__proto__ = c
//
//
// console.log(a.__proto__ === b.__proto__)
// console.log(a.__proto__ === c)

console.log('a')
console.log('b')

setTimeout(() => {
    console.log('timer 10')
}, 10)

setTimeout(() => {
    console.log('timer 20')
}, 20)

Promise.resolve(console.log("Promise 1")).then(console.log)
Promise.resolve(setTimeout(console.log.bind(null, "Promise 2")), 0)
Promise.resolve("Promise 3").then(console.log)
setTimeout(() => {
    console.log('timer 0')
}, 0)

console.log('d')

//a b d Promise 1 Promise 3 Promise 2 0 10 20


// function A (name) {
//     this.name = name
//     return 6
// }
//
//
// const a = new A("Alex")
//
// const b = A("Hanna")
//
//
// console.log(a.name)
// console.log(b.name)















