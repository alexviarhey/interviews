// {
//     var a = 10
// }

// console.log(a)

// console.log(b)

// {
//     var b = 10
// }


// {
//     let c = 10
// }

// console.log(c)



// foo()

// function foo() {
//     console.log('foo')
// }

// bar()

// {
//     function bar() {
//         console.log('bar')
//     }
// }



// const foo = () => {
//     let a = b = 10
// }

// foo()

// console.log(typeof a === 'undefined')
// console.log(typeof b === 'undefined')


// {

//     if (true) {
//         var a = 10
//     }

// }

// console.log(a)



// for (var i = 0; i < 10; i++) { }

// console.log(i)

// for (let j = 0; j < 10; j++) { }

// console.log(j)


// function Counter() {
//     let count = 0;

//     this.up = function () {
//         return ++count;
//     };

//     this.down = function () {
//         return --count;
//     };
// }

// let counter = new Counter();

// console.log(counter.up());
// console.log(counter.up());
// console.log(counter.down());



// function makeArmy() {
//     let shooters = [];

//     let i = 0;
//     while (i < 10) {
//         let shooter = function () {
//             console.log(i);
//         };
//         shooters.push(shooter);
//         i++;
//     }

//     return shooters;
// }

// let army = makeArmy();

// army[0]();
// army[5]();



// let user = {
//     name: "Alex",
//     go: function () {
//         console.log(this.name)
//     }
// };

// (user.go)()



// let user, go;

// user = {
//     name: 'Alex',
//     go: function () { console.log(this.name) }
// };

// user.go();

// (user.go)();

// (go = user.go)();

// (user.go || user.stop)()


// const user = {
//     age: 23,
//     showAge: () => {
//         (() => {
//             console.log(this.age)
//         })()
//     }
// }


// user.showAge.call({ age: 20 })


// function makeCar() {
//     return {
//         model: "Ford",
//         ref: this
//     };
// };

// let car = makeCar();

// console.log(car.ref.model);


// function User(name) {
//     this.name = name
// }

// const alex = new User("Alex")

// User.prototype = {}

// const hanna = new alex.constructor("Hanna")

// const max = new hanna.constructor("Max")

// console.log(alex.name)
// console.log(hanna.name)
// console.log(max.name)



// function User(name, age) {
//     return {
//         name,
//         age
//     }
// }

// const user = new User("Alex")

// console.log(user.constructor === User)




// function Rabbit(name) {
//     this.name = name;
// }

// Rabbit.prototype.sayHi = function () {
//     console.log(this.name);
// };

// let rabbit = new Rabbit("Rabbit");


// rabbit.sayHi();
// Rabbit.prototype.sayHi();
// Object.getPrototypeOf(rabbit).sayHi();
// rabbit.__proto__.sayHi();



// const userPrototype = {
//     showName() {
//         console.log(this.name)
//     }
// }

// const user = Object.create(null)
// user.__proto__ = userPrototype
// user.name = 'Alex'


// console.log(Object.getPrototypeOf(user) === userPrototype)
// user.showName()



// class User {
//     static DEFAULT_AGE = 23

//     showName() { }

//     showAge = () => {
//         console.log(this.DEFAULT_AGE)
//     }
// }

// const user1 = new User()
// const user2 = new User()

// console.log(user1.showName === user2.showName)
// console.log(user1.showAge === user2.showAge)

// user1.showAge()



// class BaseUser { }
// class User extends BaseUser { }

// const baseUser = new BaseUser()

// console.log(BaseUser.__proto__ === User.__proto__)

// console.log(BaseUser.prototype.__proto__ === User.prototype.__proto__)

// console.log(BaseUser.prototype.__proto__ === BaseUser.__proto__.__proto__)

// console.log(User.__proto__.__proto__ === Object.__proto__)

// console.log(User.prototype.__proto__.constructor === baseUser.constructor)

// console.log(User.__proto__ === baseUser.constructor)




// const p = new Promise((res, rej) => {
//     rej('Some Error')
// })

// p
//     .finally(() => {
//         console.log('finally')
//     })
//     .catch((e) => {
//         console.log(e)
//     })
//     .then((res) => {
//         console.log(res)
//     })


// const p = new Promise((res, rej) => {
//     res('Some data')
// })

// p
//     .finally(() => {
//         console.log('finally')
//     })
//     .catch((e) => {
//         console.log(e)
//     })
//     .then((res) => {
//         console.log(res)
//     })




// const p = new Promise((res, rej) => {
//     res(1)
// })

// p.then((res) => {
//     console.log(res)
//     return res + 1
// })

// p.then((res) => {
//     console.log(res)
//     return res + 1
// })

// p.then((res) => {
//     console.log(res)
// })


// const p = new Promise((res) => {
//     res()
// })

// const f1 = () => {
//     console.log(res)
// }

// const f2 = () => {
//     console.log('Inside f2')
// }

// p
//     .then(f1, f2)

// p
//     .then(f1)
//     .catch(f2)



// setTimeout(() => {
//     console.log(1)
// }, 3000)

// setTimeout(() => {
//     console.log(2)
// }, 2000)

// setTimeout(() => {
//     console.log(3)
// }, 1000)


// const foo = async () => {
//     console.log(4)
//     await bar()
//     console.log(6)
// }

// const bar = async () => {
//     console.log(5)
// }

// foo().then(() => {
//     console.log(7)
//     setTimeout(() => {
//         console.log(8)
//     }, 1000)
// })

// console.log(9)





// const res = async () => {
//     const nums = [1, 2, 3, 4, 5, 6]

//     const res = await nums.myFilter(n => n % 2 === 0)
//     const res1 = await nums.myFilter(n => n > 3)

//     console.log(res) //[2, 4, 6]
//     console.log(res1) //[4, 5, 6]
// }

// res()



// console.log(
//     reduce(
//         [1, 2],
//         (initial, current) => {
//             initial[current] = current
//             return initial
//         },
//         {}
//     )
// ) //{'1': 1, '2': 2}

// console.log(
//     reduce(
//         [1, 2, 3],
//         (initial, current) => {
//             initial.push(current.toString())
//             return initial
//         },
//         []
//     )
// ) //['1', '2', '3']
