//function multiplyByTwo(number){
//	let multiplier = 2;
//	return number * multiplier;
//}

function calculate(num, callback){
	return callback(num);
}

//console.log(calculate(3,multiplyByTwo));

console.log(calculate(3,(number)=>{
	let multiplier = 2;
	return number * multiplier;
}));
