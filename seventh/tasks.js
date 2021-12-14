// console.log(2 * "10")
// console.log("1" + true)
// console.log([2, 3] + { toString() { return "4" } })


// const foo = () => {
//
//     console.log(a)
//     console.log(bar())
//
//     function bar() {
//         return 2
//     }
//
//     let a = 2;
// }
//
// foo()


// for (var i = 0; i < 10; i++) {
//    (function (j) {
//         setTimeout(() => console.log(j), 10)
//     })(i)
// }


// const users = {
//     names: []
// }
//
// const getUsersCopy = () => {
//     return { ...users }
// }
//
//
// const admins = getUsersCopy()
// const generalUsers = getUsersCopy()
//
//
// admins.names.push("Admin1")
// generalUsers.names.push("User1")
//
// console.log(admins)



// const a = {};
// const b = {};
// console.log(Object.getPrototypeOf(a) === Object.getPrototypeOf(b))



// const a = 5;
// const b = 4;
//
// b.sayHi()//-> "Hello world"
// a.sayHi();// -> "Hello world"




const containerComponent = {
    state: {
        name: 'Alex'
    },
    onClickHandler(prefix) {
        console.log(`${prefix} ${this.state.name}!`)
    }
}

const component = {
    props: {
        onClick: containerComponent.onClickHandler
        ,
        render() {
            this.div = {
                onClick: this.props.onClick,
                state: {
                    name: "div"
                }
            }
        },
        emitClickEvent(value) {
            this.div.onClick(value)
        }
    }
}

component.render()
component.emitClickEvent("Hello")





