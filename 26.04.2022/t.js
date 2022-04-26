// console.log("1" + 2)
// console.log(2 + "1")
// console.log(2 - "1")
// console.log([1, 2, 3] + {})


// Object.prototype.toString = function () {
//     return "custom string representation"
// }
//
// const a = Object.create(null, {})
//
// console.log(a + "")

// console.log(a)
//
// {
//     var a = 6
// }


// {
//     let b = 6
// }
//
// console.log(b)


// test()
//
// {
//     function test() {
//         console.log('test')
//     }
// }


// for (var i = 0; i < 10; i++) {
//    (function (j) {
//         setTimeout(() => console.log(j), 10)
//     })(i)
// }


// const test = {
//     prefix: '_',
//     tests: ['1', '2', '3'],
//     addPrefixToTest() {
//         this.tests = this.tests.map(function (testName) {
//             return `${this.prefix}_${testName}`
//         })
//     }
// }
//
// test.addPrefixToTest()

// console.log(test.tests)


// function User(name) {
//     this.name = name
// }
//
// const user = new User('Alex')
//
// console.log(user.isActive)
//
// User.prototype = {
//     isActive: true
// }
//
// console.log(user.isActive)


// function User(name) {
//     this.name = name
// }
//
// const user = new User('Alex')
//
// console.log(
//     user.constructor === User
// )
//
// User.prototype = {
//     isActive: true
// }
//
// console.log(user.constructor === User)


// new Promise(() => {
//    setTimeout(() => {
//        return "Hello"
//    }, 1000)
// })
//     .then(res => `${res} World`)
//     .then(res => `${res} !`)
//     .then(console.log)



// let a = 5;
//
// a = a.addOne()
//
// console.log(a)












