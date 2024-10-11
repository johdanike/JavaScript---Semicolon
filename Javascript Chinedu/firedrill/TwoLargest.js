
function twoLargest(array){
    let newArray = [];

    for(let index = 0; index < array.length; index++){
        for(let loop = index+1; loop < array.length; loop++){
            if(array[index] > array[loop]){
                array[loop] ^= array[index];
                array[index] ^= array[loop];
                array[loop] ^= array[index];
            }
        }
    }
    console.log(array);
    for(let index = array.length-1; index > 2; index--){
        newArray.push(array[index]);
    }
    return newArray;
}

let input = twoLargest([2,3,5,1,7]);
console.log(input);


let input1 = twoLargest([1,9,3,4,8,10,11,78,100]);
console.log(input1);

