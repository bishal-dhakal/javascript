async function Prom() {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hello')
        }, 1000)
    })

    let q = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('world')
        }, 5000)
    })

    p.then();
}

Prom();

// async function add (){
//     return 5;
// }

// add().then( (x) => {
//     console.log(x)
// })