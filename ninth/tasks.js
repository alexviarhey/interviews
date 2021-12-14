// const arr = [1, 2, 3, 4];
// const [a, b, ...c] = arr
// console.log(a)
// console.log(b)
// console.log(c)


// let [a, b, c] = "abc";
// console.log(a, b, c)


// let user = {
//     name: 'My name'
// };
// [user.name, user.surname] = "Name Surname".split(' ')
// console.log(user.name)



// let {a, b, c} = {a: 1, b: 2, c: 3}


// const sum = (...arg) => {
//
// }
//
// console.log(sum()) //0
// console.log(sum(1)) //1
// console.log(sum(1, 2)) //3
// console.log(sum(1, 2, 3)) //6


// let num = 'a'
//
// const logNum = () => {
//     console.log(num)
// }
//
// num = 'b'
//
// logNum()


// function User(name) {
//     this.sayHi = () => {
//         console.log(name)
//     }
// }
//
// const user = new User("John")
//
// user.sayHi()



// const arr = []
// console.log(arr.__proto__.__proto__)

// const a = () => {}
// console.log(a.__proto__.__proto__.constructor === Object)


// const user = {
//     sleep () {
//         this.isSleeping = true
//     }
// }
//
// const john = {
//     __proto__: user
// }
//
// john.sleep()
//
// console.log(john.isSleeping)



// function User() {}
//
// const user = new User()// _proto_ -> { constructor }
//
// User.prototype = {
//
// }
//
//
// console.log(user.constructor === User)


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
