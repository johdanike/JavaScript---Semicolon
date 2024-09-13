function isPrime(number){
	let factors = 0;
	let count = 0;
	for(let times = 1; times <= number/2; times++){
		factors = number % times;
		if(factors == 0) count++;
	}
	if(count > 1) return false;
	else return true;
}

let valueIn = isPrime(7);
console.log("Is the number a prime number?"+valueIn)

module.exports = {isPrime};