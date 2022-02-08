// console.log('1' + true) //1true
// console.log([1] + true) //1true
// console.log('2' * 3 + true)//7


// const arr = [1, 2, 3, 4];
// const [a, b, ...c] = arr
// console.log(a)
// console.log(b)




// console.log(c)
// const a = {
//     name: 'a'
// }
//
// let b = {
//     name: 'b'
// }
//
// let c = {
//     name: 'c'
// }
//
// c = b;
// b = a;
//
// c.name = 'new c'
// b.name = 'new b'
//
// console.log(a.name) //new b
// console.log(b.name)// new b
// console.log(c.name)// new b


// const b = {
//     name: 'b',
//     getName: function() {
//         return (
//         () => this.name
//      )()
//     }
// }
//
// const c = {
//     name: 'c'
// }
//
// Object.setPrototypeOf(c, b)
//
// console.log(c.getName())



// const a = {
//
// }
//
// const b = {
//     hi: () => {
//         console.log(this)
//     },
//
//     hi2 () {
//         (() => {
//             console.log(this)
//         }).call(a)
//     }
// }
//
// b.hi()
// b.hi2()



// Object.prototype.name = "Object"
// Object.prototype.showName = function() {
//   console.log(this.name)
// }
// const a = {
//     name: "a"
// }
//
// const b = Object.create(a)
// b.getName()
//
// Object.setPrototypeOf(b, {})
//
// b.getName()
//


// const arr = []
// console.log(arr.construct)

// const a = () => {}
// console.log(a.__proto__.__proto__.constructor === Object)


//arr.__proto__ = []
//console.log(arr.__proto__.__proto__)


// let i;
// for(i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 0)
// }


//console.log('a')
//console.log('b')
//
//setTimeout(() => {
//    console.log('timer 10')
//}, 10)
//
//setTimeout(() => {
//    console.log('timer 20')
//}, 20)
//
//Promise.resolve("Promise 1").then((res) => console.log(res))
//
//Promise.resolve(setTimeout(() => (console.log("Promise 2")), 5))
//
//Promise.resolve("Promise 3").then(console.log)
//
//setTimeout(() => {
//    console.log('timer 0')
//}, 0)
//
//console.log('d')
