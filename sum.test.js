const {add, subtract, evenNumbers} = require("./sum.js");
let numberOne = 2;
let numberTwo = 29;

test("Add two numbers", ()=>{
	let result = add(numberOne, numberTwo);
	expect(result).toBe(31);
});

test("subtract two numbers", ()=>{
	let result = subtract(numberTwo, numberOne);
	let expected = 27;
	expect(result).toBe(expected);
})


test("Return Even numbers", ()=>{
	let arrayOfNumbers = [1, 2, 3, 4, 5, 6];
	let result = evenNumbers(arrayOfNumbers);
	let expected = [2, 4, 6];
	expect(result).toEqual(expected);
})