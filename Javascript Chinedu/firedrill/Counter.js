const counter = {
	count: 1,
	step:  10,
	increment: function(){
			this.count += this.step;
			return this.count;
		}

};



let valueCallIncrement = counter.increment();

console.log(valueCallIncrement);