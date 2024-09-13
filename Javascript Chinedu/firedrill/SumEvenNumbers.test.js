const {sumEvenNums} = require("./SumEvenNumbers.js");
let numberArray = [2,4,1,78,45,34,90,4,6,2,8];

test("Sum even numbers in array", ()=>{
	let result = sumEvenNums(numberArray);
	let expected = 228;
	expect(result).toEqual(expected);
})