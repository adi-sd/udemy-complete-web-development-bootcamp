const prompt = require("prompt-sync")();

let name1 = prompt("What's your name? ");
let name2 = prompt("What's their name? ");

let loveScore = Math.random() * 100;

if (loveScore > 70) {
    console.log("You can make it!!");
} else {
    console.log(`${name1} and ${name2} scored ${loveScore} on our calculator!!!`);
}
