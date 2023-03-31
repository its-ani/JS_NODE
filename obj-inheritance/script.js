let obj1 = {
    a:1,
    b:2,
    c:3
}


let obj2 = Object.create(obj1);

console.log(obj2);
console.log(obj2.__proto__);

obj2.p = 5,
obj.q = 6,
obj.r = 7;

let obj3 = Object.create(obj2);

// obj3.__proto__ === obj2;
// obj3.__proto__.__proto__ === obj1;



/* ONLY FOR READING WIll not WORK FOR WRITING

obj2 will try to find the a in the
    - if not found 
        then it will try to find it in the obj2.__proto__
            - if not found then
                -it will try to find it in the obj2.__proto__.__proto__
                    ----and so on 
                    
            till the Proto reaches null 
            */
