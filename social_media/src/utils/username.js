const ADJECTIVES = [
    'boundless',
    'plausible',
    'sleepy',
    'electronic',
    'dangerous',
    'slim',
    'purple',
]

const OBJECTS = [
    'puddle',
    'piano',
    'window',
    'bowl',
    'socks',
    'chalk',
    'brocolli',
]


function genRandomUsername(){
    const adj = ADJECTIVES[Math.floor(Math.random()*7)]
    const obj = OBJECTS[Math.floor(Math.random()*7)];
    return adj+'-'+obj
}

module.exports = {
    genRandomUsername
}

// console.log(genRandomUsername());
// console.log(genRandomUsername());
// console.log(genRandomUsername());
// console.log(genRandomUsername());
// console.log(genRandomUsername());
// console.log(genRandomUsername());
// console.log(genRandomUsername());
// console.log(genRandomUsername());
// console.log(genRandomUsername());