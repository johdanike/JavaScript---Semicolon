
function twoLargest(array){
    let newArray = [];
    let firstLargest =  0;
    let secondLargest = 0;

    for(let i = 0; i < array.length; i++){
        if(firstLargest > array[i]){
            firstLargest = array[i];
        }
        newArray.push(firstLargest);
        newArray.push(secondLargest);
    }
    return newArray;
}

let input = twoLargest([2,3,5,1,7]);
console.log(input);

