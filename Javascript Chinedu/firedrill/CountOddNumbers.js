function countOddNumbers(numberArray){
	let counter = 0;

	for(let index of numberArray){
		if(index % 2 != 0){
			counter++;
		}
	}
		return counter;
}

let valueIn = countOddNumbers([2,4,1,78,45,34,90,4,6,2,8])
console.log(valueIn);

module.exports = {countOddNumbers};
