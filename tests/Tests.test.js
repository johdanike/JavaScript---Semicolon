const {sumEvenNums} = require("../Javascript Chinedu/firedrill/SumEvenNumbers.js");
const {findMax} = require("../Javascript Chinedu/firedrill/FindMax.js");
const {countOddNumbers} = require("../Javascript Chinedu/firedrill/CountOddNumbers.js");
const {isPrime } = require("../Javascript Chinedu/firedrill/IsPrime.js");
const {duplicate} = require("../Javascript Chinedu/firedrill/FindFirstDuplicate.js");
const {reverseArray} = require("../Javascript Chinedu/firedrill/ReverseArray.js");
const {factorial} = require("../Javascript Chinedu/firedrill/Factorial.js");
const {isPalindrome} = require("../Javascript Chinedu/firedrill/IsPalindrome.js");
const {sumMultiplesOfThreeAndFive} = require("../Javascript Chinedu/firedrill/SumMultiplesOfThreeAndFive.js");
const {isLeapYear} = require("../Javascript Chinedu/firedrill/IsLeapYear");
const {solve, sumArray} = require("../Javascript Chinedu/firedrill/PairSummation.js");
const {evenNumbers, getFruitLength, multiplyByTwo, getNames} = require("../Javascript Chinedu/firedrill/SpliceExample")


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

test("SumMultplesOfThreeAndFive", ()=>{
	let result = sumMultplesOfThreeAndFive(50);
	let expected = 15;
	expect(result).toEqual(expected);
})

test("isLeapYear?", ()=>{
	let result = isLeapYear(2024);
	let expected = true;
	expect(result).toBe(expected);
})

test("Pair summation of array", ()=>{
	let result = solve([2,3,4,5,6,7]);
	let expected = [5,9,13];
	expect(result).toStrictEqual(expected);
})

test("pair sum using another function", ()=>{
	let result = sumArray([2,3,4,5,6,7]);
	let expected = [5,9,13];
	expect(result).toStrictEqual(expected);
})

test("test for even numbers", ()=>{
	let arr = [3,4,5,6,7,8];
	let result = evenNumbers(arr);
	let expected = [4,6,8];
	expect(result).toEqual(expected);
})

test("fruits for fruits of length greater than five", ()=>{
	let fruits = ["banana", "orange", "pear"];
	let result = getFruitLength(fruits);
	let expected = ["banana", "orange"];
	expect(result).toEqual(expected);
})

test("map through array of numbers and multiply by two", ()=>{
	let arr = [3,4,5,6,7,8];
	let result = multiplyByTwo(arr);
	let expected = [6,8,10,12,14,16];
	expect(result).toEqual(expected);

})

test("map through an array of objects", ()=>{
	let arr = [{name: "John", age: "25"}, {name: "Jane", age: "24"}];
	let result = getNames(arr);
	let expected = ["John", "Jane"];
	expect(result).toEqual(expected);
})