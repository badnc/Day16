class Pets extends Dog {
    constructor(name, legs){

    }
    walk() {
        var numberOfLegs;
    }
}
let dog = new Dog(name, legs);
console.log(dog.walk());
console.log(dog.bark());

module.exports = {
    Pets,
    Dog
}