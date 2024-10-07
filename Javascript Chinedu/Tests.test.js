const {countOccurence, solve} = require('./firedrill/ObjectsTasks_23_09_24.js');
const {TestScores, scores, examGradeIncrementUsingMaps, squareOfEachNumber, bookRatio, expensesMonitor, classesOffered} =require("./firedrill/Task2_23_09_24")
const {plusOne, addToList} = require("./firedrill/30.09.24_Task.js");
const Person = require("./firedrill/object.js");

test("First function", async () => {
    let result = countOccurence([1,1,2,3,2]);
    let expected = {
        '1': 2,
        '2': 2,
        '3': 1
    }
    expect(result).toEqual(expected);
})

test("second function", async () => {
    let result = solve([5,4,5,6,7,6]);
    let expected = {
        '4': 1,
        '5': 2,
        '6': 2,
        '7': 1
    }
    expect(result).toEqual(expected);
})

test("Greater than 70", async () => {
    let result = scores([65,70,55,34,70,87,87,90,100,87,99]);
    let expected = [70,  70, 87, 87, 90, 100, 87, 99];
    expect(result).toEqual(expected);
})

test("Increase score by 5", async () => {
    let result = examGradeIncrementUsingMaps([85,92,78,88,95]);
    let expected = [ 90, 97, 83, 93, 100 ];
    expect(result).toEqual(expected);
})

test("Square numbers", () => {
    let result = squareOfEachNumber([1,2,3,4]);
    let expected = [1,4,9,16];
    expect(result).toEqual(expected);
})

test("Book distribution", async () => {
    let result = bookRatio(["Emily", "Jack", "Sophia", "Daniel"]);
    let expected = {"Emily": "Things fall apart", "Jack": "Dream big", "Sophia": "Think and grow rich", "Daniel": "Why men marry bitches"};
    expect(result).toEqual(expected);
})

test("Total Amount Spent", ()=>{
    let result = expensesMonitor({"groceries": 150, "dinning set": 100, "transportation": 50, "entertainment": 80
    });
    let expected = 380;
    expect(result).toEqual(expected);
})

test("Class timing", () => {
    let result = classesOffered(["9:00am", "11:00am", "1:00pm", "3:00pm", "5:00pm"])
    let expected = ["1:00pm", "3:00pm","5:00pm"];
    expect(result).toEqual(expected);
})

test("Add One to number", ()=>{
    let result = addToList(plusOne([2,3,-6]));
    let expected = [2,3,7];
    expect(result).toEqual(expected);
})

test('test for name attribute', ()=>{
    let firstPerson = new Person("Miracle", "Female");
    expect(firstPerson.name).toEqual("Miracle");
})
