// foo()
//
// function foo() {
//     bar()
//     {
//         function bar() {
//             console.log('bar')
//         }
//     }
// }
//



// let a = () => {
//    console.log('a')
// }

// const run = (cb) => {
//    setTimeout(cb, 1000)
// }              

// run(a)

// a = () => {
//    console.log('new a')
// }



// const a = {
// 	msg: 'Hello World',
// 	getMsg() {
// 		const msg = "Hello getMsg"
//		console.log(this.msg)
// 	}
// }
//
// a.getMsg()
//


//this.name = 'global'
//
// const a = {
//     name: 'a',
//	 logName: () => {
//         console.log(this.name)
//     }
// }
//
//
// setTimeout(a.logName, 100)



// const a = {
//     name: 'a',
//     getName () {
//         console.log(this.name)
//     }
// }
//
// const b = {
//     name: 'b'
// }
//
// const c = {
//     name: 'c'
// }
//
// a.getName()
//
// const foo = a.getName.bind(b)
//
// a.getName()
//
// a.getName.call(b)
//
// foo.call(c)




// const a = {
//     name: 'a'
// }

// const b = {
//     name: 'b',

//     hi() {
//         (() => {
//             console.log(this.name)
//         }).call(a)
//     }
// }

// const c = {
//     name: 'c'
// }

// b.hi.call(c)


// const a = Object.create(null, {})
// const b = {}
//
// b[a] = 'a'
// console.log(b)




// Object.prototype.name = 'Object'
//
// const a = {
//     getName() {
//         console.log(this.name)
//     }
// }
//
// const b = {
//     name: 'b'
// }
//
// a.getName()
//
// b.__proto__ = a;
//
// b.getName()
//
// const c = Object.create(a, {
//     name: {
//         value: 'c'
//     }
// })
//
// c.getName()




// const user = {
//     sleep() {
//         this.isSleeping = true
//     }
// }

// const john = {}

// john.__proto__ = user

// john.sleep()

// console.log(john.isSleeping)



//console.log(Object.__proto__ === Function.prototype)

// const arr = []
// console.log(arr.constructor === Array)

// const a = () => { }
// console.log(a.__proto__.__proto__.constructor === Object)


// arr.__proto__ = []
// console.log(arr.__proto__.__proto__ === Object.prototype)



//class BaseUser { }
//
//class User extends BaseUser {
//	constructor(name) {
//		this.name = name;
//	}
//
//	getName() {
//		return this.name
//	}
//}
//
//const user = new User('Alex')
//
//console.log(user.__proto__ === User.prototype)
//
//console.log(typeof User)
//console.log(User === User.prototype.constructor)
//console.log(User.__proto__ === Functin.prototype)



// class A {
//    getName() {
//        return this.name
//    }
// }
//
// const b = Object.create(A, { 
//    name: {
//        value: 'b'
//    }
// })
//
// console.log(b.getName())



//class Test {
//	constructor(name) {
//		this.name = name
//		if (!name) {
//			return { name: 'No test name!' }
//		}
//	}
//}
//
//
//const t = new Test()
//const t1 = new Test("Should retur undefined!")
//
//console.log(t.__proto__ === t1.__proto__)



//Promise
//	.resolve(10)
//	.then(res => console.log(res))
//	.then(res => Promise.resolve(res))
//	.then(console.log)
//	.then(res => {
//		if (!res) throw new Error('New error')
//	})
//	.then(res => console.log(res.message))
//	.catch(res => console.log(res.message))

