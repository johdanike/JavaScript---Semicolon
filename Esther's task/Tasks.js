// QUESTION ONE
function sumVars(num1= 2, num2 = 2) {
    let sum = 0;
    sum = num1 + num2;
    return sum;
}
// QUESTION TWO
function dividedByTenAndAddToOriginal(value){
    let result = value % 10;
    let expected = value + result;
    return expected;
}



module.exports = {sumVars, dividedByTenAndAddToOriginal};