function reverseArray(array){
	let rev = [];
	let end = array.length;
	for(let outer = array.length-1; outer >= 0; outer--){
		rev.push(array[outer]);
	}
	return rev;
}

let value = reverseArray([90,4,6,2,8]);
console.log(value);

module.exports = {reverseArray};