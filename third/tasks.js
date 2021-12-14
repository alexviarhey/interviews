// const a = {
// 	msg: 'Hello World',
// 	getMsg() {
// 		const msg = "Hello getMsg"
// 		return this.msg
// 	}
// }
//
// console.log(a.getMsg())

//Ромам Догода 'Hello World'
//Егор Мишин 'Hello World'
//Вова Никитин 'Hello World'
//Елена Пелецкая 'Hello World'
//Олег Злотников 'Hello World'
//Олег Корсаков 'Hello World'
//Дима Карпов 'Hello World'
//Андрей Маконда 'Hello World'
//Денис Татаринов 'Hello World'



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


//Ромам Догода John undefined undefined
//Егор Мишин John John John
//Вова Никитин John John John(dont understand)
//Елена Пелецкая John ?? John
//Олег Злотников John John ??
//Олег Корсаков
//Дима Карпов
//Андрей Маконда Jhon 3x
//Денис Татаринов John John John


// const object = {
// 	message: 'Hello, World!',
// 	logMessage() {
// 		console.log(this.message);
// 	}
// };
//
// setTimeout(object.logMessage, 1000);


//Ромам Догода undefined
//Егор Мишин undefined
//Вова Никитин undefined
//Елена Пелецкая undefined
//Олег Злотников undefined
//Олег Корсаков Hello, World!
//Дима Карпов undefined
//Андрей Маконда Hello, World!
//Денис Татаринов undefined



// const object = {
// 	who: 'World',
// 	greet() {
// 		return `Hello, ${this.who}!`;
// 	},
// 	farewell: () => {
// 		console.log(this)
// 		return `Goodbye, ${this.who}!`;
// 	}
// };
//
// console.log(object.greet());
// console.log(object.farewell());


//Ромам Догода Hello World Goodbye World
//Егор Мишин
//Вова Никитин
//Елена Пелецкая Hello World Goodbye undefined
//Олег Злотников Hello World Goodbye World
//Олег Корсаков Hello World Goodbye World
//Дима Карпов Hello World Goodbye World
//Андрей Маконда Hello World Goodbye World
//Денис Татаринов Hello World Goodbye World


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


//Ромам Догода function
//Егор Мишин
//Вова Никитин
//Елена Пелецкая function
//Олег Злотников function
//Олег Корсаков
//Дима Карпов function
//Андрей Маконда function
//Денис Татаринов function


// const Test = class MyTest {
//
// 	sayHello() {
// 		console.log("Hello")
// 	}
// }
//
// new Test().sayHello()
// console.log(MyTest)


//Ромам Догода { value: 'b' }
//Егор Мишин { value: 'b' }
//Вова Никитин { value: 'b' }
//Елена Пелецкая { value: 'b' }
//Олег Злотников { value: 'b' }
//Олег Корсаков { value: 'b' }
//Дима Карпов undefined
//Андрей Маконда  { value: 'b' }
//Денис Татаринов '[object Object]'

// console.log(Object.getPrototypeOf(b) === a)
// Object.setPrototypeOf(b, {})
// console.log(Object.getPrototypeOf(b) === {})


//console.log(Object.getOwnPropertyDescriptor(b, 'name'))


//Ромам Догода ['name', 'age'] ['b', 16],
//Егор Мишин { value: 'b' }
//Вова Никитин ['name'] [16]
//Елена Пелецкая ['name', 'age'] ['b', 16]
//Олег Злотников ['name', 'age'] ['b', 16]
//Олег Корсаков ['age'] [16]
//Дима Карпов ['age'] ['b', 16]
//Андрей Маконда ['name', 'age'] ['b', 16]
//Денис Татаринов ['age'] [16]

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

//Ромам Догода ['name', 'age'] ['b', 16],
//Егор Мишин { value: 'b' }
//Вова Никитин ['name'] [16]
//Елена Пелецкая ['name', 'age'] ['b', 16]
//Олег Злотников ['name', 'age'] ['b', 16]
//Олег Корсаков ['age'] [16]
//Дима Карпов ['age'] ['b', 16]
//Андрей Маконда ['name', 'age'] ['b', 16]
//Денис Татаринов ['age'] [16]
