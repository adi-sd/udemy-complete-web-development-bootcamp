// This will only run in broweser, can't with node JS

weight = prompt("What is your weight?(Kg)");
height = prompt("What is your height?(meters)");

let bmi = function (weight, height) {
    return weight / Math.pow(height, 2);
};

alert("Your BMI is - " + bmi(weight, height));