const readLine = require('readline');
const rLI = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});


let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);
let ans = num1 + num2;

rLI.question(`What is the sum of ${num1} and ${num2}? \n`, resolveAns)

let resolveAns = (answer) => {
    if (ans == answer.trim()) {
        console.log('\nCorrect!');
        rLI.close();
    } else {
        console.log(`\nWrong! The correct answer is ${ans}.`)
        rLI.close();
    }
}