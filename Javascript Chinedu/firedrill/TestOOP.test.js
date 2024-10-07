const Calculator = require("./oppclass");
const {Rectangle} = require("./task/Rectangle");



test('test that calculator can add', ()=>{
    let myCalculator = new Calculator(8,9);
    let result = myCalculator.addNumber()
    expect(result).toBe(17);
})

test("Test that isWallSquarish method works", ()=>{
    let myShapes = new Rectangle("Rectangle", 5, 6);
    let result = myShapes.isWallSquarish()
    expect(result).toBe("This shape is not squarish");
})

test("Test that shape finder works", ()=>{
    let myShapes = new Rectangle("Rectangle", 5, 6);
    let result = myShapes.getArea()
    expect(result).toBe("The area of this rectangle: 30");
})

test("Test that getname method works", ()=>{
    let myShapes = new Rectangle("Rectangle", 5, 6);
    let result = myShapes.getName()
    expect(result).toBe("Shape name: Rectangle");
})