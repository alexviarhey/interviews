// const a = {
// 	msg: 'Hello World',
// 	getMsg() {
// 		const msg = "Hello getMsg"
// 		return this.msg
// 	}
// }
//
// console.log(a.getMsg())


//Анастасия Волкова 'Hello World'
//Игнат Яськевич 'Hello World'
//Антон Дехтярь undefined
//Виктор Продеус 'Hello World'


// function User(name) {
//     this.name = name;
//     console.log(this)
//     this.getName = () => {
//         return this.name;
//     }
// }
//
// const user = new User('John');
// console.log(user.getName());
//
//
// const { getName } = user;
// console.log(getName())
//
// const b = user.getName
// console.log(b())

//Анастасия Волкова John John John
//Игнат Яськевич John John John
//Антон Дехтярь John undefined undefined
//Виктор Продеус John undefined undefined


// const object = {
// 	message: 'Hello, World!',
// 	logMessage() {
// 		console.log(this.message);
// 	}
// };
//
// setTimeout(object.logMessage, 1000);

//Анастасия Волкова 'Hello, World!'
//Игнат Яськевич 'Hello, World!'
//Антон Дехтярь undefined
//Виктор Продеус undefined


// const object = {
// 	who: 'World',
// 	greet() {
// 		return `Hello, ${this.who}!`;
// 	},
// 	farewell: () => {
// 		return `Goodbye, ${this.who}!`;
// 	}
// };
//
// console.log(object.greet());
// console.log(object.farewell());

//Анастасия Волкова Hello World Goodbye, undefined
//Игнат Яськевич Hello World Goodbye World
//Антон Дехтярь Hello World Goodbye, undefined
//Виктор Продеус Hello World Goodbye World


// class User {
// 		constructor(name) {
// 			this.name = name
// 		}
//
// 		getName() {
// 			return this.name
// 		}
// }

// const user =  new User("Nick")
// console.log(user.getName())
//
// console.log(typeof User)
// console.log(User === User.prototype.constructor)
// console.log(User)
// console.log(User.prototype.constructor)


//Анастасия Волкова Nick object false
//Игнат Яськевич Nick function false
//Антон Дехтярь Nick function false
//Виктор Продеус Nick function true


// const Test = class MyTest {
//
// 	sayHello() {
// 		console.log("Hello")
// 	}
// }
//
// new Test().sayHello()
// console.log(MyTest)

//Анастасия Волкова Hello sayHello()
//Игнат Яськевич Hello '[object Object]'
//Антон Дехтярь
//Виктор Продеус undefined MyTest() {}


// console.log(Object.getPrototypeOf(b) === a)
// Object.setPrototypeOf(b, {})
// console.log(Object.getPrototypeOf(b) === {})

//console.log(Object.getOwnPropertyDescriptor(b, 'name'))

// const a = {
// 	name: 'a'
// }
//
// const b = Object.create(a, {
// 	name: {
// 		value: 'b',
// 	}
// })
//
//
// console.log(Object.keys(b))
// console.log(Object.values(b))
//
// b.age = 23
// console.log(b.age)
//
// Object.defineProperty(b, 'age', {
//     value: 35,
//     enumerable: true,
//     writable: true
// })

//Анастасия Волкова {value: 'b'} true false [name, age] [b, 16] 16
//Игнат Яськевич 'b' true false ['age'] [{value: 16. enumerable: true}] -
//Антон Дехтярь {value: 'b'} false false  [age] [16] 16
//Виктор Продеус {value: 'b'} true false [name, age] [16, b] 23


