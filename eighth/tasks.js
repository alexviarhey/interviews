// console.log(1 + "2")
// console.log(1 * '2')
// console.log(1 * '2a')
// console.log({} + { toString () { return "{}" } })
// console.log([1, 2] + [1, 2, 3])
// console.log([1,2] - [1, 2, 3])


// const multiply = (x, y) => x * y
//
// const doubleMultiply = multiply.bind(null, 2)
//
// console.log(
//     doubleMultiply(2)
// )
// console.log(
//     doubleMultiply(3)
// )


// const callCount = (fn) => {
//     let count = 0;
//
//     return (...args) => {
//         console.log(`Count: ${++count}`)
//         fn(...args)
//     }
// }
//
// const add = (a, b) => {
//     const res = a + b
//     console.log(`Result:`,res)
//     return res
// }
//
// const addCount = callCount(add)
//
// addCount(1, 2)
// addCount(1, 2)


// const arr = [1, 2, 3, 4, 5, 6];
// const handlers = []
//
//
// handlers.forEach(h => {
//     h()
// })


// const a = {
//     f () {
//         console.log( this )
//     }
// }
//
// let user = {
//     g: a.f.bind(null)
// };
//
// user.g();


// function Rabbit () {}
//
// const rabbit = new Rabbit()
//
//
// Rabbit.prototype = {
//      jumps: true
// }
//
// console.log(rabbit.constructor === Rabbit)
//
// const rabbit2 = new rabbit.constructor()
//
// console.log(rabbit2.jumps)
//
// console.log(rabbit2.constructor === Rabbit)


// setTimeout(() => {
//     console.log("Timer 1")
// }, 30)
//
// setTimeout(() => {
//     console.log("Timer 2")
// }, 20)
//
// setTimeout(() => {
//     console.log("Timer 3")
// }, 10)
//
// const p = new Promise((res) => {
//
//     console.log("Inside promise 1")
//
//     setTimeout(() => {
//         res("Resolve Promise 1")
//     }, 50)
// })
//
// p.then(res => console.log(res))
//
// Promise
//     .resolve("Resolve promise 2")
//     .then(res => console.log(res))
