function solve(arr) {
    let sum = 0;
    const new_list = [];
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
        if(index % 2 === 1){
            new_list.push(sum);
            sum = 0;
        }
    }
    return new_list;
}

function sumArray(list){
    const newt = [];
    for(let index = 0; index < list.length; index+=2){
            newt.push(list[index] + list[index+1]);
    }
    return newt;
}

let value = sumArray([2,3,4,5,6,7]);
console.log(value);


let valueIn = solve([2,3,4,5,6,7]);
console.log(valueIn);

let valueto = solve([1,3,5,1,6,3]);
console.log(valueto);

module.exports = {solve, sumArray};




