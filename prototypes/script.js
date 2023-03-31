let str = "abc"
let num = 123
let bool = true
let arr = [1,2,3,4,5]
let obj = {a:10, b: 'xyz'}
let fun = function(){
    console.log("Hello!!!")
}

// if x and y are not primitive
// x == y : true -> what does this means:
// this means they are reference to the same object in  memory 


console.log("type of string", typeof String);
console.log("type of object", typeof Object);
console.log("type of Number", typeof Number);
console.log("type of Boolean", typeof Boolean);
console.log("type of Arrayg", typeof Array);
console.log("type of Object", typeof Object);
console.log("type of Function", typeof Function);


console.log("--------------------PROTOTYPES ------------------")
console.log(str.__proto__ == String.prototype)
console.log(arr.__proto__ == Array.prototype)
// similarly for others


console.log("-----------------PROTO CHAINS -------------------")
console.log(str.__proto__.__proto__ == Object.prototype)
console.log(arr.__proto__.__proto__ == Object.prototype)
console.log(str.__proto__.__proto__ == obj.__proto__)
console.log(arr.__proto__.__proto__ == obj.__proto__)



// Everything is indirectly inherited from the Same thing 
// that obj is inherited from 
// Javascript everything is essentially an Object



