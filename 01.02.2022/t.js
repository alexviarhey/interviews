
//const nums = [1, 2, 3, 4];
//const names = ['Hanna', 'Alex'];
//
//console.log(
//    nums.myMap(n => n + 1 ) //[2, 3, 4, 5]
//)
//
//console.log(
//    names.myMap((n, i) => ({ name: n, index: i })) //[ { name; 'Hanna', index: 0 }, { name: 'Alex', index: 1 } ]
//)





//const nums = [1, 2, 3, 4];
//const names = ['Hanna', 'Alex']
//
//
//console.log(
//    nums.myFilter(n => n % 2 === 0) //[2, 4]
//)
//
//console.log(
//    names.myFilter(n => n.indexOf('e') >= 0) //['Alex']
//)




//const readFile = (path, cb) => {
//    if (path !== '/test.txt') {
//        cb('File not found!')
//    } else {
//        cb(null, { group: 'KMB-1', name: 'Alex' })
//    }
//}
//
//readFile("/test.txt", (err, data) => {
//    if (err) throw new Error(err)
//    console.log(data)
//})
//
//
//const promisify = () => {
//}
//
//const readFileWithPromise = promisify(readFile)
//
//readFileWithPromise('/test.txt')
//    .then(data => console.log(data)) //{ group: 'KMB-1', name: 'Alex' }
//    .catch(e => console.log(`Error: ${e}`))
//
//
//readFileWithPromise('/invalid')
//    .then(data => console.log(data))
//    .catch(e => console.log(`Error: ${e}`)) //Error: File not found!


