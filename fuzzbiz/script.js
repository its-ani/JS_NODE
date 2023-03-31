let inpNum = document.getElementById('inpNum')
let btnPrint = document.getElementById('btnPrint')
let ulNumlist = document.getElementById('ulNumlist')

btnPrint.onclick = function () {

    let start = Date.now()
    ulNumlist.innerHTML = ''

    let c3 = 0
    let c5 = 0;
    for (let i = 1; i <= inpNum.value; i++) {
        let li = document.createElement('li')
        c3++
        c5++

        let print = ""
        if (c3 == 3) { c3 = 0; print += "fizz" } 
        if (c5 == 5) { c5 = 0; print += "buzz" }
        if (print === '') print = i

        li.textContent = print
        
        
        ulNumlist.appendChild(li)
    }

    console.log('time taken', Date.now() - start)

}

/**
 * Complexity of 
 * a + b 
 * if N = max num of bits in a and b 
 * 
 * +    = O(N)
 * -    = O(N)
 * *    = O(N^2)
 * /    = O(N^2)
 * %    = O(N^2)
 * 
 * 
 * 3 + 4 
 * 3 * 4 
 * 9387693869 + 245764958
 * 
 * 
 * x % 5 == 0 && x % 3 == 0
 * x % 15 == 0 
 * 
 */

// ---------------------------------------------------------------------------------------------------

// let inputNum = document.getElementById("inputNum").value-'0'
// let buttonPrint = document.getElementById("buttonPrint")
// let ulNumlist = document.getElementById("ulNumlist")

// let word = function(i){
//     if(i%5==0 && i%3==0){
//         return "fizz buzz"
//     }
//     else if(i%3==0){
//         return "fizz"
//     }
//     else if(i%5==0){
//         return "buzz"
//     }
//     else{
//         return ''+i+''
//     }
// }


// buttonPrint.onclick = function(){

//     let start = Date.now();
//     let i = 0
//     for(let i = 1; i<= inputNum; i++) {
//         let li = document.createElement("li")
//         // let v = word(i);
//         li.textContent(word(i))
//         ulNumlist.appendChild(li)
//     } 
 
//     console.log("Time Taken is :  ", Date.now() - start)
// }   

// console.log(typeof word(15)); 