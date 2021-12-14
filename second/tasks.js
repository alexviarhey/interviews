 // let a = () => {
 // 	console.log('a')
 // }
 //
 // const execute = (f) => {
 //
 // 	setTimeout(f, 1000)
 // }
 //
 // execute(a)
 //
 // a = () => {
 // 	console.log('b')
 // }



 // Елена Пелецкая -  a
 // Анастия Верич - a
 // Паша Мельничук - b
 // Радион Бланарь - b
 // Петр Бойко - b
 // Валерьян Эрит - a
 // Никита Грудковский - b



// function Main() {}
// Main.prototype.protected = { protected: true }
//
// const obj = new Main();
//
// Main.prototype = { protected: false }
//
// console.log(obj.protected)


 // Елена Пелецкая - false
 // Анастия Верич - true
 // Паша Мельничук - false
 // Радион Бланарь - false
 // Петр Бойко - true
 // Валерьян Эрит - false
 // Никита Грудковский - false

 // function Test(name) {
 //
 // }
 //
 // const a = new Test("Test")
 // const b = Test()
 //
 // console.log(a.name)
 // console.log(b)

 // Елена Пелецкая - 53 -> function 54 -> undefined
 // Анастия Верич - 53 -> undefined 54 -> function
 // Паша Мельничук - 53 -> function 54 -> undefined
 // Радион Бланарь - 53 -> function 54 -> undefined
 // Петр Бойко - 53 -> function 54 -> undefined
 // Валерьян Эрит - 53 -> {} 54 -> undefined
 // Никита Грудковский - 53 -> Test {} 54 -> undefined


// const a = {}
// const b = {} // Object.toString() -> '[object Object]'
// const c = {
// 	toString () {
// 		return 'c'
// 	}
// }
//
// a[b] = "b" // {'[object Object]': 'b'}
// a[c] = "c" //{'[object Object]': 'b', 'c': 'c'}
//
// console.log(a.b)
// console.log(a.c)
// console.log(a)


 // Елена Пелецкая - 1 -> undefined; 2 -> undefined; 3 -> { b: 'b', c: 'c' }
 // Анастия Верич - 1 -> undefined; 2 -> undefined; 3 -> { '[object Object]': 'c' }
 // Паша Мельничук - ----
 // Радион Бланарь - 1 -> undefined; 2 -> undefined; 3 -> {}
 // Петр Бойко -
 // Валерьян Эрит - 1 -> undefined; 2 -> undefined; 3 -> { '{}': 'b', {toString: () {}}: 'c' }
 // Никита Грудковский -


//console.log([] + [1] + {} + {}) //'1[object Object][object Object]'

// Object.prototype.toString = () => { return 'hello' }
//
// console.log([] + [1] + {} + {}) //'1hellohello'
//
// console.log(!!'false' == !!'true') //true
//
// console.log(['x'] == 'x') //['x'] -> 'x' -> true


 // Елена Пелецкая -
 // Анастия Верич -
 // Паша Мельничук -
 // Радион Бланарь -
 // Петр Бойко - 98 -> false
 // Валерьян Эрит -
 // Никита Грудковский -


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


 // Елена Пелецкая - 10, New error
 // Анастия Верич - 10, undefined, something...
 // Паша Мельничук - 10, 10
 // Радион Бланарь - 10, New error
 // Петр Бойко - 98 -> false
 // Валерьян Эрит - 10, New error
 // Никита Грудковский - 10, undefined, New error

// Number.prototype.sayHi = function() {console.log("Hi")}
// const a = 5;
// a.sayHi();

 // Елена Пелецкая - Hi
 // Анастия Верич - Hi
 // Паша Мельничук - Hi
 // Радион Бланарь - Hi
 // Петр Бойко - Hi
 // Валерьян Эрит - Hi
 // Никита Грудковский - Hi

//
// const a = {name: 'a'}
// const b = Object.create(a)
//
// b.age = 12;
//
// console.log(Object.keys(b))
//
// const res = []
// const res2 = [];
//
// for(let k in b) {
// 	res.push(k)
// }
//
// for(let k in b) {
// 	if(b.hasOwnProperty(k)) res2.push(k)
// }
//
// console.log(res)
// console.log(res2)



 // Елена Пелецкая - 1 -> ['age', 'name']  ['age', 'name']  ['age', 'name']
 // Анастия Верич - ['age', 'name']  ['age', 'name']  ['age', 'name']
 // Паша Мельничук - ['age', 'name']  undefined undef
 // Радион Бланарь -
 // Петр Бойко -
 // Валерьян Эрит - ['age', 'name']  ['age', 'name']  ['age', 'name']
 // Никита Грудковский -



 
