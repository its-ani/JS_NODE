function doSomething(done){
    console.log('1. Doing Something')
    done()
    
}



doSomething(() => {
    console.log('2. it was done')
})

fun = (() => {
    console.log("GAME")
})

console.log('3. end')
fun()