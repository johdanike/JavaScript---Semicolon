
class Calculator {
    constructor(numberOne, numberTwo) {

        this.numberOne = numberOne;
        this.numberTwo = numberTwo;
    };

    addNumber() {
        return this.numberOne + this.numberTwo;
    };

}
module.exports = Calculator;


// extends in js
class Animal{
    #name = 'John';
    #age = 45;
    constructor(name){
        this.name = name;
    }

    static getName() {
        return this.name
    }
}

let dog = new Animal('dog');
console.log(dog.name)


