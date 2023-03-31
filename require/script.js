const lib1 = require('./lib1.js')
console.log("hello world!!")

if(typeof window === 'undefined'){
    console.log("Open in Node.")
}
else{
    console.log("Open in Browser.")
}

console.log(lib1)
lib1.sayhello("RAM")
// sayhello("RAM")



// Thins doesnt exist in browser
// global 
// module  
// process 

// Things that doesnt exist in window
// document 
// window


// outermost scope is global in Node
// outermost scope is window in window

// in browser there is nooo need of import or export
// hr js file ko module bolte hai