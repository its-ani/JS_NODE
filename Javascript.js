console.log("Hellooo!!!");

console.log(__dirname);
console.log(__filename);

//  Declaration of array.

// var myarray = new Array();
// myarray[0] = "Pizza";
// myarray[1] = "Pasta";
 
// Declaring object
// var mycar = new Object();

// Javascript object
// mycar.maxSpeed = 50;
// mycar.driverName = "Yash";
// mycar.info = "DL 01 0000";
// mycar.intro = function(){
//     console.log("Driver name is Yash. Vehicle max speed is 50. Vehicle number is DL 01 0000");
// };

// mycar.intro();

// ------------------------------------------------------------------------------------------

// var car = {
//     maxSpeed : 50,
//     driverName : "Yash",
//     info : "DL 01 0000",
//     intro : function(){
//         console.log("Driver name is Yash. Vehicle max speed is 50. Vehicle number is DL 01 0000");
//     }
// }

// var car2 = {
//     maxSpeed : 80,
//     driverName : "Anirudh",
//     info : "DL 01 0001",
//     intro : function(){
//         console.log("Driver name is Yash. Vehicle max speed is 50. Vehicle number is DL 01 0000");
//     }
// }

// var car3 = {
//     maxSpeed : 80,
//     driverName : "Anirudh",
//     info : "DL 01 0001",
//     intro : function(){
//         console.log("Driver name is Yash. Vehicle max speed is 50. Vehicle number is DL 01 0000");
//     }
// }

// ----------------------------------------------------------------------------------------

// Constructor - Always name should start with capital letter - Convention
// Constructor function
var Car = function(maxSpeed, driverName, info){
    this.maxSpeed = maxSpeed;
    this.driverName = driverName;
    this.info = info;   
    this.intro = function(){
        console.log("Driver name is : " +this.driverName + ", Vehicle max speed is : " + this.maxSpeed + ", Vehicle number is : " + this.info);
    };    
}

var car1 = new Car(40, "Sam", "DL 01 0000");
var car2 = new Car(50, "John", "DL 02 0000");
var car3 = new Car(60, "Siri", "DL 03 0000");
var car4 = new Car(70, "Alex", "DL 04 0000");

console.log(car1.intro());
console.log(car2.intro());




