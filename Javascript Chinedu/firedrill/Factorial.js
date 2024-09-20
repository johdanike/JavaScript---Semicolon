function factorial(number){
	let factorial = 1;
	for(let index = number; index > 0; index --){
		factorial *= index;
	}
	return factorial;
}

let value = factorial(2);
console.log(value);

module.exports = {factorial};