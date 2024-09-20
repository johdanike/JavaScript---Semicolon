const car = {
	make: "Toyota",
	model: "Camry",
	year: "2021"
};



function objectLoopThrough(obj){
	for(let objects in obj){
		console.log(objects+": ",obj[objects] );
	}
	return obj;
}

console.log(objectLoopThrough(car));