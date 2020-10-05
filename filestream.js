const fs = require('fs');

const readStream = fs.createReadStream('./sample.txt', {
    encoding: 'utf8',
    autoClose: true
});

const writeStream = fs.createWriteStream('./sample2.txt', {
    encoding: 'utf8',
    autoClose: true
});

writeStream.on('finish', () => console.log('\nWritestream Ended.'));

readStream.on('data', (chuck) => {
    if (chuck) {
        writeStream.write(chuck);
    }
});

readStream.on('close', () => writeStream.end(() => console.log("Read stream trigered writestream.end() which emited a 'finish' event before executing this logging.")));