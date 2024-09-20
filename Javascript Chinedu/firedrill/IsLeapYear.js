function isLeapYear(year){
	if(year % 4 != 0){
		return false;
	}
	else if (year % 400 == 0){
		return true;
	}
	else if(year % 100 == 0){
		return false;
	}
	else {
		return true;
	}

	// return ((year % 4 != 0) && (year % 100 != 0) || (year % 400 == ))
	
}

let value = isLeapYear(2022);
console.log(value);

module.exports = {isLeapYear};