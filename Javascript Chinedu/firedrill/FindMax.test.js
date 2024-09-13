const {findMax} = require("./FindMax.js");
let numberArray = [2,4,1,78,45,34,90,4,6,2,8];

test("Sum even numbers in array", ()=>{
	let result = findMax(numberArray);
	let expected = 90;
	expect(result).toEqual(expected);
})