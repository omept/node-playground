const readLine = require('readline');
const rLI = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});


let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);
let ans = num1 + num2;

rLI.question(`What is the sum of ${num1} and ${num2}? \n`, resolveAns);

function resolveAns(answer) {
    if (ans == answer.trim()) {
        rLI.setPrompt('Correct!\n');
        rLI.prompt();
        rLI.close();
    } else {
        rLI.setPrompt(`Wrong! Try again :\n`);
        rLI.prompt();
        rLI.on('line', resolveAns);
    }
}

rLI.on('close', () => console.log("Readline closed.\n"));