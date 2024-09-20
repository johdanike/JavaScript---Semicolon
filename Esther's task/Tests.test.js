const {sumVars, dividedByTenAndAddToOriginal} = require("./Tasks.js");

test("Sum of two variables", ()=>{
    let result = sumVars(2,5);
    let expected = 7;
    expect(result).toBe(expected);
})

test("Divide ByTen And Add number to Original", ()=>{
    let result = dividedByTenAndAddToOriginal(25);
    let expected =  30;
    expect(result).toBe(expected);
})



