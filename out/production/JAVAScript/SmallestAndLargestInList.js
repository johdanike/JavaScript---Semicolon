let arrayObj1 = [2,3,6,7,8];
let arrayObj2 = [5,3,6,9,8];



function sort(list){
	let newArray = [];
	//for(let array in list){
	for(let index = 0; index < list.length; index++){
		for(let loop = index + 1; loop < list.length; loop++ ){
			if(list[index] > list[loop]){
				list[loop] ^= list[index];
				list[index] ^= list[loop];
				list[loop] ^= list[index];
			//newArray += list[index];
			}
		}
	}
	return list;
	
}

function smallBig(nums){
	let newArray = [];
		let lowest = nums[0];
		let biggest = nums[0];
	//for(let index = 0; index < nums.length; index++){
	for(let index in nums){
		if(nums[index] < lowest){
			lowest = nums[index];
		}
		if(nums[index] > biggest){
			biggest = nums[index];
		}
	}
		newArray.push(lowest);
		newArray.push(biggest);
		//console.log(lowest);
		//console.log(biggest);


		return newArray;
}


console.log(sort(arrayObj2));
console.log(smallBig(sort(arrayObj2)));
console.log(smallBig(arrayObj2));
console.log(smallBig(arrayObj1));
console.log(smallBig(sort(arrayObj1)));
