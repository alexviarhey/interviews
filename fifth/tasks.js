//Оля Маргулевич
//Виктор Продеус
//Олег Злотников


// const foo = () => {
//     console.log(a)
//     console.log(b())
//
//     function bar() {
//         return 2
//     }
//
//     var a = 2;
// }
//
// foo()


// (() => {
//     let a = b = 5;
// })()
//
//
// console.log(b)


// const a = (x, y) => {
//
//     console.log(y)
//
//     return {
//         obj: (z) => {
//             a(y, z)
//         }
//     }
// }
//
// const res = a(1)
// res.obj(2)
// res.obj(3)
// res.obj(4)


// name = 'John';
// const a = {
//     name: 'Colin',
//     prop: {
//         name: 'Aurelio',
//         getName: function () {
//             return this.name;
//         }
//     },
//
// };
//
// console.log(a.prop.getName());
// const test = a.prop.getName;
// console.log(test());


// let i;
// for(i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 0)
// }
//
//
// let animal = {
//     eats: true
// }
//
// function Rabbit(name) {
//     this.name = name
// }
//
// Rabbit.prototype = animal
//
//
// let rabbit = new Rabbit('White Rabbit')
// console.log(rabbit.eats)


// function Rabbit(name) {
//     this.name = name;
//     console.log(name);
// }
//
// let rabbit = new Rabbit("White Rabbit");
// let rabbit2 = new rabbit.constructor("Black Rabbit");


// function Rabbit() {
// }
//
// Rabbit.prototype.jumps = true
//
// let rabbit = new Rabbit(); //{}
//
// console.log(rabbit.constructor === Rabbit)


// const a = {
//     toString() {
//         return 'key of a'
//     },
//     b: {
//         name: 'b'
//     }
// }
//
// const c = {};
// c[a] = 'a'
// c.b = a.b.name
//
// console.log(c)


// String.prototype.add = function (str) {
//     return this + str
// }
//
// const arr = [1, 2, 3]
//
// console.log(
//     arr.map(n => n * 2)
// )
//
// console.log(
//     arr.some(n => n === 2)
// )
//
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







