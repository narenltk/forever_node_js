// includes the http library
const http = require('http');

// assigning the port 
const port = 2020;

// using the http lib and calling the server function
const server = http.createServer(function (req, res) {
    res.write("narenltk convey's belated women's day wishes");
    res.end();
});

server.listen(port, function (error) {
    if (error) {
        console.log('Really something went wrong guys', error);
    } else {
        console.log('our beloved server is listening on ' + port);
    }
});