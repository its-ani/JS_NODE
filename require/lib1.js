function sayhello(name){
    console.log("Hello!!", name)
}

console.log(module.export)
module.export = {sayhello}
console.log(module.export)