const lib = require('./lib.js')

console.log("Hello!!")

if(typeof window !== 'undefined'){
    console.log('Opened in browser')
}
else{
    console.log('Opened in Nodejs')
}

console.log(lib)
lib.greet()
lib.hey()

setTimeout(() => {
    console.log(lib)
}, 2000);