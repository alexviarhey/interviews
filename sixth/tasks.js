
// console.log('1' + true) //1true
// console.log([1] + true) //1true
// console.log('2' * 3 + true)//7


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



// const a = {
//     children: [
//         {
//             name: {
//                 first: 'Иван',
//                 middle: 'Иванович'
//             }
//         },
//         {
//             name: {
//                 first: 'Алексей',
//                 middle: 'Алексеевич'
//             }
//         }
//     ]
// }
//
// const b = {
//     ...a,
//     children: a.children.map(c => ({
//         ...c,
//         name: {
//             ...c.name
//         }
//     }))
// }
//
// b.children.forEach(child => child.name.first = "Дмитрий")
//
// console.log(a.children[0].name.first)



// Object.prototype.name = "Object"
//
// const a = {
//     name: "a"
// }
//
// const b = Object.create(a)
// b.getName = function () { console.log(this.name) }
//
// b.getName()
//
// Object.setPrototypeOf(b, {})
//
// b.getName()


// const a = {}
// const b = {}
//
// const res = Object.getPrototypeOf(a) === Object.getPrototypeOf(b)
//
// console.log(res)


// const promise = new Promise((res) => {
//     res(1)
// })
//
// promise
//     .then((data) => {
//         return new Promise((res) => {
//             res(data)
//         }).then(() => 2)
//     })
//     .then(data => {
//         console.log(data)
//     })


// function User () {
//     this.name  = "User"
// }
//
// User.prototype.age = "23"
//
// function Animal() {
//     this.name = "Animal"
// }
//
// const p = User.prototype
//
// User.prototype = Animal.prototype
//
// Animal.prototype = p
//
// const user = new User()
// const animal  = new Animal()
//
// console.log(user.name)
// console.log(animal.name)
// console.log(user.age)
// console.log(animal.age)


// const a = {name: "a"}
//
// function foo() {
//     console.log(this.name)
// }
//
// foo.bind(a)()


// function a () {
//     console.log(this)
// }
//
// a()
//
//
// const b = {
//     name: 'b',
//     getName: function() {
//         //this
//         return (() => this.name)()
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


// const c = {
//     name: 'c',
//     getName () {
//         console.log(this.name)
//     }
// }
//
// function A(name) {
//     this.name = name
//     this.getName = function () {
//         console.log(this.name)
//     }
// }
//
//
// function B() {
//     return this
// }
//
// const aConstructor = A.bind(c)
// const a = new aConstructor("a")
//
// const b = B.call(c)
//
// a.getName()
// b.getName()

