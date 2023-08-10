// Love calculator
function loveCalculator(name1, name2) {
    // generates a random number
    let match = Math.floor(Math.random() * 100) + 1;

    console.log(name1 + " ❤️ " + name2 + ":\n" + match + " %")
}

loveCalculator("Adam", "Sarah");

// BMI Calculator
function bmiCalculator(weight, height) {
    let bmi = weight / (height * height);
    let interpretation;

    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    }
    if (bmi >= 18.5 && bmi < 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    }
    if (bmi >= 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }
    console.log(interpretation);
}

bmiCalculator(70, 180);