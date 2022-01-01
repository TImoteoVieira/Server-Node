// --------> server basic

let server = require('http')

server.createServer(function(req, res){
    res.end("<h1> Hello world </h1>")
}).listen(8001)

console.log('server up')


// --------> server route 

let server = require ('http')

server.createServer(function(req, res){
    
    let categoria = req.url

    if (categoria == '/frontend'){
        res.end("Tecnologia Frontend Vuejs")
    }
    if (categoria == '/backend'){
        res.end("Tecnologia Backend Python")
    }
    if (categoria == '/fullstack'){
        res.end("Tecnologia Full Stack JavaScript")
    }
}).listen(8002)

console.log('server up')


//---------> server route file

let server = require('http')
let fs = require('fs');
server.createServer(function (req, res){

    if (req.url == '/index'){
        fs.readFile(__dirname + '/index.html', function(err, html){
            res.end(html);
        });
    }
}).listen(8003)
console.log('server up')