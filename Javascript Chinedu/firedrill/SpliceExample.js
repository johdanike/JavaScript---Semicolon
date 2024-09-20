const {add} = require("../../sum");
let arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10];
let arr = [7,4,5,9];
let answer = arrayOfNumbers.splice(1,2, 89, 56);

arr.forEach((item) => {
    let answer = item *  2;
    // console.log(answer);
})

console.log(answer);
console.log(arrayOfNumbers);


// let arr2 = [3,4,5,6,7,8];
let fruits = ["banana", "orange", "pear"];
// fruits.filter()

function evenNumbers(arr){
    return arr.filter((number)=> {
        return number % 2 === 0;
    })
}

function getFruitLength(array){
    let answer = array.filter((fruit)=> fruit.length > 5);
    return answer;
}

function multiplyByTwo(arr){
    let result = arr.map((number)=> number * 2);
    return result;
}

let getNames = (arr) => {
    return arr.map((obj)=> obj.name);
}

module.exports = {evenNumbers, getFruitLength, multiplyByTwo, getNames};
