input1 = [2, 1, 5, 7, 8]; 
input2 = [4, 1, 5, 7, 9];

function evenOdd(list){
	let array = [];
	let odd = 0;
	let even = 0;
	
	for(let index = 0; index < list.length;index++){
		if(list[index] % 2 == 0)
			even++;
		else{
			odd++;
		}	
	}
		array.push(even);
		array.push(odd);
		//console.log(odd);
		//console.log(even);
		return array;
}


let valueIn = evenOdd(input1);
console.log(valueIn); 

let valueIn2 = evenOdd(input2);
console.log(valueIn2);




