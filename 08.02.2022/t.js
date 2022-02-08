// console.log("6" / "2")
// console.log("6" * "2")
// console.log("6" + "2")
// console.log("6" + 2)
// console.log("6" - "2")
// console.log("2" + true)
// console.log(null == undefined)
// console.log(null === null)
// console.log(undefined === undefined)


//const a = {}
//const b = {}
//
//a[b] = "b"
//
//console.log(a)


//(() => {
//    let a = b = 42
//})()
//
//console.log(typeof a === 'undefined')
//console.log(typeof b === 'undefined')



//const a = {
//    name: 'a',
//    logName() {
//         console.log(this.name)
//    }
//}
//
//setTimeout(a.logName, 100)



//const a = {
//    name: 'a',
//    age: 23,
//
//    getName: () => {
//        return this.name
//    },
//    getAge: function() {
//        const age = 24;
//        return this.age
//    }
//}
//
//console.log(a.getName())
//console.log(a.getAge())


//Object.prototype.getName = function() {
    //return this.name
//}

//const a = { name: 'a' }
//const b = { name: 'b' }
//const c = { name: 'c' }

//console.log(
    //a.getName
    //.bind(b)
    //.bind(c)()
//)

//console.log(
    //a.getName
    //.bind(c)
    //.call(b)
//)


//function User(name) {
//    this.name = name
//    return "User"
//}

//class Car {
//    constructor(engine) {
//        this.engine = engine
//        return {}
//    }
//}
//
//const user = new User("Alex")
//const user2 = User("Hanne")
//const car = new Car("v8")
//
//console.log(user.name)
//console.log(user2.name)
//console.log(car.engine)


//const watchBalanceWithLog = function(cb) {
//}
//
//const wallet = {
//    money: 100,
//    currency: 'USD',
//    watchBalance() {
//        console.log(`${this.money} ${this.currency}`)
//    }
//}

//wallet.watchBalance = watchBalanceWithLog(wallet.watchBalance)
//
//wallet.watchBalance() //-> 100USD /n Balance was watched 1 times
//wallet.watchBalance() //-> 100USD /n Balance was watched 2 times
//wallet.watchBalance() //-> 100USD /n Balance was watched 3 times

