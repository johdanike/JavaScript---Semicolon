
function countOccurence(obj){
    let array = {}
    for(let objects of obj){
       array[objects] = (array[objects]||0)+1;
    }
    return array;
}

let value = countOccurence([1,1,2,3,2]);
console.log(value);


function solve(array){
    const object = {};
    for(let obj of array){
        if(object[obj] !== undefined){
            object[obj] += 1;
        }
        else{
            object[obj] = 1;
        }
    }
    return object;
}

let big = [5,4,5,6,7,6]
console.log(solve(big))

module.exports = {countOccurence, solve};

