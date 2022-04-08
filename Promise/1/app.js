// const prms = new Promise((resolve, reject) => {

//     console.log("setTimeout started")

//     setTimeout(() => {
//         console.log("setTimeout ended")
//         resolve({ status: "OK" })
//     }, 2000);
// })

// //Всё то, что мы передавали в ф-ию resolve - возвращается в then() ниже
// prms.then(data => console.log(data))

//------------------------------------------------------------------------

// const prms = new Promise((resolve, reject) => {

//     console.log("setTimeout started")

//     setTimeout(() => {
//         console.log("setTimeout ended")
//         reject({ status: "NOT OK" })
//     }, 2000)
// })

// //Всё то, что мы передавали в ф-ию resolve - возвращается в then() ниже
// prms
//     .then(data => {
//         return new Promise(() => { })
//     })
//     .then()
//     .catch(error => console.log(error))
//     .finally(() => console.log("Finally"))

//------------------------------------------------------------------------

const delay = ms => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

delay(2000).then(() => console.log("After 2000 sec"))
delay(4000).then(() => console.log("After 4000 sec"))

Promise.all([delay(2000), delay(5000)]).then(() => console.log("all() After 5000 ms function done"))
Promise.race([delay(2000), delay(5000)]).then(() => console.log("race() After 2000 ms function done"))
