// console.log(5 + '2')
// console.log(5 - '2')
// console.log(5 * '2')
// console.log(true + true)
// console.log([12, 2, 3] + {})


// const user = {
//     name: 'Alex',
//     hello: function () {
//         console.log(`Hello, ${this.name}`)
//     }
// }
//
// setTimeout(user.hello, 1000)


// const a = {
//
//     go: function () {
//         console.log(this.toString())
//     },
//
//     run: () => {
//         console.log(this)
//     },
//
//     stop: function () {
//         (() => {
//             console.log(this)
//         })()
//     }
// }
//
// a.go()
// a.run()
// a.stop()


// function User(name) {
//     this.name = name
//     return this
// }
//
// const admin = new User("Alex")
// const developer = User("Hanna")
//
// name = 'John'
//
// console.log(admin.name)
// console.log(developer.name)


// const a = {
//     name: 'a',
//     getName: function () {
//         console.log(this.name)
//     }
// }
//
// const b = Object.assign({ name: 'b' }, a)
// const c = Object.create(a, {
//     name: {
//         value: 'c',
//         configurable: false,
//         writable: true,
//         enumerable: false
//     }
// })
//
//
// b.getName()
// c.getName()
//
// console.log(c.__proto__ === a)


// new Promise((resolve) => {
//     resolve(1)
// })
//     .then(res => {
//         console.log(res)
//         return new Promise((res) => res(2))
//     })
//     .then(res => console.log(res))
//     .then(res => console.log(res))



// const arr = [10, 1, 4, 5, 2]
// const getMaxWithIndex = (arr) => {
//     let resultNum = arr[0];
//     let resultIndex = 0;
//
//     for (let i = 0; i < arr.length; i++) {
//         if (resultNum < arr[i]) {
//             resultNum = arr[i]
//             resultIndex = i
//         }
//     }
//
//     return [resultNum, resultIndex]
//
// }
// console.log(getMaxWithIndex(arr))



