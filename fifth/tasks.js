
// const foo = () => {
//     const bar = () => {
//         console.log('bar')
//     }

//     bar()

//     baz()

//     const baz = () => {
//         console.log(bazLog)
//     }

//     const bazLog = 'baz';
// }

// foo()


// (() => {
//     let a = b = 5
// })()


// const c = {
//     showB() {
//         console.log(b)
//     }
// }


// c.showB()



// const a = (x, y) => {

//     console.log(y)

//     return {
//         a: (z) => {
//             a(y, z)
//         }
//     }
// }

// const res = a(1)

// res.a(2)



// const user = {

//     _data: {
//         name: "Colin"
//     },

//     _methods: {
//         _getName: function () {
//             return this.name;
//         }
//     },

//     getName() {
//         return this._methods._getName()
//     }
// }


// console.log(
//     user.getName()
// )


// const getCatCreator = () => (
//     class Cat {
//         constructor(name) {
//             this.name = name
//         }
//     }
// )

// const cat = new (getCatCreator())("Cat name!")

// console.log(cat.name)



// let animal = {
//     eats: true
// }

// function Rabbit(name) {
//     this.name = name
// }

// let rabbit = new Rabbit('White Rabbit')

// Rabbit.prototype = animal

// console.log(rabbit.eats)



// function Rabbit(name) {
//     this.name = name;
// }

// let rabbit = new Rabbit("White Rabbit");
// let rabbit2 = new rabbit.constructor("Black Rabbit");

// console.log(rabbit.__proto__ === rabbit2.__proto__)


// function Rabbit() {
// }

// Rabbit.prototype = { jumps: true }

// let rabbit = new Rabbit();

// console.log(rabbit.constructor === Rabbit)


// const a = {
//     toString() {
//         return 'key of a'
//     },
//     b: {
//         name: 'b'
//     }
// }

// const c = {};

// c[a] = 'a'
// c[a.b] = a.b.name

// console.log(c)


// String.prototype.add = function (str) {
//     return this + str
// }

// const arr = [1, 2, 3]

// console.log(
//     arr
//         .join("a")
//         .replaceAll("a", '0,')
//         .add("0")
//         .split(",")
//         .map(n => +n)
//         .reduce((acc, n) => {
//             acc[n] = n
//             return acc
//         }, {})
// )
