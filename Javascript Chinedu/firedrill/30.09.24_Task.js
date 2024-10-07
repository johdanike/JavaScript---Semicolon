
function plusOne(array){
    let newA = [];
    let sum = "";
    for(let index = 0; index < array.length; index++){
        newA.push(array[index]);
        // console.log(newA);
        sum += newA[index];
        // console.log(sum);
    }

    sum = parseInt(sum)+1;
    // console.log(sum);
    sum = sum.toString();
    return sum;
}


function addToList(string){
    let newList = [];
    for(let index of string){
        newList.push(parseInt(index));
    }
    return newList;
}

let result = addToList(plusOne([9,9,9]));
console.log(result)


module.exports = {addToList, plusOne};
//
// function addingOneToList(string){
//     let newList = [];
//     let final = [];
//     let concat = "";
//     for(let index of string){
//         newList.push(newList[index]);
//         concat += parseInt(newList[index])+1;
//     }
//     for(let index of concat){
//         final.push(parseInt(newList[index]));
//     }
//     return final;
// }

// let valIn = addingOneToList([9,9,9]);
// console.log(valIn)