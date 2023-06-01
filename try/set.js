function createPrmise(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res('ok!')
        }, 3000)
    })
}
let promise = createPrmise();

promise
.then( data => console.log(data))
console.log(promise)