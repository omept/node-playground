const fs = require('fs');

// write to file
fs.writeFile("./sample.txt", "New content for the file\n", writeAction);


function writeAction(err) {
    if (err) {
        console.log('error occured.');
        console.log(err);
    } else {
        console.log('Write completed.\n')
        fs.readFile('./sample.txt', 'utf8', readAction)
    }
}

function readAction(err, file) {
    if (err) {
        console.log('error occured.');
        console.log(err);
    } else {
        console.log(file);
        console.log('Read completed.');
    }
}