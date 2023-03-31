let btnWait = document.getElementById('btnWait')
let btnCount = document.getElementById('btnCount')
let divStatus = document.getElementById('divStatus')
let divVal = document.getElementById('divVal')

let count = 0

btnCount.onclick = function(){
    count++
    console.log(count)
    divVal.textContent = count
}
 
//Previous
btnWait.onclick = function(){
    divStatus.textContent = "WAIT"
    console.log("WAIT")
    let start = Date.now()
    while(Date.now() <start+5000){  }
    console.log("DONE")
    divStatus.textContent = "DONE"
}

// Correct working
btnWait.onclick = function(){
    setTimeout(() => {
        console.log("DONE")
        divStatus.textContent = "DONE"
    }, 5000);
    divStatus.textContent = "WAITING FOR 5 Seconds"
    console.log("WAITING FOR 5 SECONDS");
}