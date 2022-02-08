// const a = {}
// const b = {}
// const c = {
//    toString: () => 'c'
// }
// const d = [1, 2]
//
// a[b] = 'b'
// a[c] = 'c'
// a[d] = 'd'
//
// console.log(a)


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
//     this.getName = function () {
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



// const a = {};
// const b = {};
// const c = {}
// Object.setPrototypeOf(a, b)
//
//
// console.log(b.__proto__ === c.__proto__)
// console.log(a.__proto__ === b)



// const a = {
//     name: 'a',
//     getName: function () {
//         console.log(this.name)
//     }
// }
//
// Object.defineProperty(a, 'getName', {
//    value: function () {
//         console.log(this.name)
//     },
//    enumerable: false
// })
//
//
// const b = Object.assign({ name: 'b' }, a, { age: 12 }, { isMale: false })
//
// const c = Object.create(a, {
//     name: {
//         value: 'c',
//     }
// })
//
//
// b.getName()
// c.getName()
//
// console.log(c.__proto__ === a)




// let a = () => {
//    console.log('a')
// }
//
// const execute = (f) => {
//    setTimeout(f, 1000)
// }
//
// execute(a)
//
// a = () => {
//    console.log('b')
// }


// function Main() {}
// Main.prototype.protected = { protected: true }
//
// const obj = new Main();
//
// Main.prototype = { protected: false }
//
// const obj2 = new Main()
//
// console.log(obj.protected)
// console.log(obj2.protected)

//
// Promise
// 	.resolve(10)
// 	.then(res => console.log(res))
// 	.then(res => Promise.resolve(res))
// 	.then(console.log)
// 	.then(res => {
// 		if (!res) throw new Error('New error')
// 	})
// 	.then(res => console.log(res.message))
// 	.catch(res => console.log(res.message))




const a = {
   toString: () => 'a',
   go: function () {
       console.log(this.toString())
   },

   run: () => {
       console.log(this.toString())
   },

   stop: function () {

       //this

       (() => {
           console.log(this.toString())
       })()
   }
}

a.go() //a
a.run() //[object Object]
a.stop()
