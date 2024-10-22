let userDetails = {
    firstName : "Chinedu",
    lastName  : "Ugbo",
    sex : "Male"
}

let result = JSON.stringify(userDetails);//send to the backend (server side)
console.log(result)

let data = '{"firstName":"Chinedu","lastName":"Ugbo","sex":"Male"}';
let answer = JSON.parse(data);//send back to the front end
console.log(answer)