console.log("Hellooo!!!");

console.log(__dirname);
console.log(__filename);

var time = 2;

var timer = setInterval(function(){
    time += 2;
    console.log(time + " seconds have passed.");

    if(time > 5){
        clearInterval(timer);
    }

}, 2000);

var sum = function(a,b){
    console.log(a+b);
};

module.exports.sum = sum();