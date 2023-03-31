function area(height, width){
    if(!height){
        console.log(width*width);
        return width*width;
    }  
    if(!width) {
        console.log(height*height);
        return height*height;
    }
    console.log(height*width);
    return height*width;
}

// argumnets can be used to extract the variable declared in the function.
// Just make sure you are not declaring the variable argumennts inside the function.
function hello(){
    console.log("Hello World!!", arguments[0] + arguments[1] );
}

hello("1", " 2");



// -----------------------------------------------------------------------
function createGreet(greeting){
    
    function greet(name){
        console.log(greeting, " ", name);
    }
    return greet;
}

function getname(){
    return document.getElementById("nameBox").value;
}

function gt(){
    return document.getElementById("greettype").value;
}

let g1 = createGreet("Good Morning!!");
let g2 = createGreet("Good Evening!!");
let g3 = createGreet(gt());

// console.log(g1("nn"));


// there are two ways either i am calling the function in the html file or i am calling the function i n the greet function
// This key always print the scope from which it is called.
