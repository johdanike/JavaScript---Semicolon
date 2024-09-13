function findMax(numberArray){
	let max = numberArray[0];
	for(let num of numberArray){
		if(numberArray[num] > max){
			max = numberArray[num];
		}
	}
	return max;
} 


console.log(findMax([2,4,1,78,45,34,90,100,4,6,2,8]));

module.exports = {findMax};

