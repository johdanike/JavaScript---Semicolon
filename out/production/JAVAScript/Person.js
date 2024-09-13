let person = {
	firstName: "Bola",
	lastName: "Ikechukwu",
	age: 16,
	occupation: "Student",
	hobbies: ["figthing, dancing, singing"]
}

person.occupation = "Farmer";
//console.log(person);  


//NESTED FUNCTIONS
function outerFunction(){
	console.log("outer function");
	function innerFunction(){
		console.log("inner function");
	}
	return innerFunction();	
}


outerFunction();


//ARROW FUNCTION
const result = (num1, num2)=> {
	return num1 * num2;
}

console.log(result(2,3));


//FUNCTION AS A RETURNED STATEMENT
function calculate(){
	return{
		add:function(a,b){
			return a + b;
		},
		subtract:(a,b)=>{
			return a - b;
		}
	};
};

//let result2 = calculate();
console.log(calculate().add(2,3));
console.log(calculate().subtract(2,3));

