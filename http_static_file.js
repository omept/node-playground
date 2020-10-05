const http = require('http');
const fs = require('fs');


http.createServer(routeService).listen(3000);

function routeService(req, res) {

    // image
    const readStream = fs.createReadStream('./static/profile.jpeg');
    res.writeHead(200, {
        'Content-type': 'image/jpg'
    });
    // json
    // const readStream = fs.createReadStream('./static/static_file_example.json');
    // res.writeHead(200, {
    //     'Content-type': 'application/json'
    // });
    // html
    // const readStream = fs.createReadStream('./static/index.html');
    // res.writeHead(200, {
    //     'Content-type': 'text/html'
    // });

    readStream.pipe(res); // Response Object is also a writable stream

}