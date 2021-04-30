//Business logic functions
var grades = {};
var grade = 0;

function add(grade,weight) {
    if (grade < 0 || grade > 100 || weight < 0 || weight > 100 || typeof(grade) != "number" || typeof(weight) != "number") {
        console.log("Error: Incorrect values entered.");
        return;
    }

    grades[grade] = weight;
}

function calculateMark() {
    let numerator = 0;
    let denominator = 0;

    let keys = Object.keys(grades);

    if (keys.length == 0) {
        grade = 0;
        return;
    }

    for (let i = 0; i < keys.length; ++i) {
        numerator += Number(grades[keys[i]]) * Number(keys[i]);
        denominator += Number(grades[keys[i]]);
    }

    let result = numerator / denominator;
    result = result.toFixed(2);

    grade = result;
}

function del() {
    let keys = Object.keys(grades);

    if (keys.length == 0) {
        grade = 0;
        return;
    }

    let lastElement = keys.length-1;
    for (let i = 0; i < keys.length; ++i) {
        if (i == lastElement) {
            
            delete grades[keys[i]];
        }
    }
    calculateMark();
}

function projected(currentMark, finalWeight, desiredMark) {

    if (currentMark < 0 || currentMark > 100 || finalWeight < 0 || finalWeight > 100 || desiredMark < 0 || desiredMark > 100) {
        console.log("Invalid values were entered.");
        return;
    }

    currentMark = currentMark/100;
    finalWeight = finalWeight/100;
    desiredMark = desiredMark/100;

    let calculation = (desiredMark - (1 - finalWeight) * currentMark) / finalWeight;
    calculation *= 100;
    calculation = calculation.toFixed(2);
    
    return calculation;
}

/* Projected function tests
projected(70,50,80);
console.log(projected(85,20,90));
*/

/*
Test_1 - calculateMark
add(80,50);
add(60,40);
add(75,10);
calculateMark();
*/


//Test_2 - del
/*
add(80,50);
add(60,40);
add(75,10);
del();
del();
del();
del();
console.log(grades);
console.log(grade);
*/

/* Test_3 - add
add(-50,50);
add("bee",50);
*/