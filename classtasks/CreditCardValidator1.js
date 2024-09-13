let cardNumber = "1234-5678-9012-3356"




function validate (number){
	let newNumber = number.replace(/[^a-zA-Z0-9 ]/g, '')
	

	if(newNumber.length == 16){
		if(typeof(newNumber) != number && newNumber.startsWith("4") || newNumber.startsWith("5") || newNumber.startsWith("6")){
			return true;
		}
	
	}
		return false
}


console.log(validate(cardNumber));




function validate2 (number){
	let next = ""
	for(let index = 0; index < number.length; index++){
		if(number[index] != "-"){
			if(number[index] == typeof(Number))
				next += number[index];
		}
	}
		if(next.length == 16){

			if(next.startsWith("4") || next.startsWith("5") || next.startsWith("6")){
				return true;
			}
		
		}
		return false	
		
}

console.log(validate2(cardNumber));
