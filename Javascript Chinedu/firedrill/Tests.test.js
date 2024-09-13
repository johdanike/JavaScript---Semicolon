const {sumEvenNums} = require("./SumEvenNumbers.js");
const {findMax} = require("./FindMax.js");
const {countOddNumbers} = require("./CountOddNumbers.js");
const {isPrime } = require("./IsPrime.js");
const {duplicate} = require("./FindFirstDuplicate.js");
const {reverseArray} = require("./ReverseArray.js");
const {factorial} = require("./Factorial.js");
const {isPalindrome} = require("./IsPalindrome.js");


let numberArray = [2,4,1,78,45,34,90,4,6,2,8];

test("Sum even numbers in array", ()=>{
	let result = sumEvenNums(numberArray);
	let expected = 228;
	expect(result).toEqual(expected);
})

test("Find Maximum number in an array", ()=>{
	let result = findMax(numberArray);
	let expected = 90;
	expect(result).toEqual(expected);
})

test("Count Odd Numbers", ()=>{
	let result = countOddNumbers(numberArray);
	let expected = 2;
	expect(result).toEqual(expected);
})

test("Is Number Prime?", ()=>{
	let result = isPrime(20);
	let expected = false;
	expect(result).toStrictEqual(expected);
})

test("Find first duplicate", ()=>{
	let result = duplicate(numberArray);
	let expected = 2;
	expect(result).toEqual(expected);
})

test("Reverse Array", ()=>{
	let result = reverseArray([2, 5, 7, 4, 9, 45, 10]);
	let expected = [10, 45, 9, 4, 7, 5, 2];
	expect(result).toEqual(expected);
})

test("Factorial Calculator", ()=>{
	let result = factorial(5);
	let expected = 120
	expect(result).toEqual(expected);
		
})

test("IsPalindrome?", ()=>{
	let result = isPalindrome("racecar");
	let expected = true;
	expect(result).toBe(expected);
})