// var model = require('./hello.js'); 

// console.log(model.sum(5,6));

// char = "AAbc++"
// temp = ""
// ans = ""

// for(i of char){
//     let ret = isLowerCase(i);
//     if(ret == 'Capital letter'){
//         temp = i.toLowerCase()
//     }
//     else if(ret == "Small letter"){
//         temp = i.toUpperCase()
//     }
//     else{
//         temp += i
//     }
//     ans += temp;
//     temp = ""
//     console.log(i+ " " + ret)
// }

// function isLowerCase(char){
//     const code = char.charCodeAt(0);
//     if (code >= 65 && code <= 90) {
//         return "Capital letter";
//     } else if (code >= 97 && code <= 122) {
//         return "Small letter";
//     } else {
//         return "Not a letter";
//     }
// }

// console.log(ans)
// let data = code
// for(let v of data){
//     if(!isNaN(v*1)){
//         val += temp;
//     }
//     if(isLowerCase(v)){
//         temp = v-22
//         val += temp;
//     }else{
//         temp = v+22
//         val += temp;
//     }
//     console.log(v)
// }

req = "B is bad"
console.log(req);

for(let q in req){
    console.log(req[q]);
}