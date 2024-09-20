function sumMultiplesOfThreeAndFive(number){
	let sum = 0;
	let num1 = 3;
	let num2 = 5;
	let product = 0;
	for(let index = 0; index <= number; index++){
		sum = num1 * num2;
	}
	if(sum < number){
		product += sum;
	}
	return product;
} 

let value = sumMultiplesOfThreeAndFive(50);
console.log(value);

module.exports = {sumMultiplesOfThreeAndFive};