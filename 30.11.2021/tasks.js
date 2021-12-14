// Array.prototype.toString = function() {
//    return "[]"
// }
//
// Object.prototype.toString = function() {
//    return "{}"
// }
//
// console.log([{}, {}, {}] + '')
// console.log([] + { toString() { return "" } })


//Дима Карпов //"[]{}" "[]"
//Настя // '[]{}' '[]'
//Вадим Прудников ---
//Влад Михальчик '[]{}' ''
//Влад Шейна //'[]{}' --
//Александр Паденков // "[]{}", "[]"
//Анастасия Жилко // '[object Object]' 'object'
//Алексей Филипов //'[]{}' ---

// const foo = () => {
//    console.log(a)
//
// }
//
//
// foo()

//Дима Карпов //undefined
//Настя //undefined
//Вадим Прудников
//Влад Михальчик //undefined
//Влад Шейна //undefined
//Александр Паденков //undefined
//Анастасия Жилко // null
//Алексей Филипов //undefined



// const user = {
//    name: 'Alex',
//    showName () {
//        console.log(this.name)
//    }
// }
//
//
// setTimeout(() => { user.showName() }, 10)



//Дима Карпов -> from 10ms -> Alex
//Настя -> from 10ms Window
//Вадим Прудников -> from 10ms -> Alex
//Влад Михальчик -> from 10ms -> Alex
//Влад Шейна -> -------
//Александр Паденков -> Alex x10
//Анастасия Жилко -> undefined
//Алексей Филипов -> from 10ms -> Alex



// let mul = (a, b, c) => {
//    return a * b * c
// }
//
// const foo = (a) => (b) => (c) =>  a * b * c
//
// const b = foo(1)
// b()()
//
// const double = mul.bind(null, 2)
// const triple = mul.bind(null, 3)
//
// console.log(double(2)) // 4
// console.log(double(3)) // 6

//Дима Карпов // const double = mul.bind(null, 2)
//Настя
//Вадим Прудников mul.bind(null, 2)
//Влад Михальчик
//Влад Шейна
//Александр Паденков
//Анастасия Жилко
//Алексей Филипов

//Дима Карпов
//Настя
//Вадим Прудников
//Влад Михальчик
//Влад Шейна
//Александр Паденков
//Анастасия Жилко
//Алексей Филипов


// function withCashing(func) {
//    const cash = new Map()
//
//    return function(x, y) {
//
//        const key = `${x}-${y}`
//
//
//        if(cash.has(key)) {
//            console.log('Inside if')
//            return cash.get(key)
//        }
//
//        const res = func.call(this, x, y)
//
//        cash.set(key, res)
//
//        return res
//    }
// }
// //
// let wallet = {
//    owner: 'Vasya',
//    getName () {
//        return this.owner
//    },
//
//    getSumAndName (a, b)  {
//       const sum = a + b;
//        return {
//            name: this.getName(),
//            sum
//        }
//    }
// }
// wallet.getSumAndName = withCashing(wallet.getSumAndName)
//
//
// console.log(
//     wallet.getSumAndName(3, 5)
// )


// let group = {
//    name: 'Friday',
//    students: ["Alex"],
//
//    showStudents () {
//        this.students.forEach(function(s) {
//            console.log(`${this.name}: ${s}`)
//        })
//    }
// }
//
// group.showStudents()

//Дима Карпов -> {'Friday: Alex'}
//Вадим Прудников -> {'Friday: Alex'}
//Влад Михальчик -> {'undefined: undefined'}
//Влад Шейна -> {'undefined: Alex'}
//Александр Паденков -> {'Friday: Alex'}
//Анастасия Жилко -> {'undefined: Alex'}
//Алексей Филипов -> {'undefined: Alex'}



// function User(name) {
//    this.name = name
// }
//
// // const User = {
// //     prototype : {
// //         constructor: User,
// //         showName () {
// //             console.log(this.name)
// //         },
// //          name: 'Prototype'
// //     }
// // }
//
// User.prototype.showName = function() {
//    console.log(this.name)
// }
//
// User.prototype.name = "Prototype"
//
// const user = new User('Alex') // -> user = { name: 'Alex' } __.proto__ -> User.prototype -> { constructor: User, showName () {} }
//
// user.showName()
// User.prototype.showName() //User.prototype ->
// const userPrototype = Object.getPrototypeOf(user) //userPrototype ->
// userPrototype.showName()
// user.__proto__.showName()

//Дима Карпов -> 'Alex'   undefined undefined
//Вадим Прудников -> 'Alex' undefined    undefined
//Влад Михальчик -> undefined Alex undefined undefined
//Влад Шейна -> Alex undefined undefined undefined
//Александр Паденков -> 'Alex' undefined undefined undefined
//Анастасия Жилко -> undefined undefined undefined
//Алексей Филипов -> 'Alex' undefined 'Alex' 'Alex'




//Дима Карпов -> { constructor: Object }
//Вадим Прудников -> { constructor: Object }
//Влад Михальчик -> { constructor: Object }
//Влад Шейна -> ------------
//Александр Паденков -> { constructor: Object }
//Анастасия Жилко -> -----------
//Алексей Филипов -> { constructor: Object }

