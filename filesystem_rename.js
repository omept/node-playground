const fs = require('fs');
// rename file
fs.arename('./sample.txt', './renamed_sample.txt', (renameCB));

function renameCB(err) {
    if (err) {
        console.log('Error occured while renaming');
        console.log(err);
    } else {
        console.log('File renamed');
    }
}