//console.log("true" + undefined)
//console.log("true" + null)
//console.log("true" + false)
//console.log("2" - true)
//console.log("2a" - false)


//const arr = []
//for(let i = 0; i < 10; i++) {
//    console.log(arr[i])
//}



//const a = Object.create(null, {})
//const b = {}
//
//b[a] = 'a'
//console.log(b)
//



//const a = {
//    name: 'Alex',
//    age: 18
//}
//
//const b = Object.create(a)
//b.isDev = true
//
//for(let key in b) {
//    console.log(key)
//}
//
//Object
//    .keys(b)
//    .forEach(k => { console.log(k) })
//



//let a = () => {
//    console.log('a')
//}
//
//const run = (cb) => {
//    setTimeout(cb, 1000)
//}
//
//run(a)
//
//a = () => {
//    console.log('new a')
//}


//'use strict';
//
//function User(name) {
//    this.name = name
//    this.showName = function() {
//        console.log(this.name)
//    }
//}
//
//const { showName }= new User("Alex")
//showName()



//class User {
//    constructor(name) {
//        this.name = name;
//    }
//
//    getName() {
//        return this.name
//    }
//}
//
//console.log(typeof User)
//console.log(User === User.prototype.constructor)
//console.log(
//    Object.getOwnPropertyNames(User.prototype)
//)


//const creater = (name) => {
//    return new (class User {
//        constructor(name) {
//            this.name = name
//        }
//    })(name)
//}
//
//const a = creater("Alex")
//console.log(a)




//class A {
//    getName() {
//        return this.name
//    }
//}
//
//const b = Object.create(A.prototype, { 
//    name: {
//        value: 'b'
//    }
// })
//
//console.log(b.getName())