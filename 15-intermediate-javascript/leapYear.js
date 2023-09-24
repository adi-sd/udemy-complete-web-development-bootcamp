const prompt = require("prompt-sync")();

let year = prompt("Please enter a year - ");

let isLeap = (year) => {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
};

if (isLeap(year)) {
    console.log("It's a leap year!");
} else {
    console.log("It's NOT a leap year!");
}
