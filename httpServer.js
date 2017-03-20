'use strict';
const url = require('url');
const fs = require('fs');
const http = require('http');
const path = require('path');
const port = 4444;
let server = http.createServer(function(req, res) {
    let urlnew = url.parse(req.url).pathname
    let array = JSON.parse(fs.readFileSync('./pets.json'))
    let newarr = urlnew.split('/')
    res.statusCode = 200;
    if (urlnew === "/pets") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(array))
    } else if (urlnew === '/pets/0') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(array[0]))
    } else if (urlnew === '/pets/1') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(array[1]))
    } else if (urlnew != '/pets' && '/pets/0' && '/pets/1') {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found')
    }
})
server.listen(port, function(err) {
    if (err) throw err;
    console.log('Listening on port', port);
});
module.exports = server;
