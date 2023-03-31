class person{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    isadult(){
        return this.age >= 18
    }
}


let p1 = new person("John Doe", 24)
let p2 = new person("Jane Doe", 12)

console.log(typeof person)
console.log(p1.__proto__ == person.prototype)
console.log(p1.__proto__.__proto__ == Object.prototype)
console.log(p1.isadult())
console.log(p2.isadult())


class student extends person{
    constructor(name, age, grade){
        super(name, age)
        this.grade = grade
    }
}

let s1 = student("Harry" , 14, 5)
let s2 = student("Hermoine" , 16, 6)

console.log(s1.__proto__ == student.prototype)
console.log(s1.__proto__.__proto__ == person.prototype)
console.log(s1.__proto__.__proto__.__proto__ == Object.prototype)


///Inheritance chain is Student -> Person -> Object
