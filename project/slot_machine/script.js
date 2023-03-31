let value1 = document.getElementById('value1');    
let value2 = document.getElementById('value2');    
let value3 = document.getElementById('value3');    
let inpSpeed = document.getElementById('inpSpeed');


let values = ['🤐','😏','😬','🥲', '🤣', '😂']

function getrandomvalue(){
    // console.log(values[Math.floor(Math.random()*6)]);
    return values[Math.floor(Math.random()*6)];
}

let animationId;
function updateAnimation(newSpeed){
    if(animationId) clearInterval(animationId); 
    // if any animation is running it will make it 0
    animationId = setInterval(() => {
        value1.innerText = getrandomvalue();
        value2.innerText = getrandomvalue();
        value3.innerText = getrandomvalue();

        // value1.innerText = '😬'
        // value2.innerText = '😬'
        // value3.innerText = '😬'

        console.log(value1.innerText);

        if((value1.innerText == value2.innerText) && (value1.innerText == value3.innerText) && (value3.innerText == value2.innerText)){
            alert("You have won the game");
            document.documentElement.style.setProperty('--y1', 0);
            document.documentElement.style.setProperty('--y2', 0);
        }
    }, 1000/newSpeed)
}

startButton.onclick = function(){
    // inpSpeed.onchange();
    // updateAnimation(inpSpeed);
}

inpSpeed.onchange = function(ev){ //ev is event
    // console.log("Value changed ", ev.target.value);
    // document.documentElement is root of css

    document.documentElement.style.setProperty('--speed', ev.target.value);
    
}




