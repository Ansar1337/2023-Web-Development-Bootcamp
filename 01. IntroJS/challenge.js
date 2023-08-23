function getMilk(money) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("Bought " + Math.floor(money / 1.5) + " bottles of milk.");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
}

function lifeInWeeks(age) {

    //Write your code here.
    let years_left = 90 - age;
    let x = Math.floor(years_left / 365);
    let y = Math.floor(years_left / 52);
    let z = Math.floor(years_left / 12);

    console.log("You have " + x + " days, " + y + " weeks, " + z + " months left.");
}

// BMI calculator:
function bmiCalculator(weight, height) {
    // weight in kgs and height in meters
    let bmi = weight / Math.pow(height, 2);
    return bmi;
}