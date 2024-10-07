// constructor functions

function Person(name, gender) {
    this.name = name;
    this.gender = gender;

    this.greet = ()=>{
        return `${this.name} says hello`
    }

    this.setName = (name) => {
        this.name = name;

}

let personOne = new Person('John', "Male");
console.log(personOne.name);

let personTwo = new Person('Amara', "female");
personTwo.setName("John");
console.log(personTwo.name);

let Human ={
    name : "",
    age : 22
}

let humanOne= Object.create(Human);
console.log(humanOne);
console.log(humanOne.name);

)

module.exports = Person;