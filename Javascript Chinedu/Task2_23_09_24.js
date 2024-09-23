
//QUESTION ONE
function filtered(scores){
    return scores >= 70;
}

function TestScores(){
    return [65, 70, 55, 34, 79, 87, 87, 90, 100, 87, 99].filter(filtered);
}


function scores(scoreArray){
    let testScore = []
    testScore = scoreArray.filter((number) => (number >= 70))
    return testScore
}


//QUESTION TWO
function examGradeIncrementUsingMaps(scoreArray){
    let newScores = [];
   return  newScores = scoreArray.map((number) => (number + 5));
}

//QUESTION THREE
function squareOfEachNumber(array){
    let square = [];
    return square = array.map((number) => (number ** 2));
}

//QUESTION FOUR
function bookRatio(array){
    const object = {};
    let books = ["Things fall apart", "Dream big", "Think and grow rich", "Why men marry bitches"];
    for(let obj of array){
        for (let index of books){
            object[obj] = index;
        }
    }
    // for(let index in array){
    //     [index] = books[index];
    // }
    return object;
}

//QUESTION FIVE
function classesOffered(time){
    let timeSet =[];
    timeSet = time.filter((period) => (period > "11:00am"));
    return timeSet;
}

//QUESTION SIX
function expensesMonitor(array){
    let totalTimeSpent = [];
    let timeSpent = 0
   for(let amount in array){
       totalTimeSpent.push(array[amount]);
   }
   for(let index of totalTimeSpent){
       timeSpent += index;
   }
   return timeSpent;
}

let val = bookRatio(["Emily", "Jack", "Sophia", "Daniel"]);
console.log(val);

// let val = expensesMonitor({"groceries": 150, "dinning set": 100, "transportation": 50, "entertainment": 80
// });
// console.log(val);
module.exports = {TestScores, scores, examGradeIncrementUsingMaps, squareOfEachNumber, bookRatio, expensesMonitor, classesOffered};
