



/*EJEMPLO 1

    var http = require('http');
    http.createServer(function(req,res){

    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello word\n');
    
    }).listen(1337,'127.0.0.1');
    console.log('Server runing 127.0.0.1');
*/
//EJEMPLO 1
/*
 var http = require('http');
 var fs = require('fs');
 http.createServer(function (req, res) {

    if (req.url === '/favicon.ico') {
        return res.end();
    }

    var i = 2;
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    setTimeout(function () {
        fs.readFile(_filename, {
            encoding: 'utf8'
        }, function (err, content) {
            if (erro) {
                console.error(error);
                return res.end();
            }
            console.log('sending responso for' + req.url);
            res.end(content)
        });
    }, 5000);

    while (i--) {
        console.log('Loop value' + i + '\r');
    }

 }).listen(1337, '127.0.0.1');
 console.log('Server running at http://127.0.0.1:1337');
*/