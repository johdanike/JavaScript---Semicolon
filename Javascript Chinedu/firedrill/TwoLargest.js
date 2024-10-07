function twoLargest(array){
    let newArray = [];
    for(let index=0;index<array.length;index++){
        let largest = 0;
        let secondLargest = 0
        if(largest>array[index]){
            largest = array[index];
            secondLargest = array[index+1];
            console.log(largest);
            newArray.push(largest);
        }
    }
    return newArray;
}

let input = twoLargest([2,3,5,1,7]);
console.log(input);

