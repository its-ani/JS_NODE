function greet(){
    console.log("Hello!!")
}

function hey(){
    console.log("Heyy!!")
}

console.log(module.exports)
// module.exports = {greet}
module.exports = {greet, hey}
console.log(module.exports)

setTimeout(() => {
    module.exports.omg = 'wow'
}, 1000);