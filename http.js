const http = require('http');

const server = http.createSerroute_ver(service)

server.listen('3000');

function route_service(req, res) {
    if (req.url == '/') {
        res.write("Welcome to the home page");
        res.end();
    } else {
        res.write("The page you're looking for cannot be found.");
        res.end();
    }
}