function sumEvenNums(numberArray){
	let sumEven = 0;
	for(let number of numberArray){
		if(number % 2 == 0){
			//evenArray.push(number);
			sumEven += number
		}
	}
		//return "Sum of even numbers in the array = "+sumEven;
		return sumEven;
}

let valueIn = sumEvenNums([2,4,1,78,45,34,90,4,6,2,8]);
console.log(valueIn);

module.exports = {sumEvenNums};