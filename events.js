const EventEmitter = require('events');

const evEm = new EventEmitter();

evEm.on('greet', () => {
    console.log("Hello world");
});

evEm.on('CAP Space', () => {
    console.log("testing event name with uppercase character and space");
});

evEm.on('tuts', (num1, num2) => {
    console.log(num1 + num2);
});

evEm.emit('greet');
evEm.emit('CAP Space');
evEm.emit('tuts', 4, 5);