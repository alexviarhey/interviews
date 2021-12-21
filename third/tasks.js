// const a = {
// 	msg: 'Hello World',
// 	getMsg() {
// 		const msg = "Hello getMsg"
// 		return this.msg
// 	}
// }
//
// console.log(a.getMsg())



// function User(name) {
//     this.name = name;
//     this.getName = () => {
//     	return this.name;
// 	}
// }
//
// const cat = new User('John');
// console.log(cat.getName());
//
// const { getName } = cat;
// console.log(getName())
//
// const b = cat.getName
// console.log(b())




// const object = {
// 	message: 'Hello, World!',
// 	logMessage() {
// 		console.log(this.message);
// 	}
// };
//
// setTimeout(object.logMessage, 1000);



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



// class User {
// 		constructor(name) {
// 			this.name = name
// 		}
//
// 		getName() {
// 			return this.name
// 		}
// }
//
//
// const user =  new User("Nick")
// console.log(user.getName())
//
// console.log(typeof User)
// console.log(User === User.prototype.constructor)
// console.log(User)
// console.log(User.prototype.constructor)



// const Test = class MyTest {
//
// 	sayHello() {
// 		console.log("Hello")
// 	}
// }
//
// new Test().sayHello()
// console.log(MyTest)


// console.log(Object.getPrototypeOf(b) === a)
// Object.setPrototypeOf(b, {})
// console.log(Object.getPrototypeOf(b) === {})


//console.log(Object.getOwnPropertyDescriptor(b, 'name'))



const a = {
	name: 'a'
}

const b = Object.create(a, {
	name: {
		value: 'b',
	}
})

console.log(b.name)

Object.defineProperty(b, 'age', {
	value: 16,
	enumerable: true,
	configurable: true
})

console.log(Object.keys(b))
console.log(Object.values(b))

b.age = 23
console.log(b.age)

Object.defineProperty(b, 'age', {
    value: 35,
    enumerable: true,
    writable: true
})
