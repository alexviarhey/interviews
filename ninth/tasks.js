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


// let num = 'a'

// const logNum = () => {
//     console.log(num)
// }

// num = 'b'

// logNum.bind({ num: 'c' })()


// function User(name) {
//     this.name = "default"
//     this.sayHi = () => {
//         console.log(name)
//     }
// }

// const user = new User("John")

// user.sayHi()



// console.log(
//     [].__proto__.__proto__ === null
// )


// console.log(
//     (() => { }).__proto__.__proto__ === Object.prototype
// )


// const user = {
//     sleep() {
//         this.isSleeping = true
//     }
// }

// const john = {
//     __proto__: user
// }

// john.sleep()

// console.log(john.isSleeping)


// function User() { }

// User.prototype = {}

// const user = new User()

// console.log(user.constructor === User)



// const a = {
//     name: 'a'
// }

// const b = {
//     name: 'b',

//     hi() {
//         (() => {
//             console.log(this.name)
//         }).call(a)
//     }
// }

// b.hi()



// const count = 0;

// const counterCreator = () => {
//     return () => {
//         count += 1
//     }
// }

// const counter = counterCreator()
// const counter2 = counterCreator()

// counter()
// counter()
// counter2()

// console.log(count)
